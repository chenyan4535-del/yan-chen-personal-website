const i18n = {
  common: {
    brand_name: { en: "Yan Chen", zh: "陈研" },
    nav_home: { en: "Home", zh: "首页" },
    nav_about: { en: "About", zh: "关于" },
    nav_publications: { en: "Publications", zh: "成果" },
    nav_engagement: { en: "Engagement", zh: "学术活动" },
    nav_gallery: { en: "Gallery", zh: "图集" },
    footer_text: { en: "© 2026 Yan Chen · Personal Academic Website", zh: "© 2026 陈研 · 个人学术网站" }
  },
  index: {
    hero_kicker: { en: "Physical Oceanography · Coastal Hazards", zh: "物理海洋学 · 沿海灾害" },
    hero_title: { en: "Yan Chen Personal Website", zh: "陈研个人网站" },
    hero_lead: { en: "Research focuses on coastal hazard modeling, extreme sea-level amplification, storm surge, and meteotsunami climatology.", zh: "研究聚焦于沿海灾害数值模拟、极端海平面放大机制、风暴潮与气象海啸气候学。" },
    hero_btn_primary: { en: "View Publications", zh: "查看成果" },
    hero_btn_secondary: { en: "Contact", zh: "联系我" },
    hero_email_label: { en: "Email:", zh: "邮箱：" },
    hero_chip_1: { en: "Ocean Modeling", zh: "海洋数值模拟" },
    hero_chip_2: { en: "Storm Surge", zh: "风暴潮" },
    hero_chip_3: { en: "Meteotsunami", zh: "气象海啸" },
    hero_badge: { en: "Yan Chen", zh: "陈研" }
  },
  about: {
    kicker: { en: "About", zh: "关于" },
    title: { en: "About Me", zh: "关于我" },
    lead: { en: "I focus on physical oceanography and coastal hazards, with emphasis on storm surge, extreme sea level, and meteotsunami diagnostics.", zh: "我关注物理海洋与沿海灾害过程，重点研究风暴潮、极端海平面与气象海啸识别诊断。" },
    section_title: { en: "Academic and Technical Focus", zh: "学术与技术聚焦" },
    focus_1: { en: "Current focus: meteotsunamis, coastal flood, storm surge, and extreme sea-level amplification", zh: "当前重点：气象海啸、沿海洪涝、风暴潮与极端海平面放大" },
    focus_2: { en: "M.S. in Physical Oceanography, UCAS (2022-2025), GPA 3.8/4.0", zh: "中国科学院大学物理海洋学硕士（2022-2025），GPA 3.8/4.0" },
    focus_3: { en: "B.A. in Groundwater Science and Engineering, CUGB (2018-2022)", zh: "中国地质大学（北京）地下水科学与工程本科（2018-2022）" },
    focus_4: { en: "Modeling and analysis tools: SCHISM, POM, WWM-III, Python, MATLAB, Fortran", zh: "模型与分析工具：SCHISM、POM、WWM-III、Python、MATLAB、Fortran" },
    focus_5: { en: "Language scores: CET-6 551, IELTS 6.5", zh: "语言成绩：英语六级 551，雅思 6.5" },
    interests_title: { en: "Research Interests", zh: "研究兴趣" },
    interest_1: { en: "Flood and inundation", zh: "洪涝与淹没过程" },
    interest_2: { en: "Storm surge and ocean wave", zh: "风暴潮与海浪" },
    interest_3: { en: "Hydrogeology and groundwater", zh: "水文地质与地下水" },
    interest_4: { en: "Meteotsunamis", zh: "气象海啸" },
    model_title: { en: "Modeling Visuals", zh: "模型相关图像" },
    awards_title: { en: "Awards and Honors", zh: "奖项与荣誉" },
    award_1: { en: "Merit Student of UCAS (2025)", zh: "中国科学院大学三好学生（2025）" },
    award_2: { en: "National Scholarship for Graduate Students (UCAS, 2024)", zh: "研究生国家奖学金（国科大，2024）" },
    award_3: { en: "Merit Student of UCAS (2023)", zh: "中国科学院大学三好学生（2023）" },
    award_4: { en: "Excellent League Cadre of UCAS (2023)", zh: "中国科学院大学优秀团干部（2023）" },
    award_5: { en: "Academic Scholarship, CUGB (2019)", zh: "中国地质大学（北京）学业奖学金（2019）" }
  },
  publications: {
    kicker: { en: "Research Output", zh: "研究产出" },
    title: { en: "Publications", zh: "论文成果" },
    p1_title: { en: "Tide-surge interactions in Northern South China Sea: a comparative study of Barijat and Mangkhut (2018)", zh: "北南海潮汐-风暴增水相互作用：Barijat 与 Mangkhut（2018）对比研究" },
    p1_meta: { en: "Frontiers in Marine Science (2024) · Published", zh: "Frontiers in Marine Science（2024）· 已发表" },
    p2_title: { en: "Diverse response of extreme sea levels amplification and vulnerable deltas/islands by the end of the 21st century", zh: "至21世纪末脆弱三角洲/海岛极端海平面放大的差异化响应" },
    p2_meta: { en: "Advances in Climate Change Research · Under Review", zh: "Advances in Climate Change Research · 审稿中" },
    p3_title: { en: "Occurrences of meteotsunamis in Hong Kong area", zh: "香港地区气象海啸事件研究" },
    p3_meta: { en: "Natural Hazards · Submitted", zh: "Natural Hazards · 已投稿" }
  },
  engagement: {
    eng_kicker: { en: "Scientific Communication", zh: "学术交流" },
    eng_title: { en: "Engagement", zh: "学术活动" },
    eng_conf: { en: "Conference Presentations", zh: "会议展示" },
    eng_service: { en: "Service", zh: "志愿服务" }
  },
  gallery: {
    gal_kicker: { en: "Visual Archive", zh: "视觉档案" },
    gal_title: { en: "Gallery", zh: "图集" }
  }
};

function getLanguage() { return localStorage.getItem("site_lang") || "en"; }
function setLanguage(lang) {
  localStorage.setItem("site_lang", lang);
  document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
}
function applyTranslations() {
  const lang = getLanguage();
  const page = document.body.dataset.page || "index";
  const dict = { ...i18n.common, ...(i18n[page] || {}) };
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    if (dict[key] && dict[key][lang]) el.textContent = dict[key][lang];
  });
  const toggle = document.getElementById("language-toggle");
  if (toggle) toggle.textContent = lang === "en" ? "中文" : "EN";
}
document.addEventListener("DOMContentLoaded", () => {
  setLanguage(getLanguage());
  applyTranslations();
  const toggle = document.getElementById("language-toggle");
  if (!toggle) return;
  toggle.addEventListener("click", () => {
    setLanguage(getLanguage() === "en" ? "zh" : "en");
    applyTranslations();
  });
});
