"use client";

import { useEffect, useState } from "react";

type Language = "en" | "zh";
type View = "about" | "publications" | "talks" | "cv";
type LocalizedText = { en: string; zh: string };

type Publication = {
  year: string;
  title: string;
  authors: string;
  venue: string;
  href: string;
  note?: string;
  summary?: LocalizedText;
};

const firstPassageControlBudget: Publication = {
  year: "2026",
  title: "A Universal Control Budget for First-Passage Kinetics",
  authors: "Shiling Liang* & Ruicheng Bao*",
  venue: "arXiv:2608.06368",
  href: "https://arxiv.org/abs/2608.06368",
  note: "Preprint",
  summary: {
    en:
      "We derive universal response bounds for first-passage kinetics, turning microscopic rate perturbations into general control rules for completion times and design principles for biochemical networks. Kinetic proofreading provides a central application: the theory shows how the checkpoint number limits discrimination and reveals the accompanying sensitivity to substrate concentration.",
    zh:
      "我们推导了首达动力学的普适响应界限，将微观速率扰动转化为控制完成时间的一般规则，并由此为生化网络提供设计原则。以动力学校对为重要应用，我们进一步揭示了校验点数量如何限制判别能力，以及这种判别所伴随的底物浓度敏感性变化。",
  },
};

const entanglementMpemba: Publication = {
  year: "2026",
  title: "Entanglement Mpemba Effect",
  authors: "Ruicheng Bao* & Yue Liu*",
  venue: "arXiv:2608.07465",
  href: "https://arxiv.org/abs/2608.07465",
  note: "Preprint",
  summary: {
    en:
      "We introduce a new physical phenomenon, the entanglement Mpemba effect: A less entangled initial state, even a product state, can overtake a more entangled one and reach a highly entangled target steady state, such as a GHZ state, earlier. This turns initial-state selection into a practical route to faster entangled-state preparation. We further show that reversal of the deterministic LOCC-reachability preorder provides a measure-independent certificate of reversed entanglement order across all entanglement monotones.",
    zh:
      "我们提出了一种全新的物理现象——纠缠 Mpemba 效应。在相同的耗散动力学下，纠缠较少的初态，甚至乘积态，可以反超纠缠较多的初态，并更快到达 GHZ 态等高纠缠目标稳态。这使初态选择成为加速高纠缠态制备的实用途径。我们还证明，确定性 LOCC 可达预序的反转能够为所有纠缠单调量共同的序反转提供一个与度量选择无关的充分判据。",
  },
};

const exactFirstPassageResponse: Publication = {
  year: "2026",
  title: "Exact First-Passage Time Response Theory from Steady-State Response",
  authors: "Ruicheng Bao* & Shiling Liang*",
  venue: "arXiv:2608.11202",
  href: "https://arxiv.org/abs/2608.11202",
  note: "Preprint",
  summary: {
    en:
      "We develop a new framework for first-passage time response, yielding the beautiful and universal formulas shown in the homepage portrait and a physical decomposition into linear upstream, linear downstream, and nonlinear contributions. As illustrated in a protein-folding network, nonlinear effect vanishes when the perturbed edge is a bottleneck but strongly suppresses the finite-perturbation response otherwise. The framework also defines dynamical shortcuts in complex networks and resolves a recently proposed paradox.",
    zh:
      "我们建立了平均首达时间响应的新框架，得到主页插图中两个漂亮且普适的公式，并将响应分解为线性上游、线性下游和非线性三部分贡献。正如在蛋白质折叠网络中展示的，当扰动边是瓶颈时，非线性屏蔽消失；反之，它会显著压制有限扰动响应。该框架还严格定义了复杂网络中的动力学捷径，以此澄清了近期提出的一个悖论。",
  },
};

const extremeFirstPassage: Publication = {
  year: "2026",
  title: "Extreme First-Passage Time of Many Interacting Particles",
  authors: "Ruicheng Bao*",
  venue: "arXiv:2607.22528",
  href: "https://arxiv.org/abs/2607.22528",
  note: "Preprint",
  summary: {
    en: "I tackle a notoriously difficult correlated extreme first-passage problem and build a general theory for interacting searchers. The framework reveals universal large-N acceleration classes—from the familiar 1/ln N law to sharp interaction-driven limits—where earlier theory was restricted to independent particles.",
    zh: "我处理了一个公认困难的关联极值首达问题，并建立了适用于一般相互作用搜索者的理论框架。该框架揭示了大 N 极限下从经典 1/ln N 标度到相互作用驱动极限的普适加速规律，而此前理论主要局限于独立粒子。",
  },
};

