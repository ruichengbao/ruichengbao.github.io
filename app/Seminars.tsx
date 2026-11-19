import "./seminars.css";

type Language = "en" | "zh";
type Bilingual<T = string> = { en: T; zh: T };
type Talk = {
  id: string;
  date: string; // YYYY-MM-DD, Beijing calendar date
  startsAt?: string; // ISO 8601 instant, including the UTC offset.
  title: Bilingual;
  speaker: Bilingual;
  affiliation: Bilingual;
  abstract: Bilingual<string[]>;
  bio: Bilingual;
  poster: { pdf: string; preview: string };
  meeting?: { platform: Bilingual; id: string; url: string };
  papers: { title: string; citation: string; url: string }[];
  partner?: { name: Bilingual; url: string };
  recordingUrl?: string;
};

const spyc = {
  name: { en: "Statistical Physics Youth Communications (SPYC)", zh: "统计物理青年通讯（SPYC）研讨会" },
  url: "https://shilingliang.com/seminars/",
};

// Add each new talk here. Past talks are archived by date; add recordingUrl when available.
const talks: Talk[] = [{
  id: "rt-01-jian-li",
  date: "2026-12-02",
  startsAt: "2026-12-02T16:00:00+08:00",
  title: { en: "What Does It Cost to Prepare a Quantum State?", zh: "制备一个量子态，要付出什么代价？" },
  speaker: { en: "Jian Li", zh: "李剑" },
  affiliation: { en: "Center for Theoretical Physics of the Polish Academy of Sciences", zh: "波兰科学院理论物理研究中心" },
  abstract: {
    en: [
      "How much does gate noise affect a quantum circuit’s output? We introduce a framework that approximates the cumulative effect of gate-dependent noise with a global depolarizing channel. Applying it to algorithmic cooling, we determine the optimal number of auxiliary qubits at a given noise level.",
      "We then ask how much memory a device needs to prepare quantum states one at a time when physical constraints limit how it can interact with each system. Using quantum resource theory, we show that under general conditions, sequential and collective preparation have the same asymptotic memory cost per output, even though their total costs can differ without bound. For energy-conserving unitaries, we also determine the optimal lifetime of a finite-dimensional quantum phase reference.",
      "Drawing on both projects, I will share how I approach choosing research questions and developing them with collaborators in the age of AI.",
    ],
    zh: [
      "量子门噪声会在多大程度上影响量子电路的输出？我们提出了一套框架，用一个全局退极化信道来近似不同量子门的噪声累积起来的效应。将它用于算法冷却，我们确定了给定噪声水平下辅助量子比特的最优数量。",
      "接下来我们问：如果物理约束限制了设备与每个系统相互作用的方式，要逐个制备量子态，设备需要多少存储资源？借助量子资源理论，我们证明，在一般条件下，逐个制备与集体制备的总存储代价之差可以任意大，但在渐近极限下，两种方式平均到每个输出的存储代价相同。对于保持能量的幺正操作，我们还确定了有限维量子相位参考的最优使用寿命。",
      "结合这两项工作，我也会分享在 AI 时代，我如何选择研究问题，又如何与合作者一道把问题做下去。",
    ],
  },
  bio: {
    en: "Jian Li is a PhD student at the Center for Theoretical Physics of the Polish Academy of Sciences, supervised by Patryk Lipka-Bartosik. Li studies quantum thermodynamics, quantum resource theory, and the foundations of quantum mechanics.",
    zh: "李剑是波兰科学院理论物理研究中心的博士研究生，师从 Patryk Lipka-Bartosik。主要研究方向包括量子热力学、量子资源理论和量子力学基础问题。",
  },
  poster: { pdf: "./rt-01-jian-li.pdf?v=1600", preview: "./rt-01-jian-li.webp?v=1600" },
  meeting: {
    platform: { en: "Tencent Meeting", zh: "腾讯会议" },
    id: "867-857-958", url: "https://meeting.tencent.com/dm/60TWV23RhwBk?meeting_open_type=1&source=1",
  },
  papers: [
    { title: "Exploring Noisy Quantum Thermodynamical Processes via the Depolarizing-Channel Approximation", citation: "Phys. Rev. Lett. 137, 190401 (2026)", url: "https://doi.org/10.1103/wg2x-z2vm" },
    { title: "The memory cost of sequential quantum state preparation", citation: "arXiv:2611.14652", url: "https://arxiv.org/abs/2611.14652" },
  ],
  partner: spyc,
}];

