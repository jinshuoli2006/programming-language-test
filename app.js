const LANGUAGES = {
  Python: {
    short: "Py",
    title: "Python",
    subtitle: "问题求解型脚本诗人",
    tags: ["快速原型", "数据/AI", "胶水语言", "人生苦短"],
    desc: "你最在意的是把问题本身解决掉，而不是把仪式感拉满。你喜欢短反馈、强生态和高表达效率：能十行跑起来，就不想先搭三天架子。你的危险倾向是：先写爽了，半年后再和自己的动态类型遗产决斗。",
    roast: "你不是不会写工程，你只是相信世界本来不该有这么多工程。"
  },
  JavaScript: {
    short: "JS",
    title: "JavaScript",
    subtitle: "浏览器宇宙的适应型玩家",
    tags: ["前端交互", "快速反馈", "生态混沌", "全栈游牧"],
    desc: "你适应力强，喜欢能马上看见结果的创造过程。你能在混乱生态、框架迭代和奇怪边界条件中保持行动力。你的代码气质是：先让世界动起来，再慢慢解释它为什么能动。",
    roast: "你的 npm 依赖树可能比你的家族谱还复杂。"
  },
  TypeScript: {
    short: "TS",
    title: "TypeScript",
    subtitle: "现代工程秩序维护者",
    tags: ["类型安全", "大型前端", "可维护", "渐进约束"],
    desc: "你既想要 JavaScript 的灵活，又希望编译器在背后兜底。你对工程规模、接口边界和长期维护有天然敏感度。你并不讨厌自由，你只是知道没有边界的自由最后会变成事故现场。",
    roast: "你写类型体操的时候，看起来像在给编译器做心理治疗。"
  },
  Rust: {
    short: "Rs",
    title: "Rust",
    subtitle: "安全与性能的苦修骑士",
    tags: ["内存安全", "高性能", "系统编程", "零成本抽象"],
    desc: "你愿意承受前期学习曲线，换取后期的可靠性、安全感和性能。你不满足于‘差不多能跑’，更喜欢‘从结构上就不该错’。你有工程洁癖，但这份洁癖往往很值钱。",
    roast: "你被 borrow checker 骂过的次数，可能比被老师点名还多。"
  },
  Go: {
    short: "Go",
    title: "Go",
    subtitle: "云原生现实主义工程师",
    tags: ["后端服务", "并发", "部署友好", "简单直接"],
    desc: "你偏爱清晰、稳定、可部署、可维护的工程系统。你对语言花活兴趣有限，更关心服务能不能上线、排障能不能直观、团队能不能快速读懂。你是反复杂度阵营里的实干派。",
    roast: "你嘴上说不要抽象，手上已经复制了第三遍 if err != nil。"
  },
  Java: {
    short: "Jv",
    title: "Java",
    subtitle: "大型工程帝国的架构公民",
    tags: ["企业级", "后端", "规范", "生态成熟"],
    desc: "你相信规范、生态、团队协作和长期维护。你适合处理复杂业务系统、后端架构和多人协作项目。你未必追求语言本身的锋利感，但你知道真正的大工程靠的是秩序。",
    roast: "你的人生也许没有那么多 Factory，但你的代码一定有。"
  },
  C: {
    short: "C",
    title: "C",
    subtitle: "贴近机器的底层原教旨主义者",
    tags: ["底层控制", "操作系统", "嵌入式", "极简力量"],
    desc: "你喜欢知道每一块内存、每一次调用、每一点开销究竟发生了什么。你相信抽象可以有，但不能忘记机器本身。你写代码时像是在和硬件握手，而不是向框架许愿。",
    roast: "你不是不用高级语言，你只是觉得它们离真相太远。"
  },
  "C++": {
    short: "C++",
    title: "C++",
    subtitle: "复杂度与性能的双持战士",
    tags: ["极致性能", "游戏/引擎", "高性能计算", "模板深渊"],
    desc: "你愿意驾驭复杂度，换取性能、表达力和工程控制权。你适合系统、图形、游戏引擎、数据库或高性能计算。你的优势是上限极高，代价是你需要和语言本身保持长期谈判。",
    roast: "你不是在写代码，你是在和未定义行为签订停战协议。"
  },
  Haskell: {
    short: "Hs",
    title: "Haskell",
    subtitle: "抽象洁癖的函数式哲学家",
    tags: ["函数式", "类型系统", "纯粹性", "数学气质"],
    desc: "你重视结构、抽象、纯粹性和可推理性。你写代码时不只关心能不能运行，也关心它为什么应该运行。你可能天然喜欢数学、逻辑和优雅的形式系统。",
    roast: "你解决问题前，通常会先重新定义什么叫问题。"
  },
  Lisp: {
    short: "λ",
    title: "Lisp",
    subtitle: "元编程世界的古典魔法师",
    tags: ["元编程", "宏", "表达力", "思想自由"],
    desc: "你不满足于使用语言，你想改造语言。你重视表达力、可塑性和思想上的自由度。你对‘代码即数据’这类观念有天然亲近感，适合探索解释器、DSL 和抽象工具。",
    roast: "你的括号不是太多，是世界的结构还不够清楚。"
  },
  Ruby: {
    short: "Rb",
    title: "Ruby",
    subtitle: "开发幸福感的浪漫主义者",
    tags: ["优雅语法", "Web", "DSL", "手感"],
    desc: "你关心代码的手感、节奏和愉悦度。你相信程序不只是机器指令，也是一种人类表达。你喜欢顺滑的抽象和优雅的 API，厌恶把简单事情写成样板工程。",
    roast: "你不是懒，你只是觉得代码应该主动讨好人类。"
  },
  Julia: {
    short: "Jl",
    title: "Julia",
    subtitle: "科学计算的新派实验家",
    tags: ["数值计算", "科研", "高性能", "数学表达"],
    desc: "你希望语言既像数学，又能真正跑得快。你适合科学计算、建模、仿真、优化和高性能原型开发。你有研究者气质，也愿意接受新生态的探索成本。",
    roast: "你对速度和公式都很挑剔，像在给计算机上数学分析课。"
  },
  R: {
    short: "R",
    title: "R",
    subtitle: "统计世界的数据解释者",
    tags: ["统计", "可视化", "数据分析", "研究报告"],
    desc: "你擅长从数据中提取结构、趋势和解释。你关心统计意义、图表表达和分析流程。你未必想造一个巨型系统，但你很擅长把一堆混乱数据变成可讨论的结论。",
    roast: "你不是在画图，你是在让数据承认它自己说过什么。"
  },
  SQL: {
    short: "SQL",
    title: "SQL",
    subtitle: "关系世界的查询审判官",
    tags: ["数据库", "关系模型", "分析查询", "业务洞察"],
    desc: "你思考问题时喜欢先看结构、关系和约束。你不是一步步命令机器，而是描述你想要的结果。你适合数据库、业务分析、数据仓库和所有需要从复杂关系中直接抽答案的场景。",
    roast: "你的世界观很清楚：万物皆表，众生可 join。"
  },
  Bash: {
    short: "sh",
    title: "Bash",
    subtitle: "命令行自动化现实主义者",
    tags: ["自动化", "运维", "脚本", "效率工具"],
    desc: "你是实用主义者，喜欢把重复劳动一刀切掉。别人还在打开软件，你已经一行命令处理完了。你未必追求语言优雅，但你对效率和工具链有敏锐直觉。",
    roast: "你的脚本可能没人敢维护，但所有人都离不开它。"
  },
  Kotlin: {
    short: "Kt",
    title: "Kotlin",
    subtitle: "现代 JVM 的精致改良派",
    tags: ["Android", "后端", "现代语法", "安全简洁"],
    desc: "你希望语言现代、简洁、安全，但又不脱离成熟工业生态。你适合 Android、JVM 后端和讲究开发体验的工程项目。你不是要推翻旧世界，而是想把旧世界改得像样一点。",
    roast: "你看 Java 的眼神，像在看一个很有贡献但确实该退休的前辈。"
  },
  Swift: {
    short: "Sw",
    title: "Swift",
    subtitle: "产品体验导向的应用工匠",
    tags: ["iOS", "产品体验", "现代语法", "平台生态"],
    desc: "你重视用户体验、平台一致性和代码的现代感。你适合做精致、顺滑、面向用户的应用。你对细节敏感，不太能忍受粗糙的界面和随便的交互。",
    roast: "你不是只会写 app，你是在给像素安排礼仪。"
  }
};