const optimalControl: Publication = {
  year: "2026",
  title:
    "Optimal Finite-Time Control of Nonreciprocal Brownian Dimers: Thermodynamic Anomaly and Multiple Transitions",
  authors: "Ruicheng Bao*",
  venue: "arXiv:2607.20420",
  href: "https://arxiv.org/abs/2607.20420",
  note: "Preprint",
  summary: {
    en: "I solve an interacting finite-time control problem exactly and uncover phenomena with no noninteracting counterpart: a thermodynamic anomaly with diverging extractable work and output power, together with multiple transitions between optimal strategies.",
    zh: "我精确求解了非互易布朗二聚体的有限时间最优控制问题，并发现了相互作用体系特有的热力学反常：在有限时间内可提取功与输出功率可能发散，最优控制方案还会随参数变化发生多重转变。",
  },
};

const initialStateTypicality: Publication = {
  year: "2026",
  title: "Initial-State Typicality in Quantum Relaxation",
  authors: "Ruicheng Bao*",
  venue: "Physical Review Letters 136, 070402",
  href: "https://doi.org/10.1103/wgr5-lb6b",
  summary: {
    en: "I show that relaxation in high-dimensional open quantum systems becomes nearly independent of a generic initial state. This leads to the notions of typical relaxation time and the typical strong Mpemba effect, with practical consequences for state preparation and quantum thermal tasks.",
    zh: "我证明了高维开放量子系统对一般初态的弛豫会趋于近乎相同，由此提出典型弛豫时间与典型强 Mpemba 效应，并给出其在量子态制备和量子热任务中的实际意义。",
  },
};

const nonlinearResponse: Publication = {
  year: "2024",
  title: "Nonlinear Response Identities and Bounds for Nonequilibrium Steady States",
  authors: "Ruicheng Bao* & Shiling Liang*",
  venue: "arXiv:2412.19602",
  href: "https://arxiv.org/abs/2412.19602",
  note: "Preprint",
  summary: {
    en: "We develop an exact nonlinear response theory for nonequilibrium steady states under finite perturbations. A first-passage connection turns nonlinear response into a scaled linear response and yields universal amplitude and signal-to-noise bounds.",
    zh: "我们建立了适用于有限扰动下非平衡稳态的精确非线性响应理论。通过首达时间的联系，非线性响应可被写成线性响应的缩放形式，并自然导出普适的响应幅度与信噪比界限。",
  },
};

const measuringIrreversibility: Publication = {
  year: "2025",
  title: "Measuring Irreversibility by Counting: A Random Coarse-Graining Framework",
  authors: "Ruicheng Bao*, Naruo Ohga & Sosuke Ito",
  venue: "arXiv:2508.11586",
  href: "https://arxiv.org/abs/2508.11586",
  note: "Preprint",
  summary: {
    en: "We turn simple particle counts into rigorous, model-free lower bounds on entropy production. Random coarse-graining makes irreversibility measurable from video microscopy without tracking trajectories or knowing the microscopic interactions.",
    zh: "我们将简单的粒子计数转化为严格且无模型依赖的熵产生下界。随机粗粒化使研究者无需追踪轨迹或预先知道微观相互作用，即可直接从显微视频测量不可逆性。",
  },
};

const temporaryReset: Publication = {
  year: "2025",
  title: "Accelerating Quantum Relaxation via Temporary Reset: A Mpemba-Inspired Approach",
  authors: "Ruicheng Bao* & Zhonghuai Hou*",
  venue: "Physical Review Letters 135, 150403",
  href: "https://doi.org/10.1103/g94p-7421",
  summary: {
    en: "We introduce a temporary-reset protocol that can suppress several slow Lindbladian modes at once—even complex-conjugate modes—providing a practical and broadly applicable route to faster quantum relaxation.",
    zh: "我们提出临时重置协议，可同时抑制多个缓慢的 Lindblad 模态，包括复共轭模态，从而为加速量子弛豫提供一种实用且具有广泛适用性的路径。",
  },
};

const timescaleTradeoff: Publication = {
  year: "2025",
  title:
    "Universal Trade-Off Between Irreversibility and Intrinsic Timescale in Thermal Relaxation with Applications to Thermodynamic Inference",
  authors: "Ruicheng Bao*, Chaoqun Du, Zhiyu Cao & Zhonghuai Hou*",
  venue: "Physical Review E 112, 044134",
  href: "https://doi.org/10.1103/fmsz-rdbj",
  summary: {
    en: "We establish a universal trade-off between dissipation and the intrinsic relaxation timescale. It yields an inverse speed limit and remains useful after non-Markovian coarse-graining, turning timescale data into a tool for thermodynamic inference.",
    zh: "我们建立了耗散与内禀弛豫时间尺度之间的普适权衡关系。该关系给出一种反向速度极限，并在非马尔可夫粗粒化后依然成立，使时间尺度数据能够用于热力学推断。",
  },
};