const series = {
  en: {
    label: "Online seminar series", title: "Research Trajectories",
    subtitle: "Hidden Stories in Science: How good questions are found and pursued",
    lead: "Where does a good research question come from? How does a rough idea become a concrete result? Papers and seminars usually show the finished work. Research Trajectories is about the part we rarely get to see: how researchers find a question worth pursuing and figure out how to answer it.",
    about: "About the series",
    format: "In each talk, an experienced researcher takes a piece of work they’re particularly proud of and traces its development. What first caught their attention? How did they decide the question was worth pursuing? Which attempts failed, and what finally made the result possible?",
    audience: "The series is especially for undergraduate and graduate students. Hearing how researchers make these decisions can help students find questions of their own and discover fields they might like to work in. For speakers, it’s a chance to draw new people into a field they care about; for researchers across disciplines, it’s a chance to learn how others approach problems.",
    invite: "Researchers from any discipline are welcome. If you’d like to share the story behind a piece of work, I’d love to hear from you.",
    contact: "Email Ruicheng Bao", partner: "Partner seminar",
    partnerNote: "When a topic connects with statistical physics, we sometimes hold a joint session with the ",
    partnerEnd: " seminar. Our inaugural talk is one such session.",
    upcoming: "Upcoming talks", archive: "Past talks & recordings", empty: "No upcoming talks have been announced.",
    date: "Date", timeTba: "Start time to be announced", online: "Online", cohost: "Joint session with",
    join: "Join meeting", poster: "Open bilingual poster (PDF)", posterAlt: "Bilingual poster for",
    details: "Abstract, speaker & papers", abstract: "Abstract", bio: "About the speaker", papers: "Related papers", recording: "Watch recording",
  },
  zh: {
    label: "线上研讨会系列", title: "研究轨迹",
    subtitle: "科学中少有人讲的故事：一个好问题是怎么找到、又是怎么做出来的？",
    lead: "一个值得研究的科学问题，最初是怎么想出来的？一个模糊的点子，又是怎么一步步变成扎实的研究结果的？论文和学术报告通常呈现的是完成后的成果。「研究轨迹」想讲的是很少被公开分享的那一部分：研究者如何找到一个值得做的问题，又怎样摸索出回答它的办法。",
    about: "关于这个系列",
    format: "每场报告邀请一位有研究经验的讲者，从自己特别满意的一项工作讲起，回顾它的来路：最初是什么引起了注意？怎么判断这个问题值得做？哪些尝试没走通，又是什么让研究有了突破？",
    audience: "系列主要面向本科生和研究生。希望这些具体的故事能帮同学们学着发现自己的问题，也让他们有机会了解、甚至走进一个原本陌生的领域。对讲者来说，这是为自己热爱的领域吸引新人的机会；对不同学科的研究者来说，这也是一次交流研究思路的机会。",
    invite: "无论来自哪个学科，只要愿意分享一项工作背后的故事，都欢迎与我联系。这个系列不设学科限制。",
    contact: "邮件联系我", partner: "友情研讨会",
    partnerNote: "遇到与统计物理相关的主题，我们有时会与", partnerEnd: "联合举办；本系列的首场报告就是一次联合活动。",
    upcoming: "报告预告", archive: "往期报告与回放", empty: "目前暂无已公布的报告预告。",
    date: "日期", timeTba: "具体时间待公布", online: "线上", cohost: "联合举办",
    join: "进入会议", poster: "查看双语海报（PDF）", posterAlt: "双语报告海报：",
    details: "报告摘要、讲者与论文", abstract: "报告摘要", bio: "报告人简介", papers: "相关论文", recording: "观看回放",
  },
};

function displayDate(date: string, language: Language) {
  return new Intl.DateTimeFormat(language === "zh" ? "zh-CN" : "en-GB", {
    year: "numeric", month: "long", day: "numeric", weekday: "long", timeZone: "UTC",
  }).format(new Date(date + "T12:00:00Z"));
}

const timeRegions = [
  { en: "East Asia", zh: "东亚", cities: [
    { en: "Beijing", zh: "北京", zone: "Asia/Shanghai" },
    { en: "Tokyo", zh: "东京", zone: "Asia/Tokyo" },
  ] },
  { en: "Central Europe", zh: "中欧", cities: [
    { en: "Warsaw / Berlin / Paris", zh: "华沙／柏林／巴黎", zone: "Europe/Warsaw" },
  ] },
  { en: "North America", zh: "北美", cities: [
    { en: "New York", zh: "纽约", zone: "America/New_York" },
    { en: "Chicago", zh: "芝加哥", zone: "America/Chicago" },
    { en: "Denver", zh: "丹佛", zone: "America/Denver" },
    { en: "Los Angeles", zh: "洛杉矶", zone: "America/Los_Angeles" },
  ] },
];

function LocalTimes({ start, date, language }: { start: string; date: string; language: Language }) {
  const instant = new Date(start);
  function clock(timeZone: string) {
    const day = new Intl.DateTimeFormat("sv-SE", { timeZone, year: "numeric", month: "2-digit", day: "2-digit" }).format(instant);
    const hour = new Intl.DateTimeFormat("en-GB", { timeZone, hour: "2-digit", minute: "2-digit", hourCycle: "h23" }).format(instant);
    return day === date ? hour : day + " " + hour;
  }
  return <dl className="rt-times" aria-label={language === "en" ? "Local start times" : "各地开场时间"}>
    {timeRegions.map(region => <div key={region.en}>
      <dt>{region[language]}</dt>
      <dd>{region.cities.map(city => <span key={city.zone}>{city[language]} <time dateTime={start}>{clock(city.zone)}</time></span>)}</dd>
    </div>)}
  </dl>;
}