const QUESTIONS = [
  {
    title: "你写代码时最享受哪种瞬间？",
    subtitle: "第一反应很重要，不要过度理性化。",
    options: [
      { title: "十几行脚本把麻烦事自动化掉", desc: "先跑起来，再谈工程美学。", scores: { Python: 4, Bash: 3, Ruby: 2 } },
      { title: "编译器提前拦住潜在错误", desc: "运行时事故能少一个是一个。", scores: { Rust: 4, TypeScript: 3, Haskell: 3, Kotlin: 2 } },
      { title: "性能、内存、指针都在掌控中", desc: "抽象可以有，但不能失控。", scores: { C: 4, "C++": 4, Rust: 2 } },
      { title: "系统稳定上线，团队长期维护", desc: "工程不是独舞，是组织协作。", scores: { Java: 4, Go: 3, TypeScript: 2 } }
    ]
  },
  {
    title: "你最不能忍受哪种代码？",
    subtitle: "讨厌什么，往往比喜欢什么更暴露语言人格。",
    options: [
      { title: "慢，而且不知道为什么慢", desc: "性能黑箱会让你很焦虑。", scores: { C: 3, "C++": 4, Rust: 3, Go: 1 } },
      { title: "能跑，但重构像拆炸弹", desc: "类型和边界都太暧昧。", scores: { TypeScript: 4, Rust: 3, Haskell: 3, Java: 2 } },
      { title: "为了写 hello world 先建十个类", desc: "样板代码会谋杀表达欲。", scores: { Python: 3, Ruby: 3, JavaScript: 2, Lisp: 1 } },
      { title: "依赖、构建、部署全在折磨人", desc: "你想要的是可预测的工程流程。", scores: { Go: 4, Java: 2, Bash: 1, Kotlin: 1 } }
    ]
  },
  {
    title: "你更认同哪句编程箴言？",
    subtitle: "每一种语言背后都有一套世界观。",
    options: [
      { title: "人生苦短，先把问题解决", desc: "表达效率就是生产力。", scores: { Python: 4, Ruby: 2, Julia: 1 } },
      { title: "能在编译期解决，就不要留到运行时", desc: "越早失败，越少事故。", scores: { Rust: 4, Haskell: 3, TypeScript: 3 } },
      { title: "少一点魔法，多一点直接", desc: "简单不是缺点，是工程资产。", scores: { Go: 4, C: 3, Java: 1 } },
      { title: "语言应该改变我思考问题的方式", desc: "工具也可以重塑思想。", scores: { Lisp: 4, Haskell: 3, Julia: 2 } }
    ]
  },
  {
    title: "你理想中的项目更像什么？",
    subtitle: "选择你最愿意长期投入的那类。",
    options: [
      { title: "数据分析、机器学习、科研计算", desc: "用代码探索模型、数据和公式。", scores: { Python: 4, R: 3, Julia: 3, SQL: 1 } },
      { title: "前端交互、Web 应用、可见产品", desc: "写完马上能被用户看见。", scores: { JavaScript: 4, TypeScript: 4, Swift: 1 } },
      { title: "系统、编译器、数据库、游戏引擎", desc: "深水区才够刺激。", scores: { "C++": 4, Rust: 4, C: 3, Lisp: 1 } },
      { title: "后端服务、云原生、基础设施", desc: "稳定、并发、部署和观测。", scores: { Go: 4, Java: 3, Kotlin: 2, Bash: 1 } }
    ]
  },
  {
    title: "你怎么看语法糖？",
    subtitle: "这题区分‘表达力党’和‘显式党’。",
    options: [
      { title: "多多益善，写得舒服很重要", desc: "代码要顺手，也要好看。", scores: { Ruby: 4, Kotlin: 3, Python: 2, Swift: 2 } },
      { title: "适度就好，不能影响可读性", desc: "优雅不能以猜谜为代价。", scores: { TypeScript: 3, Java: 2, Go: 2 } },
      { title: "宁愿显式一点，不要藏太多魔法", desc: "所有成本都应该看得见。", scores: { C: 4, Go: 3, Rust: 2 } },
      { title: "语法只是表象，抽象能力才是灵魂", desc: "真正的问题是语言能不能表达思想。", scores: { Lisp: 4, Haskell: 4, Julia: 2 } }
    ]
  },
  {
    title: "你遇到 Bug 时的第一反应？",
    subtitle: "调试姿势也能暴露语言气质。",
    options: [
      { title: "加 print / log，先定位现场", desc: "证据链比玄学可靠。", scores: { Python: 3, JavaScript: 3, Bash: 2, Ruby: 1 } },
      { title: "补类型、补测试、收紧边界", desc: "让错误以后更难发生。", scores: { TypeScript: 4, Rust: 3, Haskell: 2, Java: 2 } },
      { title: "上调试器，看内存和调用栈", desc: "我要知道机器到底做了什么。", scores: { C: 4, "C++": 4, Rust: 2 } },
      { title: "查指标、看链路、复盘部署", desc: "Bug 不只是代码问题，也可能是系统问题。", scores: { Go: 3, Java: 3, SQL: 2, Bash: 2 } }
    ]
  },
  {
    title: "你对类型系统的态度？",
    subtitle: "这是编程语言人格测试的核心问题之一。",
    options: [
      { title: "强类型是安全带，越严越安心", desc: "我愿意先写清楚约束。", scores: { Rust: 4, Haskell: 4, TypeScript: 3, Kotlin: 2 } },
      { title: "类型有用，但别挡我快速试错", desc: "原型阶段灵活性更重要。", scores: { Python: 4, JavaScript: 3, Ruby: 2, Julia: 2 } },
      { title: "类型应该服务大型团队协作", desc: "接口、契约和 IDE 支持很关键。", scores: { Java: 4, TypeScript: 4, Kotlin: 3, Swift: 2 } },
      { title: "我更关心数据结构和内存布局", desc: "类型只是理解机器的一部分。", scores: { C: 4, "C++": 3, Rust: 2 } }
    ]
  },
  {
    title: "你最喜欢哪种‘成就感’？",
    subtitle: "语言选择往往和你想获得的反馈有关。",
    options: [
      { title: "把复杂流程一键自动化", desc: "效率提升是最直接的快乐。", scores: { Bash: 4, Python: 3, Go: 1 } },
      { title: "让一个复杂界面变得顺滑漂亮", desc: "用户体验是可见的胜利。", scores: { Swift: 4, JavaScript: 3, TypeScript: 3 } },
      { title: "把系统性能压到极限", desc: "每一点开销都值得追。", scores: { "C++": 4, C: 3, Rust: 3, Julia: 1 } },
      { title: "写出一个抽象上很漂亮的模型", desc: "正确性和美感同样重要。", scores: { Haskell: 4, Lisp: 3, Julia: 2, R: 1 } }
    ]
  },
  {
    title: "你如何理解‘好代码’？",
    subtitle: "不要选政治正确，选最接近你审美的。",
    options: [
      { title: "像论文一样严谨", desc: "结构清楚，可证明，可推理。", scores: { Haskell: 4, Rust: 2, Julia: 2 } },
      { title: "像瑞士军刀一样实用", desc: "小而快，能处理现实中的脏活。", scores: { Python: 3, Bash: 3, Go: 2 } },
      { title: "像工业流水线一样规范", desc: "稳定、可读、可交接。", scores: { Java: 4, TypeScript: 3, Kotlin: 2 } },
      { title: "像机械零件一样精确", desc: "贴近底层，边界明确。", scores: { C: 4, "C++": 3, Rust: 3 } }
    ]
  },
  {
    title: "你最愿意阅读哪类书/文档？",
    subtitle: "这题偏气质，不完全偏工程。",
    options: [
      { title: "数据科学、机器学习、统计建模", desc: "我喜欢从数据里提炼判断。", scores: { Python: 3, R: 4, Julia: 2, SQL: 2 } },
      { title: "操作系统、编译原理、体系结构", desc: "我想理解抽象下面的抽象。", scores: { C: 4, "C++": 3, Rust: 3 } },
      { title: "分布式系统、工程实践、SRE", desc: "复杂系统如何稳定运行更吸引我。", scores: { Go: 4, Java: 3, Bash: 2 } },
      { title: "类型论、函数式、语言设计", desc: "我对表达系统本身着迷。", scores: { Haskell: 4, Lisp: 4, Rust: 1 } }
    ]
  },
  {
    title: "当你要做一个小工具，你会怎么开始？",
    subtitle: "开工方式会直接反映你的默认语言。",
    options: [
      { title: "先写一个脚本，能用再说", desc: "需求会变，别过早设计。", scores: { Python: 4, Bash: 3, Ruby: 2, JavaScript: 1 } },
      { title: "先定数据结构和边界条件", desc: "结构稳了，后面才稳。", scores: { Rust: 3, TypeScript: 3, Haskell: 2, Java: 2 } },
      { title: "先考虑部署、并发和日志", desc: "工具也可能长成服务。", scores: { Go: 4, Java: 2, Bash: 2 } },
      { title: "先看平台 API 和用户体验", desc: "工具最终是给人用的。", scores: { Swift: 4, Kotlin: 3, TypeScript: 2 } }
    ]
  },
  {
    title: "你的团队协作偏好？",
    subtitle: "独狼语言和团队语言的分野在这里。",
    options: [
      { title: "约定和规范越明确越好", desc: "大型项目不能靠默契活着。", scores: { Java: 4, TypeScript: 3, Go: 2, Kotlin: 2 } },
      { title: "工具要轻，沟通要快", desc: "别让流程吃掉产出。", scores: { Python: 3, Go: 3, Ruby: 2 } },
      { title: "宁愿代码难写，也别让错误上线", desc: "质量门槛要设在早期。", scores: { Rust: 4, Haskell: 3, TypeScript: 2 } },
      { title: "我更适合研究深问题，不爱频繁切上下文", desc: "沉浸式思考比会议重要。", scores: { Haskell: 3, Lisp: 3, "C++": 2, Julia: 2 } }
    ]
  },
  {
    title: "你对数据库/数据的态度？",
    subtitle: "有些人写流程，有些人直接描述关系。",
    options: [
      { title: "我喜欢用查询直接得到答案", desc: "关系、筛选、聚合、连接，很自然。", scores: { SQL: 5, R: 2, Python: 1 } },
      { title: "我喜欢把数据变成图和统计结论", desc: "可解释性和表达很重要。", scores: { R: 4, Python: 3, Julia: 2 } },
      { title: "我关心数据系统背后的性能实现", desc: "索引、存储、执行计划才刺激。", scores: { "C++": 3, Rust: 3, Go: 2, C: 2 } },
      { title: "数据只是业务系统的一部分", desc: "模型、服务、接口要一起考虑。", scores: { Java: 3, TypeScript: 2, Kotlin: 2, Go: 2 } }
    ]
  },
  {
    title: "你最像哪种开发者？",
    subtitle: "这是临门一脚的气质题。",
    options: [
      { title: "产品工匠", desc: "我在意界面、体验和完成度。", scores: { Swift: 4, Kotlin: 3, TypeScript: 2, JavaScript: 2 } },
      { title: "系统工程师", desc: "我在意性能、可靠性和边界。", scores: { Rust: 4, Go: 3, C: 3, "C++": 2 } },
      { title: "研究型探索者", desc: "我在意模型、抽象和新想法。", scores: { Julia: 4, Haskell: 3, Lisp: 3, Python: 2 } },
      { title: "业务架构师", desc: "我在意长期维护和组织协作。", scores: { Java: 4, TypeScript: 3, SQL: 2, Kotlin: 2 } }
    ]
  },
  {
    title: "最后一题：你希望语言替你承担什么？",
    subtitle: "选完就出结果。",
    options: [
      { title: "替我省时间", desc: "少写废话，多解决问题。", scores: { Python: 4, Ruby: 3, Bash: 2, JavaScript: 1 } },
      { title: "替我保安全", desc: "把低级错误挡在上线前。", scores: { Rust: 5, TypeScript: 3, Haskell: 3, Swift: 2 } },
      { title: "替我撑规模", desc: "团队、业务、服务都要扛得住。", scores: { Java: 4, Go: 4, Kotlin: 2, SQL: 2 } },
      { title: "替我表达思想", desc: "语言不只是工具，也是思维形式。", scores: { Lisp: 4, Haskell: 4, Julia: 3 } }
    ]
  }
];

