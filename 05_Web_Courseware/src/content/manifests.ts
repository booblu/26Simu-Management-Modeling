import type {
  CourseAct,
  LectureHomeMeta,
  LectureId,
  LectureManifest,
  Slide,
} from "./types";

function md(strings: TemplateStringsArray, ...values: Array<string | number>) {
  return String.raw({ raw: strings }, ...values).trim();
}

function slide(definition: Slide) {
  return definition;
}

export const lectureOrder: LectureId[] = [
  "l1",
  "l2",
  "l3",
  "l4",
  "l5",
  "l6",
  "l7",
  "l8",
];

export const courseActs: CourseAct[] = [
  {
    id: "第一幕",
    title: "把世界变成可计算对象",
    summary: "先学会把业务写成机器，再证明这台机器值得被相信。",
    lectures: ["l1", "l2"],
  },
  {
    id: "第二幕",
    title: "在不确定与耦合中求生",
    summary:
      "承认摩擦、左尾、活网和高维黑盒，让系统从纸面正确走向现实存活。",
    lectures: ["l3", "l4", "l5", "l6"],
  },
  {
    id: "第三幕",
    title: "从玩家升级为规则设计者",
    summary:
      "看见生态为何会自毁，并进一步学会重写规则，让自利行为服务于更好秩序。",
    lectures: ["l7", "l8"],
  },
];

export const lectureHomeMeta: Record<LectureId, LectureHomeMeta> = {
  l1: {
    anchorQuestion: "我该如何把世界写成机器？",
    positioning: "课程起点：从商业故事和流程图，切到状态、事件、策略与资源。",
    bridgeLine: "先把机器写出来，下一讲才谈它凭什么值得相信。",
  },
  l2: {
    anchorQuestion: "这台机器凭什么值得相信？",
    positioning: "第一幕收束：从能跑，进入能抗脏数据、极压和黑天鹅。",
    bridgeLine: "机器可信之后，下一讲开始面对现实摩擦与动作成本。",
  },
  l3: {
    anchorQuestion: "就算它是对的，为什么还是会死于现实摩擦？",
    positioning: "第二幕开场：把状态机从真空世界拖回泥泞现实。",
    bridgeLine: "会算摩擦还不够，下一讲还要承认未来根本不是一个点。",
  },
  l4: {
    anchorQuestion: "就算计入摩擦，为什么还不能用单点未来做决策？",
    positioning: "第二幕加压：从最优动作转向概率云、分位数与左尾。",
    bridgeLine: "看见分布之后，下一讲继续承认系统根本不是孤岛。",
  },
  l5: {
    anchorQuestion: "就算考虑了尾部，为什么系统仍会死于外部网络？",
    positioning: "第二幕中心转折：把单机脆弱性升级成活网中的传染脆弱性。",
    bridgeLine: "看见活网还不够，下一讲要从高维噪音里直接揪出命门。",
  },
  l6: {
    anchorQuestion: "在这么复杂的系统里，我到底该盯住哪一个命门？",
    positioning: "第二幕收束：从复杂解释转向高压提纯与一句能执行的命令。",
    bridgeLine: "当命门找出来之后，下一讲会把你拖进更脏的多主体生态。",
  },
  l7: {
    anchorQuestion: "就算我盯住了命门，为什么一进入多主体生态还是会踩踏？",
    positioning: "第三幕开场：从系统视角升级到生态视角，看见坏均衡如何自发生长。",
    bridgeLine: "一旦承认问题根源在规则，最后一讲就必须改牌桌。",
  },
  l8: {
    anchorQuestion: "既然问题根源在规则，那我该如何重写规则？",
    positioning: "课程终章：从优秀玩家升级为规则设计者与秩序建筑师。",
    bridgeLine: "这不是下一讲的桥，而是整门课的闭环与毕业动作。",
  },
};