function TalkEntry({ talk, language, past = false }: { talk: Talk; language: Language; past?: boolean }) {
  const t = series[language];
  return (
    <article className="rt-talk" id={talk.id} aria-labelledby={talk.id + "-title"}>
      <div className="rt-poster">
        <a href={talk.poster.pdf} target="_blank" rel="noreferrer" aria-label={t.poster + ": " + talk.title[language]}>
          <img src={talk.poster.preview} width="724" height="1024"
            alt={t.posterAlt + " " + talk.title[language]} loading={past ? "lazy" : "eager"} />
        </a>
      </div>
      <div className="rt-facts">
        <p className="rt-date"><time dateTime={talk.date}>{displayDate(talk.date, language)}</time></p>
        <h3 id={talk.id + "-title"}>{talk.title[language]}</h3>
        <p className="rt-speaker">{talk.speaker[language]} <span lang={language === "en" ? "zh-CN" : "en"}>{talk.speaker[language === "en" ? "zh" : "en"]}</span></p>
        <p className="rt-affiliation">{talk.affiliation[language]}</p>
        {talk.startsAt && <LocalTimes start={talk.startsAt} date={talk.date} language={language} />}
        <div className="rt-logistics">
          {talk.meeting && <p>{talk.meeting.platform[language]} <span aria-hidden="true">·</span> {talk.meeting.id}</p>}
          {!past && !talk.startsAt && <p>{t.timeTba}</p>}
          {talk.partner && <p>{t.cohost}{language === "zh" ? "：" : " "}<a href={talk.partner.url}>{talk.partner.name[language]}</a></p>}
        </div>
        <div className="rt-actions">
          {!past && talk.meeting && <a className="rt-primary-link" href={talk.meeting.url}>{t.join}</a>}
          {talk.recordingUrl && <a className="rt-primary-link" href={talk.recordingUrl}>{t.recording}</a>}
          <a href={talk.poster.pdf} target="_blank" rel="noreferrer">{t.poster}</a>
        </div>
      </div>
      <details className="rt-details">
        <summary>{t.details}</summary>
        <div className="rt-details-body">
          <section><h4>{t.abstract}</h4>{talk.abstract[language].map(p => <p key={p}>{p}</p>)}</section>
          <section><h4>{t.bio}</h4><p>{talk.bio[language]}</p></section>
          {talk.papers.length > 0 && <section><h4>{t.papers}</h4>
            <ul>{talk.papers.map(paper => <li key={paper.url}><a href={paper.url} lang="en">{paper.title}</a><small>{paper.citation}</small></li>)}</ul>
          </section>}
        </div>
      </details>
    </article>
  );
}

export default function Seminars({ language }: { language: Language }) {
  const t = series[language];
  // The talk remains upcoming everywhere in the world until its Beijing date has ended.
  const today = new Intl.DateTimeFormat("sv-SE", { timeZone: "Asia/Shanghai", year: "numeric", month: "2-digit", day: "2-digit" }).format(new Date());
  const sorted = [...talks].sort((a, b) => a.date.localeCompare(b.date));
  const upcoming = sorted.filter(talk => talk.date >= today);
  const past = sorted.filter(talk => talk.date < today).reverse();
  const years = [...new Set(past.map(talk => talk.date.slice(0, 4)))];

  return (
    <div className="rt-page page-shell" lang={language === "en" ? "en" : "zh-CN"}>
      <header className="rt-masthead">
        <p className="rt-label">{t.label}{language === "zh" && <span lang="en"> / Research Trajectories</span>}</p>
        <h1>{t.title}</h1>
        <p className="rt-subtitle">{t.subtitle}</p>
        <p className="rt-lead">{t.lead}</p>
      </header>
      <section className="rt-program" aria-labelledby="rt-upcoming">
        <h2 id="rt-upcoming" className="rt-section-title">{t.upcoming}</h2>
        {upcoming.length ? upcoming.map(talk => <TalkEntry key={talk.id} talk={talk} language={language} />) : <p>{t.empty}</p>}
      </section>
      {years.length > 0 && <section className="rt-program" aria-labelledby="rt-archive">
        <h2 id="rt-archive" className="rt-section-title">{t.archive}</h2>
        {years.map(year => <div key={year}>
          <p className="rt-archive-year">{year}</p>
          {past.filter(talk => talk.date.startsWith(year)).map(talk => <TalkEntry key={talk.id} talk={talk} language={language} past />)}
        </div>)}
      </section>}
      <section className="rt-essay" aria-labelledby="rt-about">
        <h2 id="rt-about" className="rt-section-title">{t.about}</h2>
        <div>
          <p>{t.format}</p><p>{t.audience}</p>
          <p>{t.invite} <a href="mailto:ruicheng@g.ecc.u-tokyo.ac.jp">{t.contact}</a></p>
        </div>
      </section>
      <aside className="rt-essay rt-partner" aria-labelledby="rt-partner">
        <h2 id="rt-partner" className="rt-section-title">{t.partner}</h2>
        <p>{t.partnerNote}<a href={spyc.url}>{spyc.name[language]}</a>{t.partnerEnd}</p>
      </aside>
    </div>
  );
}