const maxwellDemon: Publication = {
  year: "2023",
  title: "Designing Autonomous Maxwell’s Demon via Stochastic Resetting",
  authors: "Ruicheng Bao*, Zhiyu Cao, Jiming Zheng & Zhonghuai Hou*",
  venue: "Physical Review Research 5, 043066",
  href: "https://doi.org/10.1103/PhysRevResearch.5.043066",
  note: "Co-first authors",
  summary: {
    en: "We use stochastic resetting as a design principle for autonomous information engines: it speeds up functionalization, enlarges the work-producing regime, and exposes a dual-function phase whose apparent thermodynamic paradox is resolved by the cost of resetting.",
    zh: "我们将随机重置发展为自主信息引擎的设计原理：它既能加速功能化、扩大产功区域，也会产生一种兼具产功与信息擦除的双功能相；其表观热力学悖论由重置代价得到解释。",
  },
};

const typicalMixing: Publication = {
  year: "2026",
  title: "Typical Mixing and Rare-State Bottlenecks in Open Quantum Systems",
  authors: "Caisheng Cheng & Ruicheng Bao*",
  venue: "arXiv:2605.07619",
  href: "https://arxiv.org/abs/2605.07619",
  note: "Preprint",
};

const hierarchicalTimeArrow: Publication = {
  year: "2026",
  title: "Hierarchical Reconstruction of Time-Arrow from Multi-Time Correlations",
  authors: "Yijia Cheng, Ruicheng Bao* & Zhonghuai Hou*",
  venue: "arXiv:2604.25749",
  href: "https://arxiv.org/abs/2604.25749",
  note: "Preprint",
  summary: {
    en: "We extend time-arrow reconstruction from two-time asymmetries to a hierarchy of multi-time correlations. Higher-order correlations reveal irreversibility hidden at lower orders and progressively sharpen thermodynamic inference.",
    zh: "作为“计数测量不可逆性”工作的进一步结果，我们把时间箭头的重构从二时关联推广到多时关联的层级结构。更高阶关联能够揭示低阶观测中隐藏的不可逆性，并随着动力学信息增加逐步提高热力学推断能力。",
  },
};

const delayedDissipation: Publication = {
  year: "2026",
  title:
    "Characteristic Oscillations in Frequency-Resolved Heat Dissipation of Linear Time-Delayed Langevin Systems",
  authors: "Xin Wang, Ruicheng Bao & Naruo Ohga",
  venue: "Physical Review Research 8, 013039",
  href: "https://doi.org/10.1103/x2dm-9p8m",
};

const lindbladianLearning: Publication = {
  year: "2026",
  title: "Physically Natural Metric-Measure Lindbladian Ensembles and Their Learning Hardness",
  authors: "Caisheng Cheng & Ruicheng Bao",
  venue: "arXiv:2601.01806",
  href: "https://arxiv.org/abs/2601.01806",
  note: "Preprint",
};

const cascadeTransport: Publication = {
  year: "2023",
  title: "Cascade-Enhanced Transport Efficiency of Biochemical Systems",
  authors: "Zhiyu Cao, Ruicheng Bao & Zhonghuai Hou*",
  venue: "Chaos 33, 063104",
  href: "https://doi.org/10.1063/5.0146769",
};

const runAndTumble: Publication = {
  year: "2023",
  title:
    "Improving Estimation of Entropy Production Rate for Run-and-Tumble Particle Systems by High-Order Thermodynamic Uncertainty Relation",
  authors: "Ruicheng Bao & Zhonghuai Hou*",
  venue: "Physical Review E 107, 024112",
  href: "https://doi.org/10.1103/PhysRevE.107.024112",
};

const informationEngine: Publication = {
  year: "2023",
  title: "Fast Functionalization with High Performance in the Autonomous Information Engine",
  authors: "Zhiyu Cao, Ruicheng Bao, Jiming Zheng & Zhonghuai Hou*",
  venue: "The Journal of Physical Chemistry Letters 14, 66–72",
  href: "https://doi.org/10.1021/acs.jpclett.2c03335",
  note: "Co-first authors",
};

const selectedIndependent = [
  exactFirstPassageResponse,
  entanglementMpemba,
  firstPassageControlBudget,
  extremeFirstPassage,
  optimalControl,
  initialStateTypicality,
  hierarchicalTimeArrow,
  nonlinearResponse,
];
const selectedSupervised = [measuringIrreversibility, temporaryReset, timescaleTradeoff, maxwellDemon];

