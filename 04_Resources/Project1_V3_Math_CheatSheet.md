# 🧮 Project 1 军火库：V3 核心数学与 Python 映射作弊纸 (Math Cheat Sheet)

## 📌 警示：为什么大模型写给你的 V3 数学公式一跑就崩？

当你在做 Project 1 (Uniswap V3 状态机仿真) 时，你一定会去问 ChatGPT 或 Claude：“请用 Python 帮我写一个 Uniswap V3 的池子内交换公式”。
它们通常会非常贴心地丢给你这样一段代码：
```python
# ❌ 典型的 AI 幻觉和“商科式”仿真代码
import math
from decimal import Decimal

# 假设价格 P = 2000
price = Decimal('2000.0')
sqrt_price = price.sqrt()

# 某人投入了 1 个 ETH (dx = 1)，计算能换出多少 USDC (dy)
dy = dx * current_liquidity / sqrt_price # ... 后面跟一堆浮点数运算
```
**千万不要用这种代码去交作业！你的 CI 极压测试会死得非常惨。**

### 这是致命的降维错误 (The Decimal Hallucination)：
以太坊虚拟机（EVM）以及 Solidity 根本**不懂什么是小数点**。以太坊世界的物理法则是：世界上只有最大长达 256 位的二进制大整数 (`uint256`)。
为了表示 $0.5$ 这个概念，V3 使用了一种叫做 **$Q64.96$ 定点数** 的黑科技：它把整数强行向右平移 96个二进制位（相当于乘上 $2^{96}$）。
如果你的底层计算环境图省事用了 `decimal.Decimal` 甚至系统原生浮点数 `float` 去模拟交易，在极细微的交叉流动性计算中，Python 的十进制四舍五入规则会和 Solidity 中苛刻的**整数截断取整（Truncation）**产生 $10^{-18}$ 级别的漂移差异。
在动辄千万美金的 TVL 面前，这 $10^{-18}$ 的缝隙，就会演变成大模型生造出来的 **“不存在的无风险套利提款机”**。你的模型会判定策略 A 赚钱，但实际上丢到链上一秒钟就会被黑客清算成渣。

---

## ⚔️ 唯一真理：用 Python 原生 `int` 像素级还原 EVM 物理法则

作为全球极少数原生**自带无限精度大整数（Arbitrary-precision BigInt）**的语言，Python 的内建原生 `int` 无缝等价于以太坊的 `uint256`。

**二阶建模法则：** 
**所有的底层状态运算（算账），强制使用 `int` 与按位移运算。`Decimal` 这把牛刀必须且只能用来在图表中把天书翻译给 CEO 看。**

下面是你在撰写 `src/simulator.py` 时，**必须直接复制/参考**的几个核心防弹公式：

### 1. 魔法数字：$2^{96}$ 到底是个啥？
在代码文件的最开头，必须定义好这个将主宰你 8 周命运的宏：
```python
# 魔法常数 2^96，用来把普通数字变形成 Q64.96 定点数
Q96 = 2**96

# 你可以先感受一下它的庞大：
# Q96 = 79228162514264337593543950336
```

### 2. [会议室层] -> [机房层]：把人类价格转换为 V3 状态机价格
作为上帝视角的你，设定了开盘价 $P = 2500$ USDC/ETH。怎么把它塞进系统？
$$ \text{sqrtPriceX96} = \sqrt{P} \times 2^{96} $$

```python
import math

def price_to_sqrtpx96(p: float) -> int:
    """
    仅在初始化（如设置起始环境）时调用此函数。
    把人类世界直观的价格 P 转化为底层的 uint256 状态变量。
    """
    return int(math.sqrt(p) * Q96)

# 测试：
# sqrtp_x96 = price_to_sqrtpx96(2500)
# >>> 3961408125713216879677197516800  <-- Это才是存在系统里的真实物理长相！
```

### 3. [机房层] -> [会议室层]：把天书解释给 CEO
在 `metrics.csv` 落表或使用 `matplotlib` 画图时，你需要把那一长串天书转回人话：
$$ P = \left(\frac{\text{sqrtPriceX96}}{2^{96}}\right)^2 $$

```python
from decimal import Decimal, getcontext
getcontext().prec = 30 # 给 CEO 出具报告时，30位精度足够了

def sqrtpx96_to_price(sqrtpx96: int) -> Decimal:
    """
    只在最后收集数据（DataCollector）或可视化时使用！
    """
    # 先做除法，再平方
    ratio = Decimal(sqrtpx96) / Decimal(Q96)
    return ratio ** 2
```

### 4. 🧮 授人以渔：把白皮书方程式转化为 Python 的位运算（你的核心战役）

在这个项目里，你的核心任务是把 Uniswap V3 白皮书里的方程式（如 Eq 6.13, 6.15）翻译为没有小数误差的 Python 整数代码。

**以白皮书中的 $\Delta \sqrt{P}$ 公式为例：**
白皮书公式：$\Delta \sqrt{P} = \frac{\Delta y}{L}$

在 Solidity 和你的仿真器底层，这不是一个简单的浮点数除法。因为 $\sqrt{P}$ 是以 $Q64.96$ 存储的。

你**不能**这样写：
```python
# ❌ 错误示范：使用了浮点数除法，产生幻觉误差，且没有携带 Q96 定点数缩放
delta_sqrtp = delta_y / L
```

**CTO 的思考框架（请自行推导实际代码）：**
1. **统一数量级**：分子 $\Delta y$ 是普通整数，分母 $L$ 是普通整数。相除会得到普通浮点数。但系统需要的是 $Q64.96$！所以，你必须在除法发生前，把分子强行拉扯到 $Q64.96$ 维度（即 `delta_y << 96`）。
2. **截断除法防超发**：在所有涉及到“计算应该吐给用户多少钱”或“价格变化”时，请使用 Python 的向零截断整数除法（`//`）。这完美对应 Solidity 中的 `uint256` 除法法则。

**现在，你的挑战来了（请不要去问 AI 要代码，请自己写）：**
请自行翻开 V3 白皮书，找到“基于投入的 $\Delta x$ 或 $\Delta y$ 来计算下一个价格 $\sqrt{P_{next}}$ ”的核心公式。
然后，利用上述的“左移 96 位”和“底板除法 `//`”原理，把它写在你的 `simulator.py` 里。

---

## 💡 Sprint 1 极限断言法则
当你在撰写 `tests/test_invariants.py` 时，**所有的 Assert（断言）必须在底层的 Q64.96 整数域进行对比**。千万不要把两边还原回 `float` 去对比大小，那毫无技术含金量。

你的红线代码应该长这样（理念）：
```python
def test_buy_zero_should_not_move_price():
    # 物理断言原则：如果向系统输入 0 个币的交易，底层的 sqrtp_x96 必须一丝不苟，绝对等于交易前。
    # assert next_price_x96 == initial_price_x96
    pass
```

只有当你能自己拼凑出正确的位移公式并扛过这些断言时，你才是真正掌握了二阶机制建模的密码。祝武运昌隆！