const app = document.querySelector("#app");
let currentIndex = 0;
let scores = {};
let historyStack = [];
let lastResult = null;

function initScores() {
  scores = Object.fromEntries(Object.keys(LANGUAGES).map((name) => [name, 0]));
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function renderHome() {
  app.innerHTML = `
    <section class="screen home-screen fade-in">
      <div>
        <div class="kicker">Programming Language Soulmate Test</div>
        <h1 class="title">测测你的<br><span class="gradient-text">本命编程语言</span></h1>
        <p class="lead">
          你是人生苦短的 Python 信徒，还是借用检查器的 Rust 苦修士？
          是 Java 工程秩序维护者，还是 C 语言底层原教旨主义者？
          15 道题，给你一个带点刻薄、但可能很准的语言人格结果。
        </p>
        <div class="action-row">
          <button class="primary-btn" type="button" data-action="start">开始测试</button>
          <button class="ghost-btn" type="button" data-action="random">随机体验</button>
        </div>
      </div>

      <aside class="mock-window" aria-hidden="true">
        <div class="window-bar"><span class="dot"></span><span class="dot"></span><span class="dot"></span></div>
        <div class="code-lines">
          <div class="code-line"><span>01</span><code>const soul = await test.run();</code></div>
          <div class="code-line"><span>02</span><code>if (soul === "Rust") &#123;</code></div>
          <div class="code-line"><span>03</span><code>&nbsp;&nbsp;borrowChecker.smile();</code></div>
          <div class="code-line"><span>04</span><code>&#125; else &#123;</code></div>
          <div class="code-line"><span>05</span><code>&nbsp;&nbsp;shipIt();</code></div>
          <div class="code-line"><span>06</span><code>&#125;</code></div>
          <div class="code-chip-row">
            <span class="code-chip">Python</span>
            <span class="code-chip">Rust</span>
            <span class="code-chip">Go</span>
            <span class="code-chip">TypeScript</span>
            <span class="code-chip">Haskell</span>
            <span class="code-chip">C++</span>
          </div>
        </div>
      </aside>
    </section>
  `;
}

function startQuiz() {
  currentIndex = 0;
  historyStack = [];
  lastResult = null;
  initScores();
  renderQuestion();
}

function randomRun() {
  startQuiz();
  for (let i = 0; i < QUESTIONS.length; i++) {
    const q = QUESTIONS[i];
    const optionIndex = Math.floor(Math.random() * q.options.length);
    applyScores(q.options[optionIndex].scores);
  }
  renderResult();
}

function applyScores(optionScores) {
  for (const [lang, point] of Object.entries(optionScores)) {
    scores[lang] = (scores[lang] || 0) + point;
  }
}

function revertScores(optionScores) {
  for (const [lang, point] of Object.entries(optionScores)) {
    scores[lang] = (scores[lang] || 0) - point;
  }
}

function chooseOption(optionIndex) {
  const question = QUESTIONS[currentIndex];
  const option = question.options[optionIndex];
  historyStack.push({ questionIndex: currentIndex, optionIndex, scores: option.scores });
  applyScores(option.scores);

  if (currentIndex >= QUESTIONS.length - 1) {
    renderResult();
    return;
  }

  currentIndex += 1;
  renderQuestion();
}

function goBack() {
  if (historyStack.length === 0) {
    renderHome();
    return;
  }

  const last = historyStack.pop();
  revertScores(last.scores);
  currentIndex = last.questionIndex;
  renderQuestion();
}

function renderQuestion() {
  const question = QUESTIONS[currentIndex];
  const progress = Math.round(((currentIndex + 1) / QUESTIONS.length) * 100);
  const optionLetters = ["A", "B", "C", "D"];

  app.innerHTML = `
    <section class="screen quiz-screen fade-in">
      <aside class="side-panel">
        <div class="progress-label">Question</div>
        <div class="progress-number">${currentIndex + 1}<span style="color: var(--soft); font-size: 24px;">/${QUESTIONS.length}</span></div>
        <div class="progress-track"><div class="progress-fill" style="width: ${progress}%;"></div></div>
        <div class="meta-box">
          规则：每个选项会给若干语言加权。不要纠结“我应该是什么”，选“我第一反应更像什么”。
        </div>
      </aside>

      <section class="question-area">
        <h2 class="question-title">${escapeHtml(question.title)}</h2>
        <p class="question-subtitle">${escapeHtml(question.subtitle)}</p>
        <div class="option-grid">
          ${question.options.map((option, index) => `
            <button class="option-btn" type="button" data-action="choose" data-index="${index}">
              <span class="option-key">${optionLetters[index]}</span>
              <span class="option-main">
                <span class="option-title">${escapeHtml(option.title)}</span>
                <span class="option-desc">${escapeHtml(option.desc)}</span>
              </span>
            </button>
          `).join("")}
        </div>
        <div class="quiz-nav">
          <button class="ghost-btn" type="button" data-action="back">返回上一题</button>
          <button class="tiny-btn" type="button" data-action="home">退出测试</button>
        </div>
      </section>
    </section>
  `;
}

function getSortedScores() {
  return Object.entries(scores)
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
}

function renderResult() {
  const sorted = getSortedScores();
  const [winnerName, winnerScore] = sorted[0];
  const winner = LANGUAGES[winnerName];
  const maxScore = Math.max(winnerScore, 1);
  lastResult = { name: winnerName, score: winnerScore };

  app.innerHTML = `
    <section class="screen result-screen fade-in">
      <section class="result-card">
        <div class="lang-badge">${escapeHtml(winner.short)}</div>
        <div class="result-kicker">Your programming soulmate is</div>
        <h1 class="result-title gradient-text">${escapeHtml(winner.title)}</h1>
        <p class="result-desc"><strong>${escapeHtml(winner.subtitle)}</strong>。${escapeHtml(winner.desc)}</p>
        <div class="result-tags">
          ${winner.tags.map((tag) => `<span class="result-tag"># ${escapeHtml(tag)}</span>`).join("")}
        </div>
        <div class="roast-box"><strong>一句吐槽：</strong>${escapeHtml(winner.roast)}</div>
        <div class="action-row" style="margin-top: 24px;">
          <button class="primary-btn" type="button" data-action="restart">重新测试</button>
          <button class="ghost-btn" type="button" data-action="share">复制结果</button>
        </div>
      </section>

      <aside class="ranking-panel">
        <div class="panel-title">
          <h2>语言匹配度排行</h2>
          <span>Top 8</span>
        </div>
        <div class="rank-list">
          ${sorted.slice(0, 8).map(([name, score], index) => {
            const width = Math.max(7, Math.round((score / maxScore) * 100));
            return `
              <div class="rank-item">
                <div class="rank-topline">
                  <span><span class="rank-name">${index + 1}. ${escapeHtml(name)}</span> · ${escapeHtml(LANGUAGES[name].subtitle)}</span>
                  <span>${score}</span>
                </div>
                <div class="bar"><span style="width: ${width}%;"></span></div>
              </div>
            `;
          }).join("")}
        </div>
        <div class="roast-box">
          <strong>解释：</strong>分数不是能力判断，而是你在“表达效率、类型约束、底层控制、工程协作、抽象偏好”等维度上的趣味画像。
        </div>
      </aside>
    </section>
  `;
}

async function copyResult() {
  if (!lastResult) return;
  const lang = LANGUAGES[lastResult.name];
  const text = `我的本命编程语言是 ${lang.title}：${lang.subtitle}。${lang.roast}`;

  try {
    await navigator.clipboard.writeText(text);
    toast("结果已复制，可以发给朋友互相迫害了。");
  } catch (error) {
    toast("复制失败：浏览器没有开放剪贴板权限。可手动选中结果复制。");
  }
}

function toast(message) {
  const old = document.querySelector(".toast");
  if (old) old.remove();

  const el = document.createElement("div");
  el.className = "toast";
  el.textContent = message;
  Object.assign(el.style, {
    position: "fixed",
    left: "50%",
    bottom: "28px",
    transform: "translateX(-50%)",
    zIndex: "20",
    padding: "12px 16px",
    borderRadius: "999px",
    color: "#020617",
    background: "linear-gradient(135deg, #7dd3fc, #c084fc)",
    fontWeight: "900",
    boxShadow: "0 18px 50px rgba(0, 0, 0, 0.35)",
    maxWidth: "calc(100% - 32px)",
    textAlign: "center"
  });
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 2200);
}

app.addEventListener("click", (event) => {
  const target = event.target.closest("[data-action]");
  if (!target) return;

  const action = target.dataset.action;
  if (action === "start") startQuiz();
  if (action === "random") randomRun();
  if (action === "choose") chooseOption(Number(target.dataset.index));
  if (action === "back") goBack();
  if (action === "home") renderHome();
  if (action === "restart") startQuiz();
  if (action === "share") copyResult();
});

window.addEventListener("keydown", (event) => {
  const keyMap = { "1": 0, "2": 1, "3": 2, "4": 3, a: 0, b: 1, c: 2, d: 3, A: 0, B: 1, C: 2, D: 3 };
  if (document.querySelector(".quiz-screen") && Object.hasOwn(keyMap, event.key)) {
    chooseOption(keyMap[event.key]);
  }
  if (event.key === "Escape") {
    renderHome();
  }
});

renderHome();
