/* Portfolio data. Edit this file to update the site — no code changes needed.
   Text fields accept { en, ko } for the language toggle. */
window.PORTFOLIO = {
  profile: {
    name: { en: "Moses Kim", ko: "김모세" },
    title: {
      en: "Reliability & Quality Engineer",
      ko: "신뢰성·품질 엔지니어",
    },
    summary: {
      en: "Physicist and reliability/quality engineer working on semiconductor reliability and quality systems. Focused on accelerated life testing, failure analysis, and data-driven quality, with a background in optical simulation and machine learning.",
      ko: "반도체 신뢰성과 품질 시스템을 다루는 물리학자이자 신뢰성·품질 엔지니어. 가속 수명 시험, 불량 분석, 데이터 기반 품질 관리와 광학 시뮬레이션·머신러닝 배경을 바탕으로 일합니다.",
    },
    location: { en: "Republic of Korea", ko: "대한민국" },
    email: "physix9179@gmail.com",
    links: [
      {
        label: "LinkedIn",
        url: "https://www.linkedin.com/in/moses-kim-300992271",
      },
      { label: "ORCID", url: "https://orcid.org/0009-0004-2859-0396" },
      {
        label: "Google Scholar",
        url: "https://scholar.google.com/citations?user=U4jPWAQAAAAJ&hl=ko",
      },
    ],
  },

  interests: [
    { en: "Semiconductor reliability", ko: "반도체 신뢰성" },
    { en: "Si capacitor", ko: "Si 커패시터" },
    { en: "Quality systems", ko: "품질 시스템" },
  ],

  skills: [
    {
      title: { en: "Quality", ko: "품질" },
      items: [
        "Quality management system: AS9100, ISO 9001",
        "Audit",
        "NCR / CAPA / SCAR",
      ],
    },
    {
      title: { en: "Reliability", ko: "신뢰성" },
      items: [
        "Reliability test design & analysis: HTOL, TC, THB, HAST, ESD/Latch-up",
        "Accelerated life data analysis: Weibull, Eyring",
        "Si capacitor reliability",
        "TDDB lifetime modeling: E-model / Power-law, SBD·PBD",
        "RF reliability: RF-HTOL",
        "Failure analysis (FA)",
      ],
    },
    {
      title: { en: "Semiconductor", ko: "반도체" },
      items: [
        "Semiconductor technology: Deep Trench Capacitor",
        "Colloidal quantum dot (CQD)",
        "Thin-film devices",
        "Distributed Bragg reflector (DBR)",
      ],
    },
    {
      title: { en: "Physics", ko: "물리" },
      items: [
        "Optical simulation",
        "Spectroscopic ellipsometry",
        "Transfer matrix method",
        "Effective medium theory",
      ],
    },
    {
      title: { en: "Software", ko: "소프트웨어" },
      items: [
        "Computer science",
        "Languages: Python, Java, JavaScript, Julia, HTML / CSS",
        "AI adoption & AI-assisted development",
      ],
    },
    {
      title: { en: "Data", ko: "데이터" },
      items: [
        "Yield analysis: EDS·FT, wafer map",
        "Machine learning: TensorFlow, PyTorch",
        "MATLAB",
      ],
    },
    {
      title: { en: "Laboratory", ko: "계측·분석" },
      items: [
        "SEM, Micro-PL, Micro-reflectance",
        "UV-Vis-NIR spectroscopy",
        "Reliability test equipment",
      ],
    },
  ],

  experience: [
    {
      company: "ELSPES",
      role: {
        en: "Quality Assurance PM · Reliability Engineer",
        ko: "품질보증 PM · 신뢰성 엔지니어",
      },
      period: "2025 – present",
      summary: {
        en: "Quality assurance for semiconductor components: reliability test design and analysis, quality management systems (AS9100, ISO 9001), supplier quality, and QA operations.",
        ko: "반도체 부품 품질보증: 신뢰성 시험 설계·분석, 품질 경영 시스템(AS9100, ISO 9001), 공급업체 품질, QA 운영.",
      },
    },
    {
      company: { en: "Mokpo National University", ko: "목포대학교" },
      role: { en: "Teaching Assistant, General Physics Laboratory", ko: "일반물리실험 조교" },
      period: "2023 – 2024",
      summary: {
        en: "Assisted lab sessions and guided students.",
        ko: "실험 수업 보조 및 학생 지도.",
      },
    },
    {
      company: "CN Plus",
      role: { en: "Construction Administrator (Wind Power)", ko: "시공 관리 (풍력)" },
      period: "2021 – 2022",
      summary: {
        en: "Quality inspection and field management for wind turbine installation.",
        ko: "풍력터빈 설치 현장의 품질 검사 및 현장 관리.",
      },
    },
    {
      company: { en: "Mathematics Academy", ko: "수학학원" },
      role: { en: "Math Instructor", ko: "수학 강사" },
      period: "2018 – 2020",
      summary: {
        en: "Taught math for elementary, middle, and high school students; academic counseling.",
        ko: "초·중·고등학생 수학 지도 및 입시 상담.",
      },
    },
  ],

  projects: [
    {
      title: { en: "RF-HTOL Research", ko: "RF-HTOL 연구" },
      period: "2025 – 2026",
      year: 2026,
      role: { en: "Reliability Engineer", ko: "신뢰성 엔지니어" },
      tech: ["RF-HTOL", "Reliability"],
      description: {
        en: "Reliability evaluation of RF devices using RF-HTOL. Set the test conditions and carried out failure analysis (FA).",
        ko: "RF 소자의 RF-HTOL 신뢰성 평가. 시험 조건 설정 및 불량 분석(FA) 수행.",
      },
    },
    {
      title: { en: "AS9100 Certification", ko: "AS9100 인증" },
      period: "2025",
      year: 2025,
      role: { en: "Quality Assurance PM", ko: "품질보증 PM" },
      tech: ["AS9100", "QMS"],
      description: {
        en: "Aerospace quality management system (AS9100) certification. Led the certification, handled the main audit response, and provided consulting to each department.",
        ko: "항공우주 품질 경영 시스템(AS9100) 인증. 인증 총괄, 메인 심사 대응, 각 부서 컨설팅 수행.",
      },
    },
    {
      title: {
        en: "Lunch Menu Recommendation Service",
        ko: "점심 메뉴 추천 서비스",
      },
      period: "2022",
      year: 2022,
      role: { en: "Project Manager · UI/UX · Frontend", ko: "PM · UI/UX · 프론트엔드" },
      tech: ["JavaScript", "HTML / CSS", "Web"],
      description: {
        en: "Recommends lunch menus based on the user's location, weather, and time of day.",
        ko: "사용자 위치, 날씨, 시간대를 기반으로 점심 메뉴를 추천하는 서비스.",
      },
    },
    {
      title: {
        en: "Fault Ratio Calculation Using Black-Box Video",
        ko: "블랙박스 영상 과실비율 산출",
      },
      period: "2022",
      year: 2022,
      role: { en: "UI/UX · Machine Learning", ko: "UI/UX · 머신러닝" },
      tech: ["Python", "YOLOv5", "PyTorch", "Computer Vision"],
      description: {
        en: "Estimates accident liability from vehicle black-box video using object detection.",
        ko: "차량 블랙박스 영상으로 사고 과실 비율을 산출하는 서비스.",
      },
    },
    {
      title: {
        en: "Big Data-based Aquaculture Productivity Improvement",
        ko: "빅데이터 기반 양식 생산성 향상",
      },
      period: "2023 – 2024",
      year: 2024,
      role: { en: "Student Researcher", ko: "학생 연구원" },
      tech: ["Python", "Machine Learning", "Data Analysis"],
      description: {
        en: "Research and development of efficient machine learning techniques for aquaculture productivity (Ministry of Oceans and Fisheries). Worked on an image analysis algorithm for flounder.",
        ko: "양식 생산성 향상을 위한 효율적 ML 기법 연구·개발 (해양수산부). 광어 이미지 분석 알고리즘 연구.",
      },
    },
    {
      title: {
        en: "Exciton-Polariton E-k Dispersion at Room Temperature",
        ko: "상온 엑시톤-폴라리톤 E-k 분산 연구",
      },
      period: "2023 – 2025",
      year: 2025,
      role: { en: "Student Researcher", ko: "학생 연구원" },
      tech: ["Python", "Optical simulation"],
      description: {
        en: "Superposition of exciton-polariton E-k dispersion in halide perovskite devices (National Research Foundation of Korea). Optical image analysis: RGB-to-XYZ color conversion by perovskite thickness under light-source intensity, and color charts.",
        ko: "할라이드 페로브스카이트 소자의 엑시톤-폴라리톤 E-k 분산 중첩 연구 (국립연구재단). 광학 이미지 분석: 광원 인텐시티에 비례한 페로브스카이트 두께별 색상 분석(RGB→XYZ 변환 계산, 컬러 차트 제작).",
      },
    },
  ],

  publications: [
    {
      authors: "Y. Kang, S. Lee, S. Kim, M. Kim",
      title:
        "Lifetime Prediction and Long-Term Reliability Assessment of 3D Trench Silicon Capacitors via Combined Accelerated Life Testing",
      venue: "Journal of Applied Reliability",
      year: 2026,
      doi: "10.33162/JAR.2026.9.26.3.313",
    },
    {
      authors: "J. H. Song, J. Kim, M. Kim, J. G. Park, J.-W. Kang",
      title:
        "Tunable Infrared Bragg Reflectors of Entirely Ligand-Engineered Lead Sulfide Quantum Dot Layers",
      venue: "The Journal of Physical Chemistry C",
      year: 2025,
      doi: "10.1021/acs.jpcc.5c06300",
    },
    {
      authors: "J. H. Song, M. Kim, J.-W. Kang",
      title:
        "Solution-Processed Distributed Bragg Reflectors Using Lead Sulfide and Zinc Oxide Nanocrystal Thin Films",
      venue: "Applied Science and Convergence Technology",
      year: 2025,
      doi: "10.5757/ASCT.2025.34.5.157",
    },
  ],

  education: [
    {
      degree: { en: "M.S. in Physics", ko: "물리학 석사" },
      school: { en: "Mokpo National University", ko: "목포대학교" },
      period: "2023 – 2025",
      detail: {
        en: "GPA 4.25/4.5 · Advisor: Jang-won Kang · Optical simulation",
        ko: "GPA 4.25/4.5 · 지도교수 강장원 · 광학 시뮬레이션",
      },
    },
    {
      degree: { en: "B.S. Physics · B.E. Energy Engineering", ko: "물리학 학사 · 에너지공학 학사" },
      school: { en: "Mokpo National University", ko: "목포대학교" },
      period: "2017 – 2023",
      detail: {
        en: "GPA 3.47/4.5 · Graduated Feb 2023",
        ko: "GPA 3.47/4.5 · 2023년 2월 졸업",
      },
    },
  ],

  ui: {
    en: {
      interests: "Interests",
      skills: "Skills",
      experience: "Experience",
      projects: "Projects",
      publications: "Publications",
      education: "Education",
      contact: "Contact",
      toggle: "한국어",
    },
    ko: {
      interests: "관심 분야",
      skills: "기술",
      experience: "경력",
      projects: "프로젝트",
      publications: "논문",
      education: "학력",
      contact: "연락처",
      toggle: "English",
    },
  },
};
