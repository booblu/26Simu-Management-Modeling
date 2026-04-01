import type {
  CourseAct,
  LectureHomeMeta,
  LectureId,
  LecturePage,
  LectureSection,
  LectureSectionKind,
} from "./types";

type LectureDefinition = Omit<
  LecturePage,
  "anchorQuestion" | "bridgeLine" | "positioning" | "sections"
>;

const rawLectureDocs = import.meta.glob("../../../01_Lectures/**/*.md", {
  eager: true,
  import: "default",
  query: "?raw",
}) as Record<string, string>;

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

const lectureDefinitions: Record<LectureId, LectureDefinition> = {
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
  },
  l5: {
    id: "l5",
    title: "孤岛的覆灭：系统高维耦合与反身性连环崩盘",
    shortTitle: "孤岛的覆灭",
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
  },
  l6: {
    id: "l6",
    title: "透视黑盒内部：因子敏感度剥离与“一页纸”高管决策艺术",
    shortTitle: "透视黑盒内部",
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
  },
  l7: {
    id: "l7",
    title: "微观动机与宏观踩踏：基于多主体仿真(ABM)的红海动态",
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
  },
};

function getDocContent(repoPath: string) {
  const matched = rawLectureDocs[`../../../${repoPath}`];

  if (!matched) {
    throw new Error(`Missing course source markdown: ${repoPath}`);
  }

  return matched;
}

function extractTitle(markdown: string) {
  const match = markdown.match(/^#\s+(.+)$/m);
  return match?.[1]?.trim() ?? "未命名章节";
}

function stripLead(markdown: string) {
  return markdown
    .replace(/^#\s+.+$/m, "")
    .replace(/^\*\(.+\)\*\s*$/m, "")
    .replace(/^\s*---\s*$/m, "")
    .trim();
}

function extractSummary(markdown: string) {
  const body = stripLead(markdown);
  const paragraphs = body
    .split(/\n\s*\n/)
    .map((item) => item.replace(/\n/g, " ").trim())
    .filter(Boolean);

  return paragraphs[0] ?? "";
}

function inferSectionKind(sourcePath: string): LectureSectionKind {
  if (sourcePath.includes("Outline_")) {
    return "outline";
  }

  if (sourcePath.includes("_引言_")) {
    return "introduction";
  }

  if (sourcePath.includes("_核心心法_")) {
    return "framework";
  }

  if (sourcePath.includes("_案例演练_")) {
    return "case";
  }

  if (sourcePath.includes("_高管雷区_")) {
    return "pitfall";
  }

  if (sourcePath.includes("_沙盘接口_")) {
    return "lab";
  }

  return "document";
}

function inferSectionLabel(kind: LectureSectionKind) {
  switch (kind) {
    case "outline":
      return "课程总纲";
    case "introduction":
      return "引言";
    case "framework":
      return "核心心法";
    case "case":
      return "案例演练";
    case "pitfall":
      return "高管雷区";
    case "lab":
      return "实验接口";
    default:
      return "正文";
  }
}

function toSectionId(lectureId: LectureId, sourcePath: string) {
  const basename = sourcePath.split("/").pop() ?? sourcePath;
  return `${lectureId}-${basename}`
    .replace(/\.md$/u, "")
    .replace(/[^a-zA-Z0-9\u4e00-\u9fa5]+/gu, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
    .toLowerCase();
}

function buildSections(lectureId: LectureId, sourcePaths: string[]): LectureSection[] {
  return sourcePaths.map((sourcePath) => {
    const markdown = getDocContent(sourcePath);
    const kind = inferSectionKind(sourcePath);

    return {
      id: toSectionId(lectureId, sourcePath),
      kind,
      label: inferSectionLabel(kind),
      title: extractTitle(markdown),
      summary: extractSummary(markdown),
      contentMd: stripLead(markdown),
      sourcePath,
    };
  });
}

export const lecturePages = lectureOrder.reduce<Record<LectureId, LecturePage>>(
  (accumulator, lectureId) => {
    const definition = lectureDefinitions[lectureId];
    const meta = lectureHomeMeta[lectureId];

    accumulator[lectureId] = {
      ...definition,
      ...meta,
      sections: buildSections(lectureId, definition.sourcePaths),
    };

    return accumulator;
  },
  {} as Record<LectureId, LecturePage>,
);