const lectureManifestsMap: Record<LectureId, LectureManifest> = {
  l1: {
    id: "l1",
    title: "管理抽象的剪刀：从商业混沌到计算状态机",
    shortTitle: "管理抽象的剪刀",
    act: "第一幕",
    blackboardLine: "管理的第一步，不是把故事讲圆，而是把系统写成机器。",
    sourcePaths: [
      "01_Lectures/Week01_State_Space_Modeling/Outline_L1_管理抽象的剪刀：从商业混沌到计算状态机.md",
      "01_Lectures/Week01_State_Space_Modeling/1.1_引言_流程图的消亡与离散化降维.md",
      "01_Lectures/Week01_State_Space_Modeling/1.2_核心心法_抽象的四大物理支柱.md",
      "01_Lectures/Week01_State_Space_Modeling/1.3_案例演练_三甲医院急诊分诊系统的状态空间降维.md",
      "01_Lectures/Week01_State_Space_Modeling/1.4_高管雷区_奥卡姆剃刀、边界截断与过度拟合陷阱.md",
      "01_Lectures/Week01_State_Space_Modeling/1.5_沙盘接口_下午实验预告：DeFi黑暗森林的物理映射.md",
    ],
    slides: [
      slide({
        id: "l1-cover",
        kind: "cover",
        title: "L1 · 管理抽象的剪刀",
        visualHint: "quote",
        bodyMd: md`
### 第一幕 · 把世界变成可计算对象

**从商业混沌到计算状态机**

把故事  
切成机器
        `,
        speakerNotesMd: md`
这一页是整门课的起跑线。

开场不要先讲技术，而是先讲权力迁移：过去的管理者可以靠流程图、会议纪要和经验口径管理复杂系统；今天的管理者如果不能把边界、资源、目标和死法写成机器可执行的结构，就会把组织交给程序员和黑天鹅共同决定。

课堂语气要明确：这门课不是在教学生把业务讲得更漂亮，而是在教他们把业务切成可计算、可验证、可推演的骨架。
        `,
        sourceRefs: [
          "01_Lectures/Week01_State_Space_Modeling/1.1_引言_流程图的消亡与离散化降维.md",
        ],
      }),
      slide({
        id: "l1-position",
        kind: "position",
        title: "本讲在整门课中的位置",
        visualHint: "diagram",
        bodyMd: md`
- **上一层世界**：流程图、故事、经验口径
- **本讲动作**：切成状态、事件、策略、资源、边界
- **下一讲问题**：这台机器凭什么值得相信？

> L1 负责把世界写成机器
        `,
        speakerNotesMd: md`
这一页要把学生拉进课程大地图。

讲清楚三件事：

1. 这不是一门散装工具课，而是一条连续升级链。
2. L1 的职责不是“解释商业”，而是“建立一台最小可执行机器”。
3. 没有 L1 的抽象动作，后面的 V&V、摩擦、蒙特卡洛、耦合和机制设计都无从谈起。
        `,
        sourceRefs: [
          "_Instructor_Admin/Drafts/08_八讲概念总地图_三幕剧与四条主线.md",
          "01_Lectures/Week01_State_Space_Modeling/Outline_L1_管理抽象的剪刀：从商业混沌到计算状态机.md",
        ],
      }),
      slide({
        id: "l1-illusion",
        kind: "illusion",
        title: "要击碎的旧认知",
        visualHint: "checklist",
        bodyMd: md`
**流程图让人安心，但机器根本看不懂。**

- 它看不见并发
- 它看不见极值冲击
- 它看不见资源断裂时刻
- 它只能给人文学化安全感
        `,
        speakerNotesMd: md`
这里要把“流程图失效”讲得足够痛。

可以直接点学生最熟悉的对象：门店流程、供应链流程、审批链路。强调这些图对人类会议很好用，但对机器执行几乎等于零，因为里面没有严格状态、没有阈值、没有资源上限、没有事件顺序。

顺势引到一句关键话：**在 AI 与自动化时代，管理者不能继续躲在文学化语言后面。**
        `,
        sourceRefs: [
          "01_Lectures/Week01_State_Space_Modeling/1.1_引言_流程图的消亡与离散化降维.md",
        ],
      }),
      slide({
        id: "l1-concept-machine",
        kind: "concept",
        title: "状态机五问",
        visualHint: "diagram",
        bodyMd: md`
把任何业务问题先压成五个问题：

1. 当前有哪些状态？
2. 什么事件触发变化？
3. 哪些资源是真正稀缺？
4. 策略如何改写下一状态？
5. 哪些边界一旦穿透就必须 fail-hard？
        `,
        speakerNotesMd: md`
这是 L1 最值得写在黑板上的工作框架。

如果学生之后忘了细节，也要让他们记住：面对任何业务，都先问状态、事件、资源、策略、边界。

这里可以强调“管理真正的职责”：

- 定义边界
- 定义资源
- 定义目标
- 定义死法

这四件事过去被隐藏在经验里，现在必须被明确写出来。
        `,
        sourceRefs: [
          "01_Lectures/Week01_State_Space_Modeling/1.1_引言_流程图的消亡与离散化降维.md",
          "01_Lectures/Week01_State_Space_Modeling/1.2_核心心法_抽象的四大物理支柱.md",
        ],
      }),
      slide({
        id: "l1-concept-abstraction",
        kind: "concept",
        title: "错误抽象 vs 正确抽象",
        visualHint: "quote",
        bodyMd: md`
**错误抽象**

> 优化体验、增强协同、避免拥堵

**正确抽象**

> 当队列大于阈值、床位归零、医生缺席持续 20 分钟时，进入二级拥堵状态并触发腾退
        `,
        speakerNotesMd: md`
这一页是让学生第一次感受到“语言转向”的震撼。

你可以明确说：好管理者和开会型管理者的差别，不在于谁更会说大词，而在于谁更敢把判断写成能被机器和现实同时检验的规则。

这里顺带强调颗粒度：

- 不要把现实每一片树叶塞进模型
- 只保留会改变策略、边界和死法的变量
        `,
        sourceRefs: [
          "01_Lectures/Week01_State_Space_Modeling/1.1_引言_流程图的消亡与离散化降维.md",
          "01_Lectures/Week01_State_Space_Modeling/1.4_高管雷区_奥卡姆剃刀、边界截断与过度拟合陷阱.md",
        ],
      }),
      slide({
        id: "l1-case-hospital",
        kind: "case",
        title: "案例：把急诊室从故事切成机器",
        visualHint: "checklist",
        bodyMd: md`
急诊系统最小骨架：

- **实体**：病人
- **资源**：红区床位、医生、分诊台
- **状态**：排队人数、床位占用、医生可用数
- **事件**：红码到达、手术完成
- **策略**：腾退、分流、熔断转院
        `,
        speakerNotesMd: md`
急诊案例的作用，是把抽象语言第一次落到人人都懂的真实场景。

讲的时候不要追求医疗细节，而要强调“切割动作”：

1. 先删掉故事噪音
2. 再保留决定命运的变量
3. 最后把极压时刻的动作写成规则

这也是学生第一次应该感受到：建模不是开始写代码，而是先把世界切成代码能接住的骨架。
        `,
        sourceRefs: [
          "01_Lectures/Week01_State_Space_Modeling/1.3_案例演练_三甲医院急诊分诊系统的状态空间降维.md",
        ],
      }),
      slide({
        id: "l1-case-delivery",
        kind: "case",
        title: "第一版交付到底长什么样",
        visualHint: "checklist",
        bodyMd: md`
**L1 最低交付**

- 状态变量表
- 事件表
- 资源瓶颈表
- 策略法则草图

> 听懂概念不算完成  
> 写成规格书才算
        `,
        speakerNotesMd: md`
这一页要把课程气质彻底立住。

明确告诉学生：L1 不是知识理解周，而是第一次把业务问题写成机器可执行规格书的周。

可以直接点到仓库结构：

- spec.yaml
- src 中的核心状态对象
- tests 的基础路径

让他们知道课程从第一周就要求“落地成物”。
        `,
        sourceRefs: [
          "01_Lectures/Week01_State_Space_Modeling/1.2_核心心法_抽象的四大物理支柱.md",
          "01_Lectures/Week01_State_Space_Modeling/1.3_案例演练_三甲医院急诊分诊系统的状态空间降维.md",
        ],
      }),
      slide({
        id: "l1-pitfall",
        kind: "pitfall",
        title: "高管雷区：不是越细越高级",
        visualHint: "checklist",
        bodyMd: md`
三类典型误判：

- 把一切都塞进模型，维度爆炸
- 边界不清，把解释层和计算层搅在一起
- 过度拟合历史，把过去当未来
        `,
        speakerNotesMd: md`
这一页承接 1.4 的核心警告。

讲法上要从“技术陷阱”提升到“管理陷阱”：

- 变量太多，高管根本不知道拉哪根杆
- 边界不清，模型就会失去责任边界
- 拟合历史太漂亮，现实一偏离就崩

用一句话收住：**粗糙但正确的方向，远胜于精密绝伦的错误计算。**
        `,
        sourceRefs: [
          "01_Lectures/Week01_State_Space_Modeling/1.4_高管雷区_奥卡姆剃刀、边界截断与过度拟合陷阱.md",
        ],
      }),
      slide({
        id: "l1-lab",
        kind: "lab",
        title: "下午实验：DeFi 只是最纯粹的状态机靶场",
        visualHint: "table",
        bodyMd: md`
**沙盘映射**

- 实体 → 交易订单
- 资源 → 池子资产
- 状态 → 价格区间与流动性
- 事件 → 大额兑换
- 策略 → 定价曲线与拒绝条件
        `,
        speakerNotesMd: md`
L1 的实验要明确：不是去学币圈黑话，而是去练状态机映射。

DeFi 被选作靶场，是因为它反馈快、约束硬、激励裸露。正因为几乎没有人情缓冲，学生才能在一个下午内看到“资源如何被规则重排”。

提醒他们：进实验前先写完三张纸——状态字典、事件表、策略规则表。
        `,
        sourceRefs: [
          "01_Lectures/Week01_State_Space_Modeling/1.5_沙盘接口_下午实验预告：DeFi黑暗森林的物理映射.md",
        ],
      }),
      slide({
        id: "l1-summary",
        kind: "summary",
        title: "收束：从故事转向机器",
        visualHint: "quote",
        bodyMd: md`
> 管理的第一步，不是把故事讲圆，而是把系统写成机器。

**带着这句黑板句进入下一讲：**

就算你把机器写出来了，  
它凭什么不会在极端输入下悄悄撒谎？
        `,
        speakerNotesMd: md`
结尾要形成明确的不满足感。

学生到这里应该感觉：我已经知道如何把业务切成状态机了，但这台机器看起来仍然太脆弱、太天真。

下一讲顺势切入 V&V：

- 它能不能抗脏输入
- 能不能抗黑天鹅
- 能不能在边界穿透时 fail-hard
        `,
        sourceRefs: [
          "01_Lectures/Week01_State_Space_Modeling/1.1_引言_流程图的消亡与离散化降维.md",
          "01_Lectures/Week01_State_Space_Modeling/Outline_L1_管理抽象的剪刀：从商业混沌到计算状态机.md",
        ],
      }),
    ],
  },
  l2: {
    id: "l2",
    title: "抵御模型的欺骗：极压测试与商业底线断言",
    shortTitle: "抵御模型的欺骗",
    act: "第一幕",
    blackboardLine: "一台机器只有在极端输入下仍不撒谎，才有资格被部署到现实。",
    sourcePaths: [
      "01_Lectures/Week02_Vulnerability_and_Stress_Testing/Outline_L2_抵御模型的欺骗：极压测试与商业底线断言.md",
      "01_Lectures/Week02_Vulnerability_and_Stress_Testing/2.1_引言_当完美模型遭遇黑天鹅：V&V与系统脆弱性.md",
      "01_Lectures/Week02_Vulnerability_and_Stress_Testing/2.2_核心心法_绝对不变量(Invariants)：商业世界的底线断言.md",
      "01_Lectures/Week02_Vulnerability_and_Stress_Testing/2.3_案例演练_波音737_MAX与供应链黑盒：缺乏边界断言的灾难.md",
      "01_Lectures/Week02_Vulnerability_and_Stress_Testing/2.4_高管雷区_形式化验证的成本幻觉与战略冗余度设计.md",
      "01_Lectures/Week02_Vulnerability_and_Stress_Testing/2.5_沙盘接口_下午实验预告：如何用“垃圾订单”炸毁一台金融机器.md",
    ],
    slides: [
      slide({
        id: "l2-cover",
        kind: "cover",
        title: "L2 · 抵御模型的欺骗",
        visualHint: "quote",
        bodyMd: md`
### 第一幕 · 守住机器的底线

**从能跑**

到  
**能在极端输入下不撒谎**
        `,
        speakerNotesMd: md`
L2 是第一幕的守门动作。

如果说 L1 让学生第一次把业务写成机器，那么 L2 就要让他们意识到：能跑的机器可能是最危险的，因为它看起来太像正确答案。
        `,
        sourceRefs: [
          "01_Lectures/Week02_Vulnerability_and_Stress_Testing/2.1_引言_当完美模型遭遇黑天鹅：V&V与系统脆弱性.md",
        ],
      }),
      slide({
        id: "l2-position",
        kind: "position",
        title: "本讲在整门课中的位置",
        visualHint: "diagram",
        bodyMd: md`
- **上一讲**：把世界写成机器
- **本讲**：证明机器不会在极端输入下撒谎
- **下一讲**：即便机器正确，也会死于现实摩擦

> L2 让机器第一次有资格进入现实
        `,
        speakerNotesMd: md`
这里要提醒学生：L1 的抽象动作并不保证系统可信，最多只是建立了机器骨架。

L2 引入的，是工程级敬畏：

- Verification：系统建对了吗
- Validation：建的是对的系统吗
        `,
        sourceRefs: [
          "_Instructor_Admin/Drafts/08_八讲概念总地图_三幕剧与四条主线.md",
        ],
      }),
      slide({
        id: "l2-illusion",
        kind: "illusion",
        title: "要击碎的旧认知",
        visualHint: "checklist",
        bodyMd: md`
**能跑，不等于可信。**

- 回测漂亮，不等于假设正确
- 没报错，不等于不会带错活进下一秒
- 方向对，不等于工程足够稳
        `,
        speakerNotesMd: md`
这一页的目标是打掉“只要曲线漂亮就安全”的幻觉。

可以借次贷危机直接讲：华尔街的模型不是不会算，而是默认了一个荒谬世界。也就是说，**最危险的模型常常是内部极稳、外部极错的模型。**
        `,
        sourceRefs: [
          "01_Lectures/Week02_Vulnerability_and_Stress_Testing/2.1_引言_当完美模型遭遇黑天鹅：V&V与系统脆弱性.md",
        ],
      }),
      slide({
        id: "l2-concept-vnv",
        kind: "concept",
        title: "V&V：两句每天都该贴在桌前的拷问",
        visualHint: "checklist",
        bodyMd: md`
1. **Verification**：我们把系统建对了吗？
2. **Validation**：我们建的是对的系统吗？

四象限里最危险的是：

> 算得稳定  
> 但世界假设荒谬
        `,
        speakerNotesMd: md`
V&V 一定要讲得足够锋利，不能像术语科普。

推荐直接给学生四象限判断：

- VV 都通过：目标状态
- 只过 Verification：最危险
- 只过 Validation：方向对但工程烂
- 都不过：反而比较容易被识别
        `,
        sourceRefs: [
          "01_Lectures/Week02_Vulnerability_and_Stress_Testing/2.1_引言_当完美模型遭遇黑天鹅：V&V与系统脆弱性.md",
        ],
      }),
      slide({
        id: "l2-concept-invariants",
        kind: "concept",
        title: "不变量与断言：把红线钉在咽喉上",
        visualHint: "equation",
        bodyMd: md`
**不变量类型**

- 守恒类
- 边界类
- 排他类
- 单调类
- 权限类

**断言挂点**

- 输入边界
- 状态更新后
- 关键输出前
        `,
        speakerNotesMd: md`
这里是 L2 的工程核心。

要强调：断言不是给平庸错误看的，而是给黑天鹅准备的。

同时要讲清“挂在哪里”这件事：如果只在最外层温柔提醒，而不在输入、状态更新、输出这些关键咽喉位置硬拦截，那就不是真正的防线。
        `,
        sourceRefs: [
          "01_Lectures/Week02_Vulnerability_and_Stress_Testing/2.2_核心心法_绝对不变量(Invariants)：商业世界的底线断言.md",
        ],
      }),
      slide({
        id: "l2-case-737",
        kind: "case",
        title: "案例：737 MAX 不是事故故事，而是断言缺失",
        visualHint: "diagram",
        bodyMd: md`
把事故翻译成课程语言：

- **状态**：姿态、迎角、尾翼、飞行员输入
- **事件**：传感器异常、系统反复介入
- **缺失红线**：输入一致性、累积动作上限、人工接管优先级
        `,
        speakerNotesMd: md`
这一页一定要把学生从“新闻阅读者”切回“建模者”。

737 MAX 最关键的不是传感器坏了，而是系统默认自己不会看错，于是把可疑输入直接升级成强制动作。

在任何行业里都可以翻译成同一句话：

- 单点输入不能直接驱动不可逆动作
- 自动修正必须有上限
- 人工接管必须保留最终优先级
        `,
        sourceRefs: [
          "01_Lectures/Week02_Vulnerability_and_Stress_Testing/2.3_案例演练_波音737_MAX与供应链黑盒：缺乏边界断言的灾难.md",
        ],
      }),
      slide({
        id: "l2-case-delivery",
        kind: "case",
        title: "学生交付从这周开始变硬",
        visualHint: "checklist",
        bodyMd: md`
仓库里至少新增三类东西：

- 假设与红线
- 攻击与脏输入测试
- 关键咽喉处的 fail-hard 逻辑

> tests 不再是附属品  
> 而是生死审判区
        `,
        speakerNotesMd: md`
这里把课程执行标准拉高。

要明确告诉学生：从这周起，src 不只是实现区，也是风险暴露区；tests 不是形式主义，而是真正的护城河。
        `,
        sourceRefs: [
          "01_Lectures/Week02_Vulnerability_and_Stress_Testing/2.1_引言_当完美模型遭遇黑天鹅：V&V与系统脆弱性.md",
          "01_Lectures/Week02_Vulnerability_and_Stress_Testing/2.2_核心心法_绝对不变量(Invariants)：商业世界的底线断言.md",
        ],
      }),
      slide({
        id: "l2-pitfall",
        kind: "pitfall",
        title: "高管雷区：想把一切都形式化验证",
        visualHint: "checklist",
        bodyMd: md`
安全冗余也会拖死系统：

- 规则太多，延迟变重
- 防线太厚，正常业务也被误杀
- 资源撒太开，真正致命点反而没重防

**关键不是全防住，而是哪里值得重防。**
        `,
        speakerNotesMd: md`
L2 不能只讲“多加防线”，还要讲“冗余预算”。

要帮学生建立更成熟的高管判断：

- 高爆炸半径
- 不可逆
- 会击穿信任底座

只有同时满足这些条件的位置，才值得砸下最重的断言和验证预算。
        `,
        sourceRefs: [
          "01_Lectures/Week02_Vulnerability_and_Stress_Testing/2.4_高管雷区_形式化验证的成本幻觉与战略冗余度设计.md",
        ],
      }),
      slide({
        id: "l2-lab",
        kind: "lab",
        title: "下午实验：先做攻击者，再做守夜者",
        visualHint: "checklist",
        bodyMd: md`
实验上半场：

- 注入非法输入
- 试图耗尽资源
- 利用顺序错乱
- 穿透价格与资金边界

实验下半场：

- 在咽喉处挂断言
- 写 fail-hard 说明
        `,
        speakerNotesMd: md`
L2 的实验必须形成强烈角色反转。

先让学生亲手炸毁一台看似纯洁的金融机器，再让他们回来做守夜者。只有先凝视过系统被撕碎的样子，他们才会理解断言和不变量不是纸面文章。
        `,
        sourceRefs: [
          "01_Lectures/Week02_Vulnerability_and_Stress_Testing/2.5_沙盘接口_下午实验预告：如何用“垃圾订单”炸毁一台金融机器.md",
        ],
      }),
      slide({
        id: "l2-summary",
        kind: "summary",
        title: "收束：可信，不是因为你自信",
        visualHint: "quote",
        bodyMd: md`
> 一台机器只有在极端输入下仍不撒谎，才有资格被部署到现实。

**下一讲的新麻烦：**

即便模型方向正确、边界也守住，  
它仍可能死于现实摩擦与过度动作。
        `,
        speakerNotesMd: md`
这里要把第一幕收束成一句很硬的话：L1-L2 解决的是“机器能不能被写出来并值得相信”。

接着马上把学生推入第二幕：

现实世界不是没有摩擦的真空环境。就算机器可信，也可能在频繁切换状态时把自己磨死。
        `,
        sourceRefs: [
          "01_Lectures/Week02_Vulnerability_and_Stress_Testing/Outline_L2_抵御模型的欺骗：极压测试与商业底线断言.md",
        ],
      }),
    ],
  },
  l3: {
    id: "l3",
    title: "最优化幻觉与摩擦成本：非理想环境下的战略折叠",
    shortTitle: "最优化幻觉与摩擦成本",
    act: "第二幕",
    blackboardLine: "不是所有可优化点都值得优化；动作过密，本身就是一种死法。",
    sourcePaths: [
      "01_Lectures/Week03_Strategic_Friction_and_Agility/Outline_L3_最优化幻觉与摩擦成本：非理想环境下的战略折叠.md",
      "01_Lectures/Week03_Strategic_Friction_and_Agility/3.1_引言_物理学无法逃避的阻力：商业世界里的摩擦成本.md",
      "01_Lectures/Week03_Strategic_Friction_and_Agility/3.2_核心心法_迟钝的艺术：主动干预与被动防守的损益方程.md",
      "01_Lectures/Week03_Strategic_Friction_and_Agility/3.3_案例演练_跨国供应链的“动态调优”是如何拖跨企业的.md",
      "01_Lectures/Week03_Strategic_Friction_and_Agility/3.4_高管雷区_行动偏误(Action_Bias)与微操的代价.md",
      "01_Lectures/Week03_Strategic_Friction_and_Agility/3.5_沙盘接口_下午实验预告：让矿工费(Gas)与滑点教做人.md",
    ],
    slides: [
      slide({
        id: "l3-cover",
        kind: "cover",
        title: "L3 · 最优化幻觉与摩擦成本",
        visualHint: "quote",
        bodyMd: md`
### 第二幕 · 在不确定中求生

**不是所有正确动作**

都值得执行
        `,
        speakerNotesMd: md`
L3 是第二幕的开场。

在学生刚建立起“可信机器”的成就感之后，立刻告诉他们：真实世界充满摩擦，动作本身是要交税的。这里要把课程从工程正确性，推进到管理执行成本。
        `,
        sourceRefs: [
          "01_Lectures/Week03_Strategic_Friction_and_Agility/3.1_引言_物理学无法逃避的阻力：商业世界里的摩擦成本.md",
        ],
      }),
      slide({
        id: "l3-position",
        kind: "position",
        title: "本讲在整门课中的位置",
        visualHint: "diagram",
        bodyMd: md`
- **上一讲**：机器可以被验证、被守住
- **本讲**：动作本身开始有成本、有延迟、有磨损
- **下一讲**：即便计入摩擦，也不能只看单点未来

> 第二幕从“正确”转向“现实存活”
        `,
        speakerNotesMd: md`
这里把第二幕的语气立住：我们已经不再满足于模型方向正确，而开始问它能否在现实世界里活下来。

摩擦是学生第一次真正感受到“正确但不值得做”的地方。
        `,
        sourceRefs: [
          "_Instructor_Admin/Drafts/08_八讲概念总地图_三幕剧与四条主线.md",
        ],
      }),
      slide({
        id: "l3-illusion",
        kind: "illusion",
        title: "要击碎的旧认知",
        visualHint: "checklist",
        bodyMd: md`
**越敏捷、越频繁地调优，不一定越高级。**

- 状态切换有固定税
- 时间延迟会制造滑点
- 组织协调会放大成本
- 高频动作会把利润磨成灰
        `,
        speakerNotesMd: md`
这一页要故意讲得反直觉。

学生熟悉的商业口号是“敏捷、快速、实时优化”。L3 要告诉他们：在泥泞现实里，高频微操往往等于用频率自杀。
        `,
        sourceRefs: [
          "01_Lectures/Week03_Strategic_Friction_and_Agility/3.1_引言_物理学无法逃避的阻力：商业世界里的摩擦成本.md",
        ],
      }),
      slide({
        id: "l3-concept-friction",
        kind: "concept",
        title: "摩擦至少有四层",
        visualHint: "checklist",
        bodyMd: md`
1. 显性现金成本
2. 时间时延成本
3. 组织协调成本
4. 机会与认知成本

> 摩擦不是报表脚注  
> 而是目标函数的一部分
        `,
        speakerNotesMd: md`
这里不要把摩擦讲成手续费小知识。

真正的重点是：一旦摩擦存在，高管追求的就不再是理论收益最大化，而是**净收益最大化，且在有限操作次数内最大化**。
        `,
        sourceRefs: [
          "01_Lectures/Week03_Strategic_Friction_and_Agility/3.1_引言_物理学无法逃避的阻力：商业世界里的摩擦成本.md",
          "01_Lectures/Week03_Strategic_Friction_and_Agility/3.2_核心心法_迟钝的艺术：主动干预与被动防守的损益方程.md",
        ],
      }),
      slide({
        id: "l3-concept-deadband",
        kind: "concept",
        title: "迟钝的艺术：给系统装死区与冷却期",
        visualHint: "equation",
        bodyMd: md`
真正成熟的控制律要包含：

- **绝对阈值**：偏离多大才行动
- **相对阈值**：收益需至少覆盖成本几倍
- **冷却时间**：刚动过就不准立刻再动

$$ \Delta 实际收益 = 理论收益 - 切换税 - 滑点 $$
        `,
        speakerNotesMd: md`
这是 L3 的核心心法页。

把“迟钝”讲成纪律，而不是懒惰。真正高级的系统不是贴着最优曲线抖动，而是能容忍噪音、只在厚利出现时重拳出击。
        `,
        sourceRefs: [
          "01_Lectures/Week03_Strategic_Friction_and_Agility/3.2_核心心法_迟钝的艺术：主动干预与被动防守的损益方程.md",
        ],
      }),
      slide({
        id: "l3-case-gmart",
        kind: "case",
        title: "案例：G-Mart 不是没看到机会，而是把差价误认成利润",
        visualHint: "diagram",
        bodyMd: md`
跨州调货看上去赚两头差价：

- 佛州积压
- 德州告急
- AI 天天调车

**结果：**

显性搬运税 + 时间滑点 + 本地风险暴露  
= 物流部史诗级净亏损
        `,
        speakerNotesMd: md`
这一页要帮助学生建立一个关键判断：

有价格差，不等于有利润差；
有利润差，不等于值得马上行动。

中间隔着整条现实世界的血河。
        `,
        sourceRefs: [
          "01_Lectures/Week03_Strategic_Friction_and_Agility/3.3_案例演练_跨国供应链的“动态调优”是如何拖跨企业的.md",
        ],
      }),
      slide({
        id: "l3-case-delivery",
        kind: "case",
        title: "L3 要求学生交付什么新东西",
        visualHint: "checklist",
        bodyMd: md`
从这周开始，策略规格里要多出：

- 状态切换税
- 最低行动阈值
- 缓冲资源保留规则
- 冷却逻辑

> 不只写系统怎么动  
> 还要写系统什么时候必须不动
        `,
        speakerNotesMd: md`
一定要把“迟钝”落成学生仓库里的结构，而不是心灵鸡汤。

这周的项目成熟度，体现在他们能否清楚写出：

- 何时动作
- 何时拒绝动作
- 为什么拒绝
        `,
        sourceRefs: [
          "01_Lectures/Week03_Strategic_Friction_and_Agility/3.2_核心心法_迟钝的艺术：主动干预与被动防守的损益方程.md",
          "01_Lectures/Week03_Strategic_Friction_and_Agility/3.3_案例演练_跨国供应链的“动态调优”是如何拖跨企业的.md",
        ],
      }),
      slide({
        id: "l3-pitfall",
        kind: "pitfall",
        title: "高管雷区：行动偏误会逼着你瞎折腾",
        visualHint: "checklist",
        bodyMd: md`
为什么高管停不下来？

- 不动作看起来像没价值
- 焦虑时总想“做点什么”
- 数据大屏让噪音看起来像信号

**不行动不是不管理，  
而是更高级的管理。**
        `,
        speakerNotesMd: md`
L3 的人性层在这里。

要讲清楚，很多高频微操不是因为高管不懂，而是因为：

- 职业展示压力
- 情绪止痛需求
- 可视化看板诱惑

这也是为什么管理者必须同时治理系统和组织情绪。
        `,
        sourceRefs: [
          "01_Lectures/Week03_Strategic_Friction_and_Agility/3.4_高管雷区_行动偏误(Action_Bias)与微操的代价.md",
        ],
      }),
      slide({
        id: "l3-lab",
        kind: "lab",
        title: "下午实验：让 Gas 与滑点亲自教你做人",
        visualHint: "checklist",
        bodyMd: md`
实验前先写：

- 每次动作的摩擦预算
- 出手阈值
- 冷却规则

实验结束后比较：

- 高频微操净收益
- 迟钝策略净收益
        `,
        speakerNotesMd: md`
L3 的实验要把摩擦变成屏幕上看得见的数字。

学生不再只靠“觉得应该调”，而要真的算：

- Gas 费
- 滑点
- 抢跑损失
- 再平衡频率
        `,
        sourceRefs: [
          "01_Lectures/Week03_Strategic_Friction_and_Agility/3.5_沙盘接口_下午实验预告：让矿工费(Gas)与滑点教做人.md",
        ],
      }),
      slide({
        id: "l3-summary",
        kind: "summary",
        title: "收束：别被频率骗了",
        visualHint: "quote",
        bodyMd: md`
> 不是所有可优化点都值得优化；动作过密，本身就是一种死法。

**下一讲的新麻烦：**

就算你已经学会不乱动，  
未来仍然根本不是一个点。
        `,
        speakerNotesMd: md`
L3 的结尾要把学生带向新的不满足感：

我已经学会算摩擦、装死区、拒绝噪音动作了。但这仍然默认我对未来的输入有一个相对稳定的想象。

下一讲就是去打掉这个默认前提：未来不是一个值，而是一片分布。
        `,
        sourceRefs: [
          "01_Lectures/Week03_Strategic_Friction_and_Agility/Outline_L3_最优化幻觉与摩擦成本：非理想环境下的战略折叠.md",
        ],
      }),
    ],
  },
  l4: {
    id: "l4",
    title: "放弃水晶球预测：战略推演、实验设计与概率认怂",
    shortTitle: "放弃水晶球预测",
    act: "第二幕",
    blackboardLine: "高管不该预测未来的一个点，而该管理一整片分布的左尾。",
    sourcePaths: [
      "01_Lectures/Week04_Monte_Carlo_and_Tail_Risks/Outline_L4_放弃水晶球预测：战略推演、实验设计与概率认怂.md",
      "01_Lectures/Week04_Monte_Carlo_and_Tail_Risks/4.1_引言_均值陷阱与单点预测的破产.md",
      "01_Lectures/Week04_Monte_Carlo_and_Tail_Risks/4.2_核心心法_拥抱概率云：蒙特卡洛仿真(Monte_Carlo).md",
      "01_Lectures/Week04_Monte_Carlo_and_Tail_Risks/4.3_案例演练_跨国消费电子新品首发的系统压力面绘制.md",
      "01_Lectures/Week04_Monte_Carlo_and_Tail_Risks/4.4_高管雷区_尾部风险(Tail_Risk)与“活下去”的战略认怂.md",
      "01_Lectures/Week04_Monte_Carlo_and_Tail_Risks/4.5_沙盘接口_下午实验预告：让算法经历10万次闪崩瀑布的洗礼.md",
    ],
    slides: [
      slide({
        id: "l4-cover",
        kind: "cover",
        title: "L4 · 放弃水晶球预测",
        visualHint: "quote",
        bodyMd: md`
### 第二幕 · 管理概率云

未来不是一个点  
而是一片

**分布**
        `,
        speakerNotesMd: md`
L4 的语气要从动作纪律继续升级到认知纪律。

哪怕学生已经学会不被噪音逼着乱动，他们仍然可能犯一个更深的错：把未来压成一个体面的单点数字。
        `,
        sourceRefs: [
          "01_Lectures/Week04_Monte_Carlo_and_Tail_Risks/4.1_引言_均值陷阱与单点预测的破产.md",
        ],
      }),
      slide({
        id: "l4-position",
        kind: "position",
        title: "本讲在整门课中的位置",
        visualHint: "diagram",
        bodyMd: md`
- **上一讲**：就算动作正确，也要先算摩擦
- **本讲**：就算计入摩擦，也不能拿一个均值假装未来
- **下一讲**：就算看见分布，系统也不是孤岛

> L4 把未来从点，改写成云
        `,
        speakerNotesMd: md`
L4 是第二幕里非常关键的一跳。

前面学生学的是“怎么不乱动”，这一讲开始问“你凭什么以为你知道未来要往哪边动”。
        `,
        sourceRefs: [
          "_Instructor_Admin/Drafts/08_八讲概念总地图_三幕剧与四条主线.md",
        ],
      }),
      slide({
        id: "l4-illusion",
        kind: "illusion",
        title: "要击碎的旧认知",
        visualHint: "checklist",
        bodyMd: md`
**单点估计是管理世界里最体面的幻觉。**

- 历史均值不等于未来路径
- 平均输入不等于平均结果
- 企业不是按平均日子活的
- 真正决定命运的是最坏那几天
        `,
        speakerNotesMd: md`
建议直接用“头在烤箱、脚在冰柜”那个经典比喻。

让学生强烈意识到：平均值之所以危险，不是因为它总是错，而是因为它会制造一种“未来已被理解”的幻觉。
        `,
        sourceRefs: [
          "01_Lectures/Week04_Monte_Carlo_and_Tail_Risks/4.1_引言_均值陷阱与单点预测的破产.md",
        ],
      }),
      slide({
        id: "l4-concept-average",
        kind: "concept",
        title: "为什么平均值会杀人",
        visualHint: "equation",
        bodyMd: md`
$$ F(平均变量) \neq 平均的(F(变量)) $$

平均值会失效，通常因为：

- 系统是非线性的
- 系统有路径依赖
- 左尾对生存更敏感
        `,
        speakerNotesMd: md`
这页要把“均值陷阱”从统计学笑话变成管理学刀法。

重点讲一句：企业不是按平均状态活着的，而是按最难熬的那几天决定命运。
        `,
        sourceRefs: [
          "01_Lectures/Week04_Monte_Carlo_and_Tail_Risks/4.1_引言_均值陷阱与单点预测的破产.md",
        ],
      }),
      slide({
        id: "l4-concept-montecarlo",
        kind: "concept",
        title: "蒙特卡洛不是预测术，而是坏宇宙生成器",
        visualHint: "checklist",
        bodyMd: md`
三步看未来：

1. 把输入从点改成分布
2. 随机抽 1 万到 10 万个平行宇宙
3. 看左尾、看底线穿透、看需要补多厚安全垫

最该看的不是均值，  
而是**存活率与最差分位。**
        `,
        speakerNotesMd: md`
一定要压住学生把蒙特卡洛学成“随机多跑几次”的冲动。

真正的成熟度，在于：

- 分布来自数据与机制
- 输出不只看平均利润
- 左尾和安全垫才是管理动作的来源
        `,
        sourceRefs: [
          "01_Lectures/Week04_Monte_Carlo_and_Tail_Risks/4.2_核心心法_拥抱概率云：蒙特卡洛仿真(Monte_Carlo).md",
        ],
      }),
      slide({
        id: "l4-case-titan",
        kind: "case",
        title: "案例：Titan Tech 首发为什么会在 3% 宇宙里暴死",
        visualHint: "diagram",
        bodyMd: md`
均值世界里：

- 良率 90%
- 海运 21 天
- 需求 50 万

概率云世界里：

- 良率暴跌
- 海运长尾延迟
- 网红引爆 250 万订单

**三个小波动同频叠加，  
就会把系统打穿。**
        `,
        speakerNotesMd: md`
这个案例的重点不是“随机性很坏”，而是“耦合断裂面被看见了”。

学生要理解：单看每个变量都还好，但一旦同时发生、形成共振，系统就会爆。
        `,
        sourceRefs: [
          "01_Lectures/Week04_Monte_Carlo_and_Tail_Risks/4.3_案例演练_跨国消费电子新品首发的系统压力面绘制.md",
        ],
      }),
      slide({
        id: "l4-case-delivery",
        kind: "case",
        title: "学生从这周开始要交的不只是利润点位",
        visualHint: "checklist",
        bodyMd: md`
模拟结果至少要汇报：

- 中位数与分位区间
- 底线穿透概率
- 最差 5% 或 1% 的损失
- 为堵左尾需要补多厚安全垫
        `,
        speakerNotesMd: md`
从 L4 开始，Decision Memo 的语言应该变。

不再只说“预计赚多少”，而要开始说：

- 最糟时会不会死
- 死几次
- 为了活下来要牺牲什么顶部收益
        `,
        sourceRefs: [
          "01_Lectures/Week04_Monte_Carlo_and_Tail_Risks/4.2_核心心法_拥抱概率云：蒙特卡洛仿真(Monte_Carlo).md",
          "01_Lectures/Week04_Monte_Carlo_and_Tail_Risks/4.3_案例演练_跨国消费电子新品首发的系统压力面绘制.md",
        ],
      }),
      slide({
        id: "l4-pitfall",
        kind: "pitfall",
        title: "高管雷区：把小概率理解成‘不用管’",
        visualHint: "quote",
        bodyMd: md`
左尾真正可怕的不是小概率，  
而是：

- 不可逆
- 会放大
- 没有下一把

**你不是在算收益率，  
你是在决定还有没有资格继续留在牌桌上。**
        `,
        speakerNotesMd: md`
这一页要把尾部风险教育讲到骨子里。

推荐直接用俄罗斯轮盘赌比喻：哪怕赢面 95%，只要输一次就永远结束，那个项目就不值得。

顺势引出“战略认怂”：

- 加厚安全垫
- 放弃单点最优
- 给系统装刹车
        `,
        sourceRefs: [
          "01_Lectures/Week04_Monte_Carlo_and_Tail_Risks/4.4_高管雷区_尾部风险(Tail_Risk)与“活下去”的战略认怂.md",
        ],
      }),
      slide({
        id: "l4-lab",
        kind: "lab",
        title: "下午实验：把你亲手写的系统扔进 1 万个坏宇宙",
        visualHint: "checklist",
        bodyMd: md`
进实验前先定义：

- 随机输入长什么样
- 什么叫系统死亡
- 你要看哪几个输出指标

实验结束后必须回答：

- 存活率是多少
- 左尾有多黑
- 安全垫该补多少
        `,
        speakerNotesMd: md`
L4 的实验要让学生切身体验认知坍塌。

他们会发现：之前以为很稳的系统，一旦被丢进足够多的坏宇宙，仍然会在某个角落暴露从未见过的死法。
        `,
        sourceRefs: [
          "01_Lectures/Week04_Monte_Carlo_and_Tail_Risks/4.5_沙盘接口_下午实验预告：让算法经历10万次闪崩瀑布的洗礼.md",
        ],
      }),
      slide({
        id: "l4-summary",
        kind: "summary",
        title: "收束：别再用一个数假装理解未来",
        visualHint: "quote",
        bodyMd: md`
> 高管不该预测未来的一个点，而该管理一整片分布的左尾。

**下一讲的新麻烦：**

就算你看见了分布和左尾，  
系统也仍然可能死于外部活网。
        `,
        speakerNotesMd: md`
L4 结束时，第二幕的“不确定性”维度已经打开，但系统依然默认是单体的。

下一讲要专门击碎这个默认前提：你的系统可能根本不是死于自己，而是死于它所连接的那个外部系统突然断氧。
        `,
        sourceRefs: [
          "01_Lectures/Week04_Monte_Carlo_and_Tail_Risks/Outline_L4_放弃水晶球预测：战略推演、实验设计与概率认怂.md",
        ],
      }),
    ],
  },
  l5: {
    id: "l5",
    title: "孤岛的覆灭：系统高维耦合与反身性连环崩盘",
    shortTitle: "系统高维耦合与反身性",
    act: "第二幕",
    blackboardLine: "你可能不是死于自己做错了什么，而是死于你所连接的那个系统突然断氧。",
    sourcePaths: [
      "01_Lectures/Week05_Systemic_Coupling_and_Contagion/Outline_L5_孤岛的覆灭：系统高维耦合与反身性连环崩盘.md",
      "01_Lectures/Week05_Systemic_Coupling_and_Contagion/5.1_引言_为什么单体最优会在网络中死去.md",
      "01_Lectures/Week05_Systemic_Coupling_and_Contagion/5.2_核心心法_耦合、反身性与清算瀑布.md",
      "01_Lectures/Week05_Systemic_Coupling_and_Contagion/5.3_案例演练_跨协议对冲与供应链金融的连环传染.md",
      "01_Lectures/Week05_Systemic_Coupling_and_Contagion/5.4_高管雷区_安全幻觉、单点外挂与隐藏杠杆.md",
      "01_Lectures/Week05_Systemic_Coupling_and_Contagion/5.5_沙盘接口_下午实验预告：当预言机插针引发全系统强平.md",
    ],
    slides: [
      slide({
        id: "l5-cover",
        kind: "cover",
        title: "L5 · 孤岛的覆灭",
        visualHint: "quote",
        bodyMd: md`
### 第二幕 · 活网中的生死

局部最优  
一旦接入网络  
也可能立刻暴死
        `,
        speakerNotesMd: md`
L5 是第二幕的中心转折。

前面学生已经承认未来是分布，但很多人仍然默认“我的系统边界是稳定的”。L5 就是来打掉这个最后的孤岛幻觉。
        `,
        sourceRefs: [
          "01_Lectures/Week05_Systemic_Coupling_and_Contagion/5.1_引言_为什么单体最优会在网络中死去.md",
        ],
      }),
      slide({
        id: "l5-position",
        kind: "position",
        title: "本讲在整门课中的位置",
        visualHint: "diagram",
        bodyMd: md`
- **上一讲**：未来是一片分布
- **本讲**：系统根本不是一个点，而是一张活网
- **下一讲**：在活网黑盒里，哪条因子最值得你盯死

> L5 把脆弱性从单机升级成网络传染
        `,
        speakerNotesMd: md`
这一页要明确：

L4 教的是“不要把未来看成点”，
L5 教的是“不要把系统看成点”。
        `,
        sourceRefs: [
          "_Instructor_Admin/Drafts/08_八讲概念总地图_三幕剧与四条主线.md",
        ],
      }),
      slide({
        id: "l5-illusion",
        kind: "illusion",
        title: "要击碎的旧认知",
        visualHint: "checklist",
        bodyMd: md`
只要我把自己这一摊做好，我就安全。

这句话在活网时代通常是错的，因为：

- 你的变量已被外部系统改写
- 你的对冲可能只是把风险藏到幕后
- 别人的断氧会穿透你的边界
        `,
        speakerNotesMd: md`
这里要讲得很现实：供应链、借贷系统、支付网络、预言机、授信、外部 API，全都可能成为你以为“在系统外”的命门。
        `,
        sourceRefs: [
          "01_Lectures/Week05_Systemic_Coupling_and_Contagion/5.1_引言_为什么单体最优会在网络中死去.md",
        ],
      }),
      slide({
        id: "l5-concept-coupling",
        kind: "concept",
        title: "耦合、反身性、清算瀑布",
        visualHint: "diagram",
        bodyMd: md`
三件必须同时理解的事：

- **耦合**：我的健康依赖你的价格、库存或信用
- **反身性**：下跌会制造更多下跌
- **清算瀑布**：局部失衡被强制动作放大成系统崩塌
        `,
        speakerNotesMd: md`
L5 的核心概念页，要讲清“活网里的死法是怎么长出来的”。

尤其是反身性：价格下跌 → 健康因子恶化 → 被迫抛售 → 价格继续下跌，这种环路是很多系统死法的真正引擎。
        `,
        sourceRefs: [
          "01_Lectures/Week05_Systemic_Coupling_and_Contagion/5.2_核心心法_耦合、反身性与清算瀑布.md",
        ],
      }),
      slide({
        id: "l5-concept-dependencies",
        kind: "concept",
        title: "从单机视角升级到依赖结构视角",
        visualHint: "checklist",
        bodyMd: md`
从今天开始，每台机器都必须回答：

- 靠哪些外部接口活着
- 健康状态依赖谁的价格或流动性
- 哪些单点一断，就会立刻传染
- 我的安全垫到底够不够厚
        `,
        speakerNotesMd: md`
建议在课堂上直接要求学生开始画依赖清单：

- 外部价格源
- 上游库存
- 信用授信
- 结算对手方
- 关键 API

只有把这些依赖显性化，L6 的命门识别才有基础。
        `,
        sourceRefs: [
          "01_Lectures/Week05_Systemic_Coupling_and_Contagion/5.2_核心心法_耦合、反身性与清算瀑布.md",
        ],
      }),
      slide({
        id: "l5-case-defi",
        kind: "case",
        title: "案例 A：跨协议对冲为什么会变成连环爆炸",
        visualHint: "diagram",
        bodyMd: md`
看似稳健的跨协议结构：

- 这里借
- 那里押
- 别处做对冲

真正的死法却是：

- 预言机插针
- 抵押品下跌
- 清算触发
- 多个协议同时抽氧
        `,
        speakerNotesMd: md`
DeFi 案例的重点不是术语，而是让学生看到：

所谓“对冲”，很多时候只是把风险从单点暴露，换成多节点同步脆弱。
        `,
        sourceRefs: [
          "01_Lectures/Week05_Systemic_Coupling_and_Contagion/5.3_案例演练_跨协议对冲与供应链金融的连环传染.md",
        ],
      }),
      slide({
        id: "l5-case-supplychain",
        kind: "case",
        title: "案例 B：供应链金融里的同一死法",
        visualHint: "diagram",
        bodyMd: md`
现实商业镜像：

- 核心企业信用一松
- 保理与授信一起收缩
- 账期延长
- 上下游现金流同时缺氧

**你不是死于自己库存错了，  
而是死于整张网一起抽筋。**
        `,
        speakerNotesMd: md`
这一页要帮助学生把 L5 从链上世界拉回现实商业。

目标是让他们承认：网络耦合不是 DeFi 特例，而是现代供应链、金融链、支付链和平台链的共性结构。
        `,
        sourceRefs: [
          "01_Lectures/Week05_Systemic_Coupling_and_Contagion/5.3_案例演练_跨协议对冲与供应链金融的连环传染.md",
        ],
      }),
      slide({
        id: "l5-pitfall",
        kind: "pitfall",
        title: "高管雷区：安全幻觉、单点外挂与隐藏杠杆",
        visualHint: "checklist",
        bodyMd: md`
最常见的三种自欺：

- 以为接了外挂服务就更安全
- 以为纸面对冲就等于风险中和
- 为了多榨收益，把缓冲压得极薄

> 顺境里最漂亮的效率  
> 常常就是逆境里最快的死法
        `,
        speakerNotesMd: md`
这一页要和 L4 的“安全垫”接起来。

L5 不是否认效率，而是提醒：一旦系统嵌在活网里，很多顺境收益其实来自“偷偷卖掉安全垫”。
        `,
        sourceRefs: [
          "01_Lectures/Week05_Systemic_Coupling_and_Contagion/5.4_高管雷区_安全幻觉、单点外挂与隐藏杠杆.md",
        ],
      }),
      slide({
        id: "l5-lab",
        kind: "lab",
        title: "下午实验：当预言机插针引发全系统强平",
        visualHint: "checklist",
        bodyMd: md`
实验里要观测：

- 谁先断氧
- 哪条依赖最先传染
- 哪个强制动作把风险放大
- 哪层缓冲最先被吃光

实验结束后仓库里必须有：

- 耦合拓扑
- 关键依赖清单
- 传染剧本
        `,
        speakerNotesMd: md`
L5 的实验目标，是让学生第一次“看见网络死法的拓扑”。

不是只看最终谁爆仓，而是要看传染路径、放大节点和缓冲消耗顺序。
        `,
        sourceRefs: [
          "01_Lectures/Week05_Systemic_Coupling_and_Contagion/5.5_沙盘接口_下午实验预告：当预言机插针引发全系统强平.md",
        ],
      }),
      slide({
        id: "l5-summary",
        kind: "summary",
        title: "收束：别把自己误认成孤岛",
        visualHint: "quote",
        bodyMd: md`
> 你可能不是死于自己做错了什么，而是死于你所连接的那个系统突然断氧。

**下一讲的新麻烦：**

既然系统这么复杂，  
那我到底该盯住哪一个真正的命门？
        `,
        speakerNotesMd: md`
L5 的结尾要形成强烈压迫感：世界已经不再是一台机器，而是一张活网。

接着自然导向 L6：既然活网这么复杂，真正高级的动作就不再是泛泛“我知道很复杂”，而是找出那条最值得盯死的命门。
        `,
        sourceRefs: [
          "01_Lectures/Week05_Systemic_Coupling_and_Contagion/Outline_L5_孤岛的覆灭：系统高维耦合与反身性连环崩盘.md",
        ],
      }),
    ],
  },
  l6: {
    id: "l6",
    title: "透视黑盒内部：因子敏感度剥离与一页纸高管决策艺术",
    shortTitle: "因子敏感度与一页纸决策",
    act: "第二幕",
    blackboardLine: "复杂模型如果不能被压缩成一句命令，就还没有完成它的管理使命。",
    sourcePaths: [
      "01_Lectures/Week06_Sensitivity_and_Decision_Memo/Outline_L6_透视黑盒内部：因子敏感度剥离与“一页纸”高管决策艺术.md",
      "01_Lectures/Week06_Sensitivity_and_Decision_Memo/6.1_引言_为什么复杂模型如果不能压缩成命令就是失败.md",
      "01_Lectures/Week06_Sensitivity_and_Decision_Memo/6.2_核心心法_从高维黑盒中揪出真正的命门.md",
      "01_Lectures/Week06_Sensitivity_and_Decision_Memo/6.3_案例演练_做市机器人与全球首发网络的命门识别.md",
      "01_Lectures/Week06_Sensitivity_and_Decision_Memo/6.4_高管雷区_图表堆砌、伪洞察与没有手刹的报告.md",
      "01_Lectures/Week06_Sensitivity_and_Decision_Memo/6.5_沙盘接口_下午实验预告：把几百万条结果压成一页纸军令.md",
    ],
    slides: [
      slide({
        id: "l6-cover",
        kind: "cover",
        title: "L6 · 透视黑盒内部",
        visualHint: "quote",
        bodyMd: md`
### 第二幕 · 复杂性提纯

复杂模型  
如果压不成命令  
就等于失败
        `,
        speakerNotesMd: md`
L6 是第二幕的收束。

经过摩擦、分布和活网之后，学生很容易掉进新的深渊：我知道系统很复杂，所以我就给你更多分析、更多图、更多情景。

L6 就是来打掉这种“复杂正确废话”。
        `,
        sourceRefs: [
          "01_Lectures/Week06_Sensitivity_and_Decision_Memo/6.1_引言_为什么复杂模型如果不能压缩成命令就是失败.md",
        ],
      }),
      slide({
        id: "l6-position",
        kind: "position",
        title: "本讲在整门课中的位置",
        visualHint: "diagram",
        bodyMd: md`
- **上一讲**：系统是活网，不再是孤岛
- **本讲**：从高维黑盒中揪出真正支配生死的命门
- **下一讲**：就算盯住命门，生态里仍可能一起踩踏

> L6 从复杂解释走向可执行命令
        `,
        speakerNotesMd: md`
这页要讲清 L6 的尊严：它不是在削弱复杂性，而是在复杂性之上榨取执行性。
        `,
        sourceRefs: [
          "_Instructor_Admin/Drafts/08_八讲概念总地图_三幕剧与四条主线.md",
        ],
      }),
      slide({
        id: "l6-illusion",
        kind: "illusion",
        title: "要击碎的旧认知",
        visualHint: "checklist",
        bodyMd: md`
分析越多，答案就会自动浮出来。

现实里更常见的是：

- 图表越多，越失去行动能力
- 变量越多，越看不见主次
- 报告越长，越没人知道该按哪根按钮
        `,
        speakerNotesMd: md`
L6 的旧认知页，要专门瞄准咨询式和数据团队式的惯性：把分析量误当成决策质量。
        `,
        sourceRefs: [
          "01_Lectures/Week06_Sensitivity_and_Decision_Memo/6.1_引言_为什么复杂模型如果不能压缩成命令就是失败.md",
        ],
      }),
      slide({
        id: "l6-concept-sensitivity",
        kind: "concept",
        title: "敏感性分析不是术语，而是找命门的刀",
        visualHint: "checklist",
        bodyMd: md`
要做的不是“变量都看一遍”，
而是回答：

- 哪个因子最支配结果
- 哪组交互最危险
- 哪个阈值一穿就要 kill switch
- 哪个指标最值得被挂到一页纸上
        `,
        speakerNotesMd: md`
这页不要把课程讲成统计方法目录。

要反复强调：敏感性分析的目标，不是解释得更复杂，而是找出**真正支配命运的少数因子**。
        `,
        sourceRefs: [
          "01_Lectures/Week06_Sensitivity_and_Decision_Memo/6.2_核心心法_从高维黑盒中揪出真正的命门.md",
        ],
      }),
      slide({
        id: "l6-concept-memo",
        kind: "concept",
        title: "一页纸 Memo 的真正作用",
        visualHint: "checklist",
        bodyMd: md`
一页纸不是压缩字数，
而是压缩责任：

- 盯哪三个指标
- 哪个阈值一穿必须动作
- 动作是什么
- 谁来签字、谁来担责
        `,
        speakerNotesMd: md`
一页纸 Memo 要从管理动作去讲，不要讲成写作技巧。

好的 Memo 会把复杂系统压成一句可签字、可部署、可承担后果的话。
        `,
        sourceRefs: [
          "01_Lectures/Week06_Sensitivity_and_Decision_Memo/6.2_核心心法_从高维黑盒中揪出真正的命门.md",
          "01_Lectures/Week06_Sensitivity_and_Decision_Memo/6.5_沙盘接口_下午实验预告：把几百万条结果压成一页纸军令.md",
        ],
      }),
      slide({
        id: "l6-case-marketmaker",
        kind: "case",
        title: "案例 A：做市机器人真正怕的不是所有波动",
        visualHint: "diagram",
        bodyMd: md`
做市系统看起来有无数变量，
但真正支配它生死的通常只剩少数几条：

- 再平衡阈值
- 滑点容忍
- Gas 成本
- 流动性抽干速度
        `,
        speakerNotesMd: md`
L6 的案例要帮助学生看到：高维黑盒常常只被一两个暗中统治的因子支配。

做市机器人这个例子尤其适合，因为前面几讲的实验经验可以直接回灌进来。
        `,
        sourceRefs: [
          "01_Lectures/Week06_Sensitivity_and_Decision_Memo/6.3_案例演练_做市机器人与全球首发网络的命门识别.md",
        ],
      }),
      slide({
        id: "l6-case-launch",
        kind: "case",
        title: "案例 B：全球首发网络里，命门不在所有地方同时存在",
        visualHint: "diagram",
        bodyMd: md`
首发系统可能很大，
但真正最值得盯死的，常常是：

- 良率穿底
- 空运切换阈值
- 现金安全垫

**复杂网络里真正要紧的，  
不是全部，而是那一根一断即死的神经。**
        `,
        speakerNotesMd: md`
这一页把 L4 的 Titan Tech 案例往前推进一步：看见左尾之后，还要进一步问哪个因子最值得挂在高管面板最上面。
        `,
        sourceRefs: [
          "01_Lectures/Week06_Sensitivity_and_Decision_Memo/6.3_案例演练_做市机器人与全球首发网络的命门识别.md",
        ],
      }),
      slide({
        id: "l6-pitfall",
        kind: "pitfall",
        title: "高管雷区：图表堆砌、伪洞察与没有手刹的报告",
        visualHint: "checklist",
        bodyMd: md`
坏报告的三种常见形态：

- 图很多，但没有优先级
- 洞察很多，但没有动作条件
- 结论很多，但没有 kill switch

> 没有手刹的报告  
> 只是漂亮的灾难说明书
        `,
        speakerNotesMd: md`
这一页的语气要狠。

L6 要训练学生区分“会分析”和“能在高压下让组织动起来”之间的差别。
        `,
        sourceRefs: [
          "01_Lectures/Week06_Sensitivity_and_Decision_Memo/6.4_高管雷区_图表堆砌、伪洞察与没有手刹的报告.md",
        ],
      }),
      slide({
        id: "l6-lab",
        kind: "lab",
        title: "下午实验：把几百万条结果压成一页纸军令",
        visualHint: "checklist",
        bodyMd: md`
实验最低要求：

- 排出因子重要性
- 指出一条真正命门
- 写出阈值与 kill switch
- 压缩成一页纸高管命令
        `,
        speakerNotesMd: md`
L6 的实验必须形成“压缩感”。

不是再给学生更多分析，而是逼他们删掉多余变量，只留下足够支配动作的那几根线。
        `,
        sourceRefs: [
          "01_Lectures/Week06_Sensitivity_and_Decision_Memo/6.5_沙盘接口_下午实验预告：把几百万条结果压成一页纸军令.md",
        ],
      }),
      slide({
        id: "l6-summary",
        kind: "summary",
        title: "收束：复杂性必须被暴力提纯",
        visualHint: "quote",
        bodyMd: md`
> 复杂模型如果不能被压缩成一句命令，就还没有完成它的管理使命。

**下一讲的新麻烦：**

就算你已经盯住了命门，  
一进入多主体生态，大家还是可能一起踩踏。
        `,
        speakerNotesMd: md`
L6 结束时，第二幕基本闭合。

学生已经学会：

- 写机器
- 守边界
- 算摩擦
- 看左尾
- 识别活网
- 揪出命门

接着第三幕会告诉他们：即便你个人足够聪明，只要生态规则不对，大家仍会一起滑向坏均衡。
        `,
        sourceRefs: [
          "01_Lectures/Week06_Sensitivity_and_Decision_Memo/Outline_L6_透视黑盒内部：因子敏感度剥离与“一页纸”高管决策艺术.md",
        ],
      }),
    ],
  },
  l7: {
    id: "l7",
    title: "微观动机与宏观踩踏：基于多主体仿真的红海动态",
    shortTitle: "微观动机与宏观踩踏",
    act: "第三幕",
    blackboardLine: "在多主体世界里，很多灾难不是谁犯错了，而是规则把大家一起推向了坏结果。",
    sourcePaths: [
      "01_Lectures/Week07_Multi_Agent_Emergence/Outline_L7_微观动机与宏观踩踏：基于多主体仿真(ABM)的红海动态.md",
      "01_Lectures/Week07_Multi_Agent_Emergence/7.1_引言_为什么你的稳健策略一遇到别人就失效.md",
      "01_Lectures/Week07_Multi_Agent_Emergence/7.2_核心心法_从微观规则到宏观涌现.md",
      "01_Lectures/Week07_Multi_Agent_Emergence/7.3_案例演练_MEV机器人与众包平台的生态踩踏.md",
      "01_Lectures/Week07_Multi_Agent_Emergence/7.4_高管雷区_把生态灾难误当成个体失误.md",
      "01_Lectures/Week07_Multi_Agent_Emergence/7.5_沙盘接口_下午实验预告：当1000个聪明人同时扑向同一块肉.md",
    ],
    slides: [
      slide({
        id: "l7-cover",
        kind: "cover",
        title: "L7 · 微观动机与宏观踩踏",
        visualHint: "quote",
        bodyMd: md`
### 第三幕 · 从系统到生态

你一个人很稳  
不代表  
大家一起不会死
        `,
        speakerNotesMd: md`
L7 是第三幕的开场，要把课程从“系统管理”抬升到“生态管理”。

前六讲的默认前提是：只有你自己在认真思考。L7 要打掉这个前提。
        `,
        sourceRefs: [
          "01_Lectures/Week07_Multi_Agent_Emergence/7.1_引言_为什么你的稳健策略一遇到别人就失效.md",
        ],
      }),
      slide({
        id: "l7-position",
        kind: "position",
        title: "本讲在整门课中的位置",
        visualHint: "diagram",
        bodyMd: md`
- **上一讲**：从黑盒里揪出命门
- **本讲**：命门有时根本不在你系统内部，而在别人如何围猎你
- **下一讲**：如果规则才是根源，就必须重写规则

> L7 把系统视角升级成生态视角
        `,
        speakerNotesMd: md`
这一页要强调：L7 不是在给 L6 补充案例，而是在升维。

从今天开始，课程不再研究“一台机器”，而是研究“一窝会互相模仿、竞争、掠夺的动物”。
        `,
        sourceRefs: [
          "_Instructor_Admin/Drafts/08_八讲概念总地图_三幕剧与四条主线.md",
        ],
      }),
      slide({
        id: "l7-illusion",
        kind: "illusion",
        title: "要击碎的旧认知",
        visualHint: "checklist",
        bodyMd: md`
只要我的单体策略足够稳，我就能活下来。

多主体世界里，这常常是错的，因为：

- 别人的动作会改写你的收益
- 拥挤会让最优策略失效
- 跟风与抢跑会制造集体灾难
        `,
        speakerNotesMd: md`
L7 的旧认知页要继续承接 L6 的不满足感。

你已经找到命门了，但现实里还有别的主体：

- 更快的机器
- 一样聪明的对手
- 跟风群众
- 掠夺者

于是单机回测里漂亮的策略，一进人群就可能被踩成肉泥。
        `,
        sourceRefs: [
          "01_Lectures/Week07_Multi_Agent_Emergence/7.1_引言_为什么你的稳健策略一遇到别人就失效.md",
        ],
      }),
      slide({
        id: "l7-concept-abm",
        kind: "concept",
        title: "ABM：不是写一个系统，而是写一窝物种",
        visualHint: "diagram",
        bodyMd: md`
生态视角新增四个问题：

- 系统里有哪些主体物种
- 每种主体在追什么
- 它们怎样模仿、竞争、掠夺
- 微观规则会长出什么宏观秩序
        `,
        speakerNotesMd: md`
ABM 这一页不需要讲太多方法论细枝末节，重点是认知转换：

系统视角看变量、红线、阈值；
生态视角还要看物种、激励、互动和涌现。
        `,
        sourceRefs: [
          "01_Lectures/Week07_Multi_Agent_Emergence/7.2_核心心法_从微观规则到宏观涌现.md",
        ],
      }),
      slide({
        id: "l7-concept-emergence",
        kind: "concept",
        title: "涌现、公地悲剧与拥挤，不是谁犯错，而是规则诱导",
        visualHint: "checklist",
        bodyMd: md`
局部理性并不会自动长成整体理性。

常见坏结果：

- 拥挤交易
- 公地悲剧
- 逐利掠夺
- 坏均衡自我强化
        `,
        speakerNotesMd: md`
这页是第三幕的理论底座。

一定要把“个体没犯错”和“整体仍然在滑向灾难”这件事说透，因为它会直接把学生推向 L8 的机制设计视角。
        `,
        sourceRefs: [
          "01_Lectures/Week07_Multi_Agent_Emergence/7.2_核心心法_从微观规则到宏观涌现.md",
        ],
      }),
      slide({
        id: "l7-case-mev",
        kind: "case",
        title: "案例 A：MEV 机器人生态踩踏",
        visualHint: "diagram",
        bodyMd: md`
个体都只是做最理性的动作：

- 发现机会
- 抢先排序
- 榨取价差

宏观结果却是：

- 用户体验恶化
- 交易环境毒化
- 掠夺者最赚钱
        `,
        speakerNotesMd: md`
这里不要把重心放在链上术语，而要强调结构：

当排序权和抢跑收益存在时，生态会自然孵化出一种“只靠插队就活得很好”的物种。
        `,
        sourceRefs: [
          "01_Lectures/Week07_Multi_Agent_Emergence/7.3_案例演练_MEV机器人与众包平台的生态踩踏.md",
        ],
      }),
      slide({
        id: "l7-case-platform",
        kind: "case",
        title: "案例 B：众包平台同样会长出坏生态",
        visualHint: "diagram",
        bodyMd: md`
现实商业镜像：

- 过度抢单
- 刷单与外挂
- 低质量供给挤走长期供给者

**如果掠夺型物种活得最好，  
坏均衡就会越来越稳。**
        `,
        speakerNotesMd: md`
这一页把链上生态拉回平台商业。

课程要到这里明确帮助学生承认：很多生态问题不是“谁道德差”，而是“系统在奖励这种生存方式”。
        `,
        sourceRefs: [
          "01_Lectures/Week07_Multi_Agent_Emergence/7.3_案例演练_MEV机器人与众包平台的生态踩踏.md",
        ],
      }),
      slide({
        id: "l7-pitfall",
        kind: "pitfall",
        title: "高管雷区：把生态灾难误当成个体失误",
        visualHint: "checklist",
        bodyMd: md`
最常见的误诊：

- 以为是员工执行差
- 以为是某个玩家太坏
- 以为多做教育就能解决

真正该问的是：

> 现在的规则，到底在奖励谁？
        `,
        speakerNotesMd: md`
L7 的雷区页要直接把诊断权从“怪个人”挪回“看规则”。

一旦学生承认生态灾难很多是规则诱导出来的，L8 的机制设计就不再显得抽象。
        `,
        sourceRefs: [
          "01_Lectures/Week07_Multi_Agent_Emergence/7.4_高管雷区_把生态灾难误当成个体失误.md",
        ],
      }),
      slide({
        id: "l7-lab",
        kind: "lab",
        title: "下午实验：让 1000 个聪明人同时扑向同一块肉",
        visualHint: "checklist",
        bodyMd: md`
实验里要观察：

- 哪些物种会迅速变多
- 哪种行为最赚钱
- 宏观质量如何恶化
- 生态何时进入坏均衡

实验输出至少包括：

- 生态面板
- 物种分布
- 坏均衡判断
        `,
        speakerNotesMd: md`
L7 的实验目的是让学生第一次“看见生态自己长坏的过程”，而不是只看单次结果。

他们应该观察时间演化：好的供给者是否被坏供给者挤出，掠夺行为是否越来越占主导。
        `,
        sourceRefs: [
          "01_Lectures/Week07_Multi_Agent_Emergence/7.5_沙盘接口_下午实验预告：当1000个聪明人同时扑向同一块肉.md",
        ],
      }),
      slide({
        id: "l7-summary",
        kind: "summary",
        title: "收束：问题也许根本不在玩家",
        visualHint: "quote",
        bodyMd: md`
> 在多主体世界里，很多灾难不是谁犯错了，而是规则把大家一起推向了坏结果。

**下一讲的新动作：**

既然问题根源在规则，  
那就别只做更聪明的玩家，开始改牌桌。
        `,
        speakerNotesMd: md`
L7 的结尾必须非常明确地把学生推向 L8。

到这里他们应该已经承认：继续优化我自己，已经不足以解决坏生态。最高阶动作必须升级成规则设计。
        `,
        sourceRefs: [
          "01_Lectures/Week07_Multi_Agent_Emergence/Outline_L7_微观动机与宏观踩踏：基于多主体仿真(ABM)的红海动态.md",
        ],
      }),
    ],
  },
  l8: {
    id: "l8",
    title: "成为无形之手：逆向机制设计与未来算法治理",
    shortTitle: "成为无形之手",
    act: "第三幕",
    blackboardLine: "最高阶的管理动作，不是继续做更聪明的玩家，而是改写牌桌本身。",
    sourcePaths: [
      "01_Lectures/Week08_Mechanism_Design_and_Governance/Outline_L8_成为无形之手：逆向机制设计与未来算法治理.md",
      "01_Lectures/Week08_Mechanism_Design_and_Governance/8.1_引言_为什么真正的高手最后都会从玩家变成造规则的人.md",
      "01_Lectures/Week08_Mechanism_Design_and_Governance/8.2_核心心法_激励相容与逆向机制设计.md",
      "01_Lectures/Week08_Mechanism_Design_and_Governance/8.3_案例演练_从MEV治理到平台拥堵定价的规则重写.md",
      "01_Lectures/Week08_Mechanism_Design_and_Governance/8.4_高管雷区_道德说教、规则拍脑袋与副作用失明.md",
      "01_Lectures/Week08_Mechanism_Design_and_Governance/8.5_沙盘接口_下午实验预告：把坏生态改写成新规则.md",
    ],
    slides: [
      slide({
        id: "l8-cover",
        kind: "cover",
        title: "L8 · 成为无形之手",
        visualHint: "quote",
        bodyMd: md`
### 第三幕 · 规则设计

真正的高手  
最后都会从玩家  
变成造规则的人
        `,
        speakerNotesMd: md`
L8 是整门课的终章。

从 L1 到 L7，学生已经学会把世界写成机器、守住机器、在复杂里求生、看见坏生态。L8 要完成最后的身份迁移：从玩家走向规则设计者。
        `,
        sourceRefs: [
          "01_Lectures/Week08_Mechanism_Design_and_Governance/8.1_引言_为什么真正的高手最后都会从玩家变成造规则的人.md",
        ],
      }),
      slide({
        id: "l8-position",
        kind: "position",
        title: "本讲在整门课中的位置",
        visualHint: "diagram",
        bodyMd: md`
- **上一讲**：看见坏均衡如何自动生长
- **本讲**：把坏均衡改写成更好的均衡
- **课程收束**：从状态机架构师，变成规则设计者

> L8 是全课的闭环与加冕
        `,
        speakerNotesMd: md`
这页要帮助学生回看全课身份迁移：

- 从流程图讲述者
- 到状态机抽象者
- 到边界守卫者
- 到生存架构师
- 到生态观察者
- 最后到规则设计者
        `,
        sourceRefs: [
          "_Instructor_Admin/Drafts/08_八讲概念总地图_三幕剧与四条主线.md",
        ],
      }),
      slide({
        id: "l8-illusion",
        kind: "illusion",
        title: "要击碎的旧认知",
        visualHint: "checklist",
        bodyMd: md`
面对坏生态，继续优化我自己就够了。

很多时候这已经不够，因为：

- 问题根源在规则
- 规则在持续奖励坏行为
- 不改牌桌，只会反复出现更聪明的掠夺者
        `,
        speakerNotesMd: md`
L8 的旧认知页必须非常明确：前七讲的很多求生动作，到这里都已经逼出了更高阶结论——如果规则不改，再聪明的玩家也可能只是更聪明地活在坏生态里。
        `,
        sourceRefs: [
          "01_Lectures/Week08_Mechanism_Design_and_Governance/8.1_引言_为什么真正的高手最后都会从玩家变成造规则的人.md",
        ],
      }),
      slide({
        id: "l8-concept-mechanism",
        kind: "concept",
        title: "机制设计：不是分析既有规则，而是反过来设计规则",
        visualHint: "diagram",
        bodyMd: md`
传统分析问：

- 有了规则 A，会产生什么结果 B？

机制设计反过来问：

- 我想要结果 B，应该改什么规则 A？
        `,
        speakerNotesMd: md`
这是 L8 的第一性定义。

把它讲成“逆向博弈论”就够了：不是顺着规则去解释世界，而是倒着从目标均衡去重写规则。
        `,
        sourceRefs: [
          "01_Lectures/Week08_Mechanism_Design_and_Governance/8.2_核心心法_激励相容与逆向机制设计.md",
        ],
      }),
      slide({
        id: "l8-concept-incentive",
        kind: "concept",
        title: "激励相容：不是说服人变好，而是让自利行为更不容易把系统搞坏",
        visualHint: "checklist",
        bodyMd: md`
常见改规则手段：

- 动态收费
- 批量拍卖 / 时间离散化
- 奖励长期供给者
- 质押与罚没

关键标准只有一个：

> 改完之后，掠夺者还会不会活得最好？
        `,
        speakerNotesMd: md`
这一页不要讲成工具列表。

一定要把机制设计的真实气质讲出来：它不是靠道德说服，而是靠公式、排序、结算时间、奖励结构，把自利行为重新导向。
        `,
        sourceRefs: [
          "01_Lectures/Week08_Mechanism_Design_and_Governance/8.2_核心心法_激励相容与逆向机制设计.md",
        ],
      }),
      slide({
        id: "l8-case-mev",
        kind: "case",
        title: "案例 A：从 MEV 抢跑治理看规则重写",
        visualHint: "diagram",
        bodyMd: md`
如果排序权奖励抢跑，
生态就会长出抢跑者。

所以机制设计会考虑：

- 批量拍卖
- 延迟撮合
- 重新分配排序收益
        `,
        speakerNotesMd: md`
这页把 L7 的坏生态直接翻译成 L8 的规则动作：

不是再劝抢跑机器人善良一点，而是改排序规则，让抢跑这件事没那么值得。
        `,
        sourceRefs: [
          "01_Lectures/Week08_Mechanism_Design_and_Governance/8.3_案例演练_从MEV治理到平台拥堵定价的规则重写.md",
        ],
      }),
      slide({
        id: "l8-case-platform",
        kind: "case",
        title: "案例 B：平台拥堵定价与黄牛治理",
        visualHint: "diagram",
        bodyMd: md`
如果拥堵成本由普通用户承担，
黄牛就会持续最赚钱。

所以机制设计会问：

- 谁该为拥堵付费
- 费用函数怎么改
- 长期供给者怎样被奖励
        `,
        speakerNotesMd: md`
这一页帮助学生把机制设计带回现实平台治理。

不是喊“打击黄牛”，而是重新定义进入成本、分配逻辑和排队规则。
        `,
        sourceRefs: [
          "01_Lectures/Week08_Mechanism_Design_and_Governance/8.3_案例演练_从MEV治理到平台拥堵定价的规则重写.md",
        ],
      }),
      slide({
        id: "l8-pitfall",
        kind: "pitfall",
        title: "高管雷区：道德说教、拍脑袋改规则、只看好处不看副作用",
        visualHint: "checklist",
        bodyMd: md`
坏机制设计通常长这样：

- 用道德语言替代机制语言
- 只提一个“看起来合理”的改法
- 不做回灌验证
- 只盯好处，不看重新分配的代价
        `,
        speakerNotesMd: md`
L8 的雷区页要把“漂亮空话”这件事狠狠干掉。

真正成熟的机制设计，必须承认每一项规则都会重新分配利益，并且需要通过回灌仿真验证副作用。
        `,
        sourceRefs: [
          "01_Lectures/Week08_Mechanism_Design_and_Governance/8.4_高管雷区_道德说教、规则拍脑袋与副作用失明.md",
        ],
      }),
      slide({
        id: "l8-lab",
        kind: "lab",
        title: "下午实验：把坏生态改写成新规则",
        visualHint: "checklist",
        bodyMd: md`
最终 Proposal 至少要包含：

- 你要修哪种坏均衡
- 你改哪条规则
- 你预期它怎样改写激励
- 你如何证明它真的更好
        `,
        speakerNotesMd: md`
L8 的实验是全课最终交付。

学生已经不再只是提交模型和策略，而是在提交一套规则改造提案，并且必须用回灌仿真证明它不只是“想得很美”。
        `,
        sourceRefs: [
          "01_Lectures/Week08_Mechanism_Design_and_Governance/8.5_沙盘接口_下午实验预告：把坏生态改写成新规则.md",
        ],
      }),
      slide({
        id: "l8-summary",
        kind: "summary",
        title: "课程终章：从玩家走到牌桌另一端",
        visualHint: "quote",
        bodyMd: md`
> 最高阶的管理动作，不是继续做更聪明的玩家，而是改写牌桌本身。

**这门课真正训练出的身份迁移：**

流程图讲述者 → 状态机架构师 → 生存管理者 → 生态观察者 → 规则设计者
        `,
        speakerNotesMd: md`
最后一页要把整门课闭环。

别把收束讲成“我们学完了八讲知识点”，而要讲成一次身份加冕：

学生已经从讲业务故事的人，走到能设计系统命运的人。
        `,
        sourceRefs: [
          "_Instructor_Admin/Drafts/08_八讲概念总地图_三幕剧与四条主线.md",
          "01_Lectures/Week08_Mechanism_Design_and_Governance/8.1_引言_为什么真正的高手最后都会从玩家变成造规则的人.md",
          "01_Lectures/Week08_Mechanism_Design_and_Governance/8.5_沙盘接口_下午实验预告：把坏生态改写成新规则.md",
        ],
      }),
    ],
  },
};