const independentPublications = [
  exactFirstPassageResponse,
  entanglementMpemba,
  firstPassageControlBudget,
  extremeFirstPassage,
  optimalControl,
  initialStateTypicality,
  typicalMixing,
  hierarchicalTimeArrow,
  lindbladianLearning,
  delayedDissipation,
  nonlinearResponse,
];

const supervisedPublications = [
  measuringIrreversibility,
  temporaryReset,
  timescaleTradeoff,
  maxwellDemon,
  cascadeTransport,
  runAndTumble,
  informationEngine,
];

const allPublications = [...independentPublications, ...supervisedPublications].sort(
  (a, b) => Number(b.year) - Number(a.year),
);

const talks = [
  {
    typeEn: "Lightning talk",
    typeZh: "轻型报告",
    title: "Initial-state typicality in transient OQD with applications to thermal quantum tasks",
    venueEn: "Workshop on Stochastic Thermodynamics VII (WOST VII) · Online",
    venueZh: "第七届随机热力学研讨会（WOST VII）· 线上",
    date: "18–22 May 2026",
    href: "https://www.youtube.com/watch?v=ULkfx2jxaHU",
  },
  {
    typeEn: "Invited seminar",
    typeZh: "邀请报告",
    title: "Initial-State Typicality and Applications to Quantum Thermal Tasks",
    venueEn: "Hatano Laboratory, The University of Tokyo · Tokyo, Japan",
    venueZh: "东京大学 Hatano 研究室 · 日本东京",
    date: "20 Dec 2025",
  },
  {
    typeEn: "Invited seminar",
    typeZh: "邀请报告",
    title: "Initial-State Typicality and Applications to Quantum Thermal Tasks",
    venueEn: "Sasa Laboratory, Kyoto University · Kyoto, Japan",
    venueZh: "京都大学 Sasa 研究室 · 日本京都",
    date: "01 Dec 2025",
  },
  {
    typeEn: "Contributed talk",
    typeZh: "口头报告",
    title: "Accelerating quantum relaxation using temporary coupling",
    venueEn: "The 8th National Conference on Statistical Physics and Complex Systems, Ningbo University, Ningbo, China",
    venueZh: "第八届全国统计物理与复杂系统会议 · 宁波大学",
    date: "02 Jun 2025",
  },
  {
    typeEn: "Invited seminar",
    typeZh: "邀请报告",
    title: "An Exact Theory of Nonequilibrium Response to Arbitrarily Strong Perturbations",
    venueEn: "Sasa Laboratory, Kyoto University · Kyoto, Japan",
    venueZh: "京都大学 Sasa 研究室 · 日本京都",
    date: "02 Jun 2025",
  },
  {
    typeEn: "Lightning talk",
    typeZh: "轻型报告",
    title: "Dissipation, Intrinsic Timescale and Coarse-Graining in Relaxation Processes",
    venueEn: "Workshop on Stochastic Thermodynamics V (WOST V) · Online",
    venueZh: "第五届随机热力学研讨会（WOST V）· 线上",
    date: "2024",
    href: "https://www.youtube.com/watch?v=j0cqwCAHAhY",
  },
  {
    typeEn: "Contributed talk",
    typeZh: "会议口头报告",
    title: "Universal Trade-Off Between Irreversibility and Intrinsic Timescale in Thermal Relaxation",
    venueEn: "28th International Conference on Statistical Physics (STATPHYS28) · The University of Tokyo, Tokyo, Japan",
    venueZh: "第28届国际统计物理大会（STATPHYS28）· 东京大学，日本东京",
    date: "07–11 Aug 2023",
  },
];

