"""
🚨 核心原则 (Core Rule):
在这个文件里，严禁使用 float 或者 decimal.Decimal 来表示价格或流动性。
必须严格使用大整数 (BigInt - Python内置的 int) 和按位截断 (//) 来模拟 Solidity 物理法则。

请参考 04_Resources/Project1_V3_Math_CheatSheet.md 的公式来写你的代码。
"""

# V3 魔法常数 Q96
Q96 = 2**96

class V3PoolStateMachine:
    def __init__(self):
        """
        初始化池子状态。
        TODO: 作为 CTO，你需要思考这里应该接收哪些参数？（例如初始价格、初始流动性）
        并且你需要自己设计如何去存储 Tick 字典、Current_Tick 和手续费全局变量。
        """
        pass

    # TODO: 请自行设计属于你的 Swap 函数或其他核心法则函数。
    # 提示：白皮书里提到了 AmountIn, AmountOut, LimitPrice。你要怎么设计你的 API？