type LectureScaffolding = {
  bridgeBodyMd: string;
  bridgeSpeakerNotesMd: string;
  bridgeTitle: string;
  contractBodyMd: string;
  contractSpeakerNotesMd: string;
  contractTitle: string;
};

const lectureScaffolding: Record<LectureId, LectureScaffolding> = {
  l1: {
    contractTitle: "本讲交付契约：把业务写成机器语言",
    contractBodyMd: md`
学完 L1，仓库里至少应当新增：

- 状态变量字典
- 事件字典
- 资源与瓶颈清单
- 模型边界声明与一版 spec.yaml 骨架

**L1 交付的不是功能，而是机器可读的世界骨架。**
    `,
    contractSpeakerNotesMd: md`
这一页要告诉学生：L1 不是“热身课”，而是建模语言的奠基课。

如果他们今天下课以后拿不出状态、事件、资源和边界，他们后面所有测试、仿真和治理都会失去抓手。
    `,
    bridgeTitle: "向 L2 的桥：机器写出来后，如何证明它不撒谎？",
    bridgeBodyMd: md`
你已经学会了第一步：

- 把业务从故事切成状态机
- 把边界、资源和事件写成机器语言

但新的危险马上出现：

- **能跑** 不等于 **可信**
- **回测顺** 不等于 **极端条件下不撒谎**

下一讲进入 L2：**用 V&V、不变量和极压测试证明它值得被部署。**
    `,
    bridgeSpeakerNotesMd: md`
L1 的收束感应该落在一种“不满足”上：世界已经被切成机器，但机器还是可能一本正经地错。

所以桥接到 L2 时，不要把它讲成“接下来学测试”，而要讲成“接下来学如何建立信任资格”。
    `,
  },
  l2: {
    contractTitle: "本讲交付契约：让系统开始具备不撒谎的资格",
    contractBodyMd: md`
学完 L2，仓库里至少应当新增：

- 一组不变量断言
- 至少一类极压测试剧本
- fail-hard 红线说明
- 对 spec.yaml 的红线与假设补充

**L2 交付的不是更多功能，而是可信度。**
    `,
    contractSpeakerNotesMd: md`
这一页要让学生真正感到气质变化：从今天起，他们不是在写会跑的模型，而是在写经得起摧毁的模型。

一旦交付契约发生变化，团队评价标准也会变。
    `,
    bridgeTitle: "向 L3 的桥：正确系统，为什么还是会死于现实？",
    bridgeBodyMd: md`
L2 已经把底线守住了：

- 不变量被写死
- 极端输入被测试
- kill switch 有了雏形

但现实会继续追问：

- 就算逻辑正确，动作有没有成本？
- 就算边界稳固，频繁调整会不会把自己磨死？

下一讲进入 L3：**从正确性转向可生存性。**
    `,
    bridgeSpeakerNotesMd: md`
把学生从“终于安全了”的错觉里拉出来。

L2 解决的是机器不能撒谎，L3 解决的是机器不能为了追逐最优把自己折腾死。
    `,
  },
  l3: {
    contractTitle: "本讲交付契约：把策略当成有成本的动作",
    contractBodyMd: md`
学完 L3，仓库里至少应当新增：

- 一个 baseline 与一个主动策略候选
- 对 Gas、滑点、延迟与切换成本的显式计账
- 至少一个惰性带或触发阈值设计
- 毛收益 / 摩擦税 / 净收益拆解图表

**L3 交付的不是更聪明的动作，而是更克制的动作。**
    `,
    contractSpeakerNotesMd: md`
这页要帮助学生接受一个很反直觉的事实：高频动作未必更高级，很多时候恰恰更幼稚。

真正成熟的策略，必须愿意为“不动”设计合法性。
    `,
    bridgeTitle: "向 L4 的桥：就算计入摩擦，为什么还不能相信单点未来？",
    bridgeBodyMd: md`
你已经学会了：

- 纸面最优不等于现实最优
- 动作本身会征收摩擦税
- 惰性带是一种生存设计

但下一层幻觉还在：

- 如果未来根本不是一个点，单条预测曲线还有什么意义？

下一讲进入 L4：**从单点预测转向概率分布、参数扫描与左尾管理。**
    `,
    bridgeSpeakerNotesMd: md`
L3 要把学生推到 L4 的入口：不是“多算一点参数”，而是承认未来的本体就是分布。

这样 L4 的概率转向才会显得必然，而不是另起炉灶。
    `,
  },
  l4: {
    contractTitle: "本讲交付契约：用算力把坏宇宙刷出来",
    contractBodyMd: md`
学完 L4，仓库里至少应当新增：

- 分布化输入，而不是单点输入
- 一组蒙特卡洛或参数扫描实验
- 至少一张分布图、热力图或左尾风险图
- 一段关于最坏 5% 或 1% 情景的生存结论

**L4 交付的不是预测明天，而是看见坏宇宙。**
    `,
    contractSpeakerNotesMd: md`
这一页要把“概率认怂”讲成高阶能力，而不是退缩。

学生需要意识到：当他们能用一万次坏宇宙证明系统不死时，讲义才真正开始长出牙齿。
    `,
    bridgeTitle: "向 L5 的桥：看见左尾之后，为什么系统仍会死于外部活网？",
    bridgeBodyMd: md`
你已经承认：

- 未来不是一个点，而是一团分布
- 高管必须盯住左尾，而不是只看均值
- 算力的意义是刷出崩溃曲面

但我们还偷偷保留了一个前提：

- 被你仿真的对象，仍像一台边界清晰的单体机器

下一讲进入 L5：**系统不是孤岛，它嵌在别的系统之中。**
    `,
    bridgeSpeakerNotesMd: md`
桥接 L5 时要把“活网”这件事讲出来。

否则学生会误以为只要单机模型足够精细，系统就足够安全。L5 的任务正是粉碎这种孤岛安全感。
    `,
  },
  l5: {
    contractTitle: "本讲交付契约：把外部依赖写进死亡分析",
    contractBodyMd: md`
学完 L5，仓库里至少应当新增：

- 一张外部依赖清单或耦合拓扑图
- 健康因子、授信缓冲与清算阈值监控项
- 至少一个预言机插针或流动性干涸剧本
- 一条写进 Decision_Memo.md 的死因判断

**L5 交付的不是更美的收益曲线，而是真正的死因定位。**
    `,
    contractSpeakerNotesMd: md`
这页要强调一句话：很多系统不是方向判断错了，而是被外部输氧管掐断了。

学生如果还只交单体收益图，说明他们还没把课程推进到网络层。
    `,
    bridgeTitle: "向 L6 的桥：活网太复杂时，我到底该盯住哪一个命门？",
    bridgeBodyMd: md`
L5 已经让你看见：

- 局部最优不等于网络安全
- 对冲不等于路径安全
- 外部挂载点断裂会直接改写死法

但管理者仍然会被一个问题追上：

- 当几十个参数与节点一起晃动时，哪一个才是真正该盯死的命门？

下一讲进入 L6：**用敏感性分析把高维黑盒压缩成一句命令。**
    `,
    bridgeSpeakerNotesMd: md`
L5 到 L6 的桥不能只讲“更多分析”，而要讲“暴力删掉无关复杂性”。

这样学生才会理解 L6 的决策 memo 为什么是第二幕的收束动作。
    `,
  },
  l6: {
    contractTitle: "本讲交付契约：形成可签字的一页纸结论",
    contractBodyMd: md`
学完 L6，仓库里至少应当新增：

- 一张命门变量的核心敏感性图
- 一份正式的一页纸 Decision_Memo.md
- 写进 spec.yaml 的阈值与 kill switch 声明
- 可复现该结论的实验脚本与结果路径

**L6 交付的不是更多图，而是可以被签字执行的结论。**
    `,
    contractSpeakerNotesMd: md`
这一页要让学生知道：管理语言的最高美德不是复杂，而是可执行。

如果最后不能压缩成一句命令，那前面五讲累积起来的复杂性就还没有被真正驯服。
    `,
    bridgeTitle: "向 L7 的桥：命门盯住了，为什么进入多人生态还是会踩踏？",
    bridgeBodyMd: md`
你已经完成了第二幕的收束动作：

- 从高维黑盒里揪出命门
- 设计阈值与手刹
- 把复杂模型压缩成一句能执行的命令

但新的现实会把你拖进更脏的地方：

- 市场里不只有你一个聪明玩家
- 别人的自利行为会一起改写你的结果

下一讲进入 L7：**从单体系统管理升级到多主体生态观察。**
    `,
    bridgeSpeakerNotesMd: md`
这一页的任务是把第三幕的门推开。

L6 已经是优秀指挥官，但还不是规则设计者。L7 会逼学生承认：很多坏结果不是单机层能解决的。
    `,
  },
  l7: {
    contractTitle: "本讲交付契约：把坏均衡看见、命名并量化",
    contractBodyMd: md`
学完 L7，仓库里至少应当新增：

- 主体类型说明与行为规则
- 一组生态级指标面板
- 一条关于坏均衡如何形成的观察结论
- 写进 Decision_Memo.md 的生态层判断

**L7 交付的不是单体优化，而是坏生态诊断。**
    `,
    contractSpeakerNotesMd: md`
这页要帮助学生迈出身份升级的一大步：从“我怎么赢”转成“这个生态为什么会一起输”。

只要能把坏均衡说清楚，L8 的机制设计就有了靶子。
    `,
    bridgeTitle: "向 L8 的桥：如果坏结果来自规则，我该如何改牌桌？",
    bridgeBodyMd: md`
L7 已经逼你承认：

- 很多灾难不是谁犯傻了
- 而是规则把理性逐利一起推向坏结果

所以最后一个问题已经无法回避：

- 如果问题根源在规则本身，高阶管理者究竟该改什么？

下一讲进入 L8：**从理解坏生态走向设计好机制。**
    `,
    bridgeSpeakerNotesMd: md`
这是第三幕最关键的桥接句之一。

学生需要在这一页上真切感到：继续优化玩家已经没用了，下一讲必须改牌桌。
    `,
  },
  l8: {
    contractTitle: "本讲交付契约：把机制设计写成最终 Proposal",
    contractBodyMd: md`
学完 L8，最终仓库里至少应当形成：

- 一份清晰的问题机制诊断
- 一套规则改写方案
- 对激励变化与副作用的回灌验证
- 最终 Proposal 与可复现实验材料

**L8 交付的不是观点，而是一套可辩护、可验证的规则提案。**
    `,
    contractSpeakerNotesMd: md`
这一页要把课程最终交付讲得非常清楚：学生不是来收集观点，而是来提交一份能被世界检验的机制设计方案。
    `,
    bridgeTitle: "课程闭环：从八讲讲义回到最终机制提案",
    bridgeBodyMd: md`
走到这里，课程已经闭环：

- 你先学会把世界写成机器
- 再学会让机器在不确定与活网里活下来
- 最后学会看见坏生态并重写规则

真正的毕业动作只有一个：

- **把你的最终 Proposal 回灌到仿真中，证明它不是空话。**
    `,
    bridgeSpeakerNotesMd: md`
L8 不再桥接到下一讲，而是桥接回学生自己的最终作品。

这页应该像毕业誓词一样使用：课程结束，但作品才真正开始。
    `,
  },
};