const posters = [
  {
    title: "Extreme First-Passage Time in Interacting Many-Body Systems: A No-Go Theorem and Beyond",
    venueEn: "Frontiers in Nonequilibrium Physics 2026, YITP, Kyoto University",
    venueZh: "Frontiers in Nonequilibrium Physics 2026，京都大学基研",
    date: "13 May 2026",
    href: "https://indico.yukawa.kyoto-u.ac.jp/event/76/page/103-poster",
  },
  {
    title: "A Random Coarse-Graining Framework with Applications to Thermodynamic Inference",
    venueEn: "Kyoto Workshop on Quantum Thermodynamics and Related Topics, YITP",
    venueZh: "京都量子热力学及相关主题研讨会，京都大学基研",
    date: "08 Dec 2025",
    href: "https://indico.yukawa.kyoto-u.ac.jp/event/68/page/71-poster-session",
  },
  {
    title: "Response theory for strong perturbations (Best poster award)",
    venueEn: "The 8th National Conference on Statistical Physics and Complex Systems, Ningbo University, Ningbo, China",
    venueZh: "第八届全国统计物理与复杂系统会议，宁波大学 (优秀海报奖)",
    date: "01 Aug 2025",
    href: "https://conf.koushare.com/conf/spcsc2025",
  },
  {
    title: "Universal Trade-Off Relation Between Irreversibility and Intrinsic Timescale in Thermal Relaxation",
    venueEn: "Frontiers in Nonequilibrium Physics 2024, YITP, Kyoto University",
    venueZh: "Frontiers in Nonequilibrium Physics 2024，京都大学基研",
    date: "10 Jul 2024",
    href: "https://indico.yukawa.kyoto-u.ac.jp/event/33/contributions/112/subcontributions/14",
  },
  {
    title: "Estimating Irreversibility under Coarse-Graining",
    venueEn: "Frontiers in Nonequilibrium Physics 2024, YITP, Kyoto University",
    venueZh: "Frontiers in Nonequilibrium Physics 2024，京都大学基研",
    date: "17 Jul 2024",
    href: "https://www2.yukawa.kyoto-u.ac.jp/~frontier24/LongTermWorkshop/PosterSessions_2nd_3rd_weeks.php",
  },
];