function buildContractSlide(manifest: LectureManifest) {
  const scaffold = lectureScaffolding[manifest.id];

  return slide({
    id: `${manifest.id}-contract`,
    kind: "contract",
    title: scaffold.contractTitle,
    visualHint: "checklist",
    bodyMd: scaffold.contractBodyMd,
    speakerNotesMd: scaffold.contractSpeakerNotesMd,
    sourceRefs: [manifest.sourcePaths[0]],
  });
}

function buildBridgeSlide(manifest: LectureManifest) {
  const scaffold = lectureScaffolding[manifest.id];

  return slide({
    id: `${manifest.id}-bridge`,
    kind: "bridge",
    title: scaffold.bridgeTitle,
    visualHint: "quote",
    bodyMd: scaffold.bridgeBodyMd,
    speakerNotesMd: scaffold.bridgeSpeakerNotesMd,
    sourceRefs: [
      manifest.sourcePaths[0],
      "_Instructor_Admin/Drafts/08_八讲概念总地图_三幕剧与四条主线.md",
      "_Instructor_Admin/Drafts/09_全八讲横向统稿手册_术语母题桥接与黑板句.md",
    ],
  });
}

function injectScaffoldSlides(manifest: LectureManifest): LectureManifest {
  const slides = [...manifest.slides];
  const illusionIndex = slides.findIndex((slideItem) => slideItem.kind === "illusion");
  const contractInsertIndex = illusionIndex >= 0 ? illusionIndex + 1 : 2;
  slides.splice(contractInsertIndex, 0, buildContractSlide(manifest));

  const summaryIndex = slides.findIndex((slideItem) => slideItem.kind === "summary");
  const bridgeInsertIndex = summaryIndex >= 0 ? summaryIndex : slides.length;
  slides.splice(bridgeInsertIndex, 0, buildBridgeSlide(manifest));

  return {
    ...manifest,
    slides,
  };
}

export const lectureManifests = lectureOrder.reduce<Record<LectureId, LectureManifest>>(
  (accumulator, lectureId) => {
    accumulator[lectureId] = injectScaffoldSlides(lectureManifestsMap[lectureId]);
    return accumulator;
  },
  {} as Record<LectureId, LectureManifest>,
);