const copy = {
  en: {
    nav: { about: "About", publications: "Publications", talks: "Presentations", cv: "CV" },
    location: "Department of Physics, The University of Tokyo",
    eyebrow: "Randomness · Timescale · Irreversibility · Information",
    hero: "I study the physics of randomness and timescales.",
    intro:
      "My work asks how fluctuations, irreversibility, limited information, and competing timescales shape nonequilibrium systems—from stochastic thermodynamics and first-passage phenomena to relaxation and open quantum dynamics.",
    timescale:
      "Equilibrium systems can often be described by a few macroscopic, time-independent quantities. Away from equilibrium, timescales become indispensable characteristic features: they determine how systems relax, respond, search, and can be controlled.",
    detail:
      "I am particularly interested in exact relations, sharp bounds, inference, and control principles that retain clear operational meaning. If these questions resonate with you, I would be very happy to hear from you.",
    interests: "Research interests",
    interestItems: [
      "Nonequilibrium & stochastic thermodynamics",
      "Timescales, relaxation & response",
      "Stochastic processes & first-passage phenomena",
      "Inference, optimal control & information",
      "Open quantum systems & quantum thermodynamics",
    ],
    selected: "Selected publications & preprints",
    independent: "Unsupervised & independent work",
    independentNote: "Work developed independently or through peer collaboration, without formal research supervision.",
    supervised: "Supervised work",
    supervisedNote: "Work developed within my doctoral or earlier supervised research.",
    corresponding: "* Corresponding author",
    all: "View complete list",
    pubsEyebrow: "02 · Research record",
    pubsTitle: "Publications & preprints",
    pubsLead: "Peer-reviewed articles and public preprints, listed by year.",
    talksEyebrow: "03 · Exchange",
    talksTitle: "Presentations",
    talksLead: "Research talks, invited seminars, and conference posters.",
    talksLabel: "Talks",
    postersLabel: "Posters",
    cvEyebrow: "04 · Profile",
    cvTitle: "Curriculum vitae",
    cvLead: "Academic training, research profile, publications, and selected presentations.",
    downloadPdf: "Download CV (PDF)",
    downloadTex: "TeX source",
    appointment: "Academic position",
    education: "Education",
    profile: "Research profile",
    currentText: "JSPS Research Fellow (DC1)",
    currentMeta:
      "Department of Physics, Graduate School of Science, The University of Tokyo · Ito Laboratory · Tokyo, Japan · Oct 2024–present",
    phd: "Ph.D. program in Physics",
    phdMeta: "The University of Tokyo · Advisor: Prof. Sosuke Ito · Oct 2024–present",
    ms: "M.S. in Chemical Physics",
    msMeta: "University of Science and Technology of China · Advisor: Prof. Zhonghuai Hou · 2024",
    bs: "B.S. in Chemistry",
    bsMeta: "University of Science and Technology of China · 2021",
    profileText:
      "Theoretical statistical physics; stochastic thermodynamics; intrinsic timescales; stochastic processes and first-passage phenomena; relaxation, response, inference and optimal control; open quantum systems and quantum thermodynamics.",
    cvPublications: "Publications",
    cvPresentations: "Selected presentations",
    service: "Academic activities",
    serviceText: "Referee for Phys. Rev. Lett., Phys. Rev. A, Phys. Rev. E, J. Math. Phys. and Physica A; Teaching assistance in statistical mechanics and physical chemistry.",
    contact: "Contact",
    lastUpdated: "Last updated August 2026",
    language: "中文",
  },
  zh: {
    nav: { about: "关于我", publications: "论文", talks: "学术展示", cv: "简历" },
    location: "东京大学物理系",
    eyebrow: "随机性 · 时间尺度 · 不可逆性 · 信息",
    hero: "我研究随机性与时间尺度背后的物理。",
    intro:
      "我的研究关注涨落、不可逆性、有限信息与相互竞争的时间尺度如何塑造非平衡系统，涵盖随机热力学、首达过程、弛豫以及开放量子动力学。",
    timescale:
      "平衡系统通常可以由少数几个不含时间的宏观量刻画。对于非平衡系统，时间尺度则是不可或缺的特征，它决定系统如何弛豫、响应、搜索，以及能否被有效控制。",
    detail:
      "我尤其感兴趣的是具有清晰可操作意义的精确关系、严格界限、推断方法与控制原理。如果您也对这些问题感兴趣，非常欢迎与我联系交流。",
    interests: "研究兴趣",
    interestItems: [
      "非平衡与随机热力学",
      "时间尺度、弛豫与响应",
      "随机过程与首达现象",
      "推断、最优控制与信息",
      "开放量子系统与量子热力学",
    ],
    selected: "代表性论文与预印本",
    independent: "无导师指导的独立研究",
    independentNote: "独立开展或通过平等合作完成、没有正式研究指导关系的工作。",
    supervised: "导师指导的研究",
    supervisedNote: "在博士阶段或更早期导师指导下开展的工作。",
    corresponding: "* 通讯作者",
    all: "查看完整列表",
    pubsEyebrow: "02 · 研究成果",
    pubsTitle: "论文与预印本",
    pubsLead: "按年份排列的同行评议论文与公开预印本。",
    talksEyebrow: "03 · 学术交流",
    talksTitle: "学术展示",
    talksLead: "研究报告、邀请讲座与会议海报。",
    talksLabel: "学术报告",
    postersLabel: "会议海报",
    cvEyebrow: "04 · 个人概况",
    cvTitle: "个人简历",
    cvLead: "学术经历、研究概况、论文与部分学术展示。",
    downloadPdf: "下载英文 CV（PDF）",
    downloadTex: "TeX 源文件",
    appointment: "学术位置",
    education: "教育经历",
    profile: "研究方向",
    currentText: "日本学术振兴会特别研究员（DC1）",
    currentMeta: "东京大学大学院理学系研究科物理学专攻 · 伊藤研究室 · 日本东京 · 2024年10月至今",
    phd: "物理学博士在读",
    phdMeta: "东京大学 · 导师：Sosuke Ito 教授 · 2024年10月至今",
    ms: "化学物理系 · 硕士",
    msMeta: "中国科学技术大学 · 导师：侯中怀 教授 · 2024",
    bs: "化学物理系 · 学士",
    bsMeta: "中国科学技术大学 · 2021",
    profileText:
      "理论统计物理、随机热力学、内禀时间尺度、随机过程与首达现象、弛豫、响应、推断与最优控制、开放量子系统与量子热力学。",
    cvPublications: "论文",
    cvPresentations: "部分学术展示",
    service: "学术活动",
    serviceText: "PRL, PRA, PRE, Journal of Mathematical等期刊的审稿人; \n统计力学与物理化学课程助教。",
    contact: "联系方式",
    lastUpdated: "最后更新于2026年8月",
    language: "EN",
  },
} as const;

function ArrowIcon() {
  return <span aria-hidden="true">↗</span>;
}

function PublicationList({
  items,
  language,
  showSummary = false,
  compact = false,
}: {
  items: Publication[];
  language: Language;
  showSummary?: boolean;
  compact?: boolean;
}) {
  return (
    <ol className={`publication-list${compact ? " compact" : ""}`}>
      {items.map((publication) => (
        <li key={`${publication.year}-${publication.title}`} className="publication-item">
          <span className="publication-year">{publication.year}</span>
          <div>
            <a href={publication.href} target="_blank" rel="noreferrer" className="publication-title">
              {publication.title} <ArrowIcon />
            </a>
            <p className="publication-authors">{publication.authors}</p>
            <p className="publication-venue">
              {publication.venue}
              {publication.note ? <span> · {publication.note}</span> : null}
            </p>
            {showSummary && publication.summary ? (
              <p className="publication-summary">{publication.summary[language]}</p>
            ) : null}
          </div>
        </li>
      ))}
    </ol>
  );
}

export default function Home() {
  const [language, setLanguage] = useState<Language>("en");
  const [view, setView] = useState<View>("about");
  const t = copy[language];

  useEffect(() => {
    document.documentElement.lang = language === "en" ? "en" : "zh-CN";
  }, [language]);

  function changeView(next: View) {
    setView(next);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <main>
      <header className="site-header">
        <button className="identity" onClick={() => changeView("about")} aria-label="Go to About">
          <strong>Ruicheng Bao</strong>
        </button>

        <nav className="nav" aria-label="Primary navigation">
          {(Object.keys(t.nav) as View[]).map((item) => (
            <button
              key={item}
              onClick={() => changeView(item)}
              className={view === item ? "active" : ""}
              aria-current={view === item ? "page" : undefined}
            >
              {t.nav[item]}
            </button>
          ))}
        </nav>

        <button
          className="language-toggle"
          onClick={() => setLanguage(language === "en" ? "zh" : "en")}
          aria-label={language === "en" ? "切换到中文" : "Switch to English"}
        >
          {t.language}
        </button>
      </header>

      {view === "about" ? (
        <>
          <section className="hero page-shell">
            <div className="hero-copy">
              <p className="eyebrow">{t.eyebrow}</p>
              <h1>{t.hero}</h1>
              <p className="hero-intro">{t.intro}</p>
              <p className="hero-timescale">{t.timescale}</p>
              <p className="hero-detail">{t.detail}</p>
              <div className="contact-row">
                <a href="mailto:ruicheng@g.ecc.u-tokyo.ac.jp">Email <ArrowIcon /></a>
                <a href="https://scholar.google.com/citations?user=ZSFCDtUAAAAJ" target="_blank" rel="noreferrer">
                  Google Scholar <ArrowIcon />
                </a>
                <a href="https://orcid.org/0000-0001-5336-9088" target="_blank" rel="noreferrer">
                  ORCID <ArrowIcon />
                </a>
              </div>
            </div>

            <aside className="hero-aside">
              <img
                className="profile-photo"
                src="./images/profile.png"
                alt="Portrait of Ruicheng Bao"
              />
            
              <p>{t.location}</p>
              <div className="interest-block">
                <h2>{t.interests}</h2>
                <ul>
                  {t.interestItems.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
            </aside>
          </section>

          {language === "en" ? (
  <section className="news-section page-shell">
    <p className="news-label">News</p>

    <ul className="news-list">
      <li>
        <time>2026.02.18</time>
        <p>
          My sole-authored paper,{" "}
          <a
            href="https://doi.org/10.1103/wgr5-lb6b"
            target="_blank"
            rel="noreferrer"
          >
            “Initial-State Typicality in Quantum Relaxation”
          </a>
          , is now online in <em>Physical Review Letters</em>.
        </p>
      </li>

      <li>
        <time>2025.10.09</time>
        <p>
          Our work,{" "}
          <a
            href="https://doi.org/10.1103/g94p-7421"
            target="_blank"
            rel="noreferrer"
          >
            Accelerating Quantum Relaxation via Temporary Reset: A Mpemba-Inspired Approach
          </a>{" "}
          appeared in <em>Physical Review Letters</em>.
        </p>
      </li>
    </ul>
  </section>
) : null}

          <section className="selected-section page-shell">
            <div className="section-heading">
              <p className="section-index">01</p>
              <h2>{t.selected}</h2>
              <button className="text-link" onClick={() => changeView("publications")}>
                {t.all} <span aria-hidden="true">→</span>
              </button>
            </div>

            <div className="publication-group">
              <div className="group-intro">
                <h3>{t.independent}</h3>
                <p>{t.independentNote}</p>
              </div>
              <PublicationList items={selectedIndependent} language={language} showSummary />
            </div>

            <div className="publication-group">
              <div className="group-intro">
                <h3>{t.supervised}</h3>
                <p>{t.supervisedNote}</p>
              </div>
              <PublicationList items={selectedSupervised} language={language} showSummary />
            </div>
            <p className="corresponding-note">{t.corresponding}</p>
          </section>
        </>
      ) : null}

      {view === "publications" ? (
        <section className="inner-page page-shell">
          <div className="page-title">
            <p className="eyebrow">{t.pubsEyebrow}</p>
            <h1>{t.pubsTitle}</h1>
            <p>{t.pubsLead}</p>
          </div>
          <div className="full-publications">
            {[...new Set(allPublications.map((publication) => publication.year))].map((year) => (
              <div className="year-group" key={year}>
                <h2>{year}</h2>
                <PublicationList
                  items={allPublications.filter((publication) => publication.year === year)}
                  language={language}
                />
              </div>
            ))}
            <p className="corresponding-note">{t.corresponding}</p>
          </div>
        </section>
      ) : null}

      {view === "talks" ? (
        <section className="inner-page page-shell">
          <div className="page-title">
            <p className="eyebrow">{t.talksEyebrow}</p>
            <h1>{t.talksTitle}</h1>
            <p>{t.talksLead}</p>
          </div>
          <div className="event-section">
            <h2>{t.talksLabel}</h2>
            <ol className="event-list">
              {talks.map((event) => (
                <li key={`${event.date}-${event.title}-${event.venueEn}`}>
                  <span className="event-date">{event.date}</span>
                  <div>
                    <p className="event-type">{language === "en" ? event.typeEn : event.typeZh}</p>
                    {event.href ? (
                      <a href={event.href} target="_blank" rel="noreferrer" className="event-title">
                        {event.title} <ArrowIcon />
                      </a>
                    ) : <p className="event-title">{event.title}</p>}
                    <p className="event-venue">{language === "en" ? event.venueEn : event.venueZh}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div className="event-section">
            <h2>{t.postersLabel}</h2>
            <ol className="event-list">
              {posters.map((event) => (
                <li key={`${event.date}-${event.title}`}>
                  <span className="event-date">{event.date}</span>
                  <div>
                    <a href={event.href} target="_blank" rel="noreferrer" className="event-title">
                      {event.title} <ArrowIcon />
                    </a>
                    <p className="event-venue">{language === "en" ? event.venueEn : event.venueZh}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>
      ) : null}

      {view === "cv" ? (
        <section className="inner-page page-shell">
          <div className="page-title cv-page-title">
            <p className="eyebrow">{t.cvEyebrow}</p>
            <h1>{t.cvTitle}</h1>
            <div className="page-title-aside">
              <p>{t.cvLead}</p>
              <div className="cv-actions">
                <a className="download-button" href="./cv/Ruicheng_Bao_CV.pdf" download>
                  {t.downloadPdf} <span aria-hidden="true">↓</span>
                </a>
                <a className="source-link" href="./cv/Ruicheng_Bao_CV.tex" download>
                  {t.downloadTex}
                </a>
              </div>
            </div>
          </div>
          <div className="cv-grid">
            <section className="cv-block">
              <h2>{t.appointment}</h2>
              <div className="cv-entry">
                <h3>{t.currentText}</h3>
                <p>{t.currentMeta}</p>
              </div>
            </section>
            <section className="cv-block">
              <h2>{t.education}</h2>
              <div className="cv-entry">
                <h3>{t.phd}</h3>
                <p>{t.phdMeta}</p>
              </div>
              <div className="cv-entry">
                <h3>{t.ms}</h3>
                <p>{t.msMeta}</p>
              </div>
              <div className="cv-entry">
                <h3>{t.bs}</h3>
                <p>{t.bsMeta}</p>
              </div>
            </section>
            <section className="cv-block">
              <h2>{t.profile}</h2>
              <p className="cv-copy">{t.profileText}</p>
            </section>
            <section className="cv-block cv-publications-block">
              <h2>{t.cvPublications}</h2>
              <div className="cv-publication-groups">
                <div>
                  <h3>{t.independent}</h3>
                  <PublicationList items={independentPublications} language={language} compact />
                </div>
                <div>
                  <h3>{t.supervised}</h3>
                  <PublicationList items={supervisedPublications} language={language} compact />
                </div>
              </div>
              <p className="corresponding-note">{t.corresponding}</p>
            </section>
            <section className="cv-block">
              <h2>{t.cvPresentations}</h2>
              <div className="cv-entry cv-presentation-list">
                {talks.slice(0, 3).map((event) => (
                  <div key={`${event.date}-${event.venueEn}`}>
                    <h3>{event.title}</h3>
                    <p>{event.date} · {language === "en" ? event.venueEn : event.venueZh}</p>
                  </div>
                ))}
              </div>
            </section>
            <section className="cv-block">
              <h2>{t.service}</h2>
              <p className="cv-copy service-text">{t.serviceText}</p>
            </section>
            <section className="cv-block cv-contact">
              <h2>{t.contact}</h2>
              <div>
                <p><a href="mailto:ruicheng@g.ecc.u-tokyo.ac.jp">ruicheng@g.ecc.u-tokyo.ac.jp</a></p>
                <p>ORCID: <a href="https://orcid.org/0000-0001-5336-9088">0000-0001-5336-9088</a></p>
              </div>
            </section>
          </div>
        </section>
      ) : null}

      <footer className="site-footer page-shell">
        <p>© {new Date().getFullYear()} Ruicheng Bao</p>
        <p>{t.lastUpdated}</p>
      </footer>
    </main>
  );
}
