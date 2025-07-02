import type { ResumeData } from '../types/indexData'

export const resumeData: ResumeData = {
  personalInfo: {
    name: '이주선',
    jobTitle: 'Full Stack Developer',
    age: 26,
    email: 'quasar.joo@gmail.com',
    github: 'https://github.com/devJZen',
    portfolio: 'https://devjzen.netlify.app/',
    profileImage: '/profile.jpg',
  },
  summary:
    'Vue.js와 금융, 데이터에 관심이 많습니다. 문제를 해결하고 새로운 기술을 배우는 것을 즐깁니다.',
  experiences: [
    {
      id: 1,
      company: 'Mobile Factory',
      position: '풀스텍 개발자',
      duration: '2025.02 - 현재',
      description: [
        'object-c로 작성된 Flutter 기반 웹뷰 프로젝트 유지보수',
        'Spring Boot+Java+Groovy+Gradle 조합의 레거시 프로젝트 마이그레이션',
        '생성자 주입 방식의 LogFactory를 롬복 Slf4j로 변경',
        'RedisFactory를 LettuceFactory로 변경',
        'Gradle 종속성을 한꺼번에 관리할 수 있도록 변경',
        'Junit5를 사용하여 유틸 단위테스트 작성',
        'AUIGrid를 사용하여 데이터 시각화',
        '실시간 환율 Open API 연동 및 데이터 처리',
        '배치관리 API 개발 및 쿼리 최적화',
      ],
      skillsUsed: ['Java', 'JavaScript', 'HTML/CSS', 'Oracle', 'SVN'],
    },
    {
      id: 2,
      company: 'Actas',
      position: '풀스텍 개발자',
      duration: '2022.12 - 2024.01',
      description: [
        'Spring Boot+Java, Flutter 조합의 ERP 웹/앱 전환 사업 참여',
        'Swift를 사용한 ios 앱 개발 및 배포',
        'OneSignal을 사용한 푸시 알림 기능 구현',
        'MES 데이터를 Pandas, Tkinter를 사용하여 Win 애플리케이션 개발 및 시각화',
        'MES 시스템 유지보수 및 DevExpress를 사용한 데이터 시각화, 프로시저 작성으로 쿼리 최적화',
        'MES AI 고도화 사업을 위해 JMP CDAJ-L1에 준하는 기업실무과정 수강 ',
      ],
      skillsUsed: [
        'Java',
        'JavaScript',
        'HTML/CSS',
        'Flutter',
        'MSSQL',
        'C#/C++',
        'DevExpress',
        'Python',
        'Pandas',
        'Git',
      ],
    },
  ],
  education: [
    {
      id: 1,
      school: '경민대학교',
      major: '정보통신과',
      degree: '전문학사',
      duration: '2020.03 - 2023.02',
      details:
        "2021-2022 학회장 역임, \n전공동아리 'CNC', '푸른꿈나무' 운영, \n오픈소스를 이용한 영수증 분석 프로젝트 'TomTom' 개발, \n졸업 프로젝트 '청각장애인을 위한 스마트 LED' 개발",
    },
  ],
  skills: {
    languages: [
      'Java',
      'JavaScript',
      'TypeScript',
      'HTML/CSS',
      'C#/C++',
      'Python',
      'MSSQL',
      'Oracle',
      'Arduino',
      'Dart',
    ],
    frameworks: ['Vue.js', 'Flutter', 'Spring Boot'],
    tools: ['Git', 'SVN', 'JMP', 'Colab', 'Netlify'],
    etc: ['Pandas', 'DevExpress', 'OneSignal', 'AUIGrid', 'Tensorboard', 'yolo4', 'OpenCV'],
  },
  projects: [
    {
      id: 1,
      name: 'DevPrep',
      duration: '2025.07',
      description:
        '개발 공부를 위해 제작한 웹사이트 입니다. 관심사를 질문과 답변으로 기억할 수 있게 만들었습니다. Vue.js와 Vite를 사용하여 개발하였으며, Netlify에 배포했습니다.',
      skillsUsed: ['Vue.js', 'Vite', 'HTML/CSS', 'TypeScript', 'Netlify'],
      link: 'https://devwithme.netlify.app/',
    },
    {
      id: 2,
      name: 'MF Erp Web/App',
      duration: '2025.02 - 현재',
      description:
        'Flutter 유지보수, Spring Boot 레거시 프로젝트 마이그레이션, AUIGrid를 사용한 데이터 시각화, 환율 API 연동',
      skillsUsed: ['Flutter', 'Dart', 'Java', 'Spring Boot', 'Oracle', 'JavaScript', 'AUIGrid'],
    },
    {
      id: 3,
      name: 'Actas 현대/기아 ANDON 모니터링 전환 사업',
      duration: '2023.09 - 2023.11',
      description:
        'DevExpress를 이용하여 TRIM 공정의 ANDON 모니터링 화면을 개발했습니다. C#/C++와 MSSQL을 사용하여 데이터를 조회하고 시각화하는 작업을 했습니다.',
      skillsUsed: ['C#/C++', 'DevExpress', 'MSSQL'],
    },
    {
      id: 4,
      name: 'Actas MES 중소제조업 고도화 프로젝트',
      duration: '2023.04 - 2023.08',
      description:
        '주로 C#/C++와 MSSQL, DevExpress를 사용하여 MES의 데이터를 조회하고 시각화하는 화면을 만들었습니다. Python과 Pandas를 사용하여 데이터 시각화 경험이 있습니다. 데이터 시각화를 위해 JMP를 학습했습니다.',
      skillsUsed: ['C#/C++', 'DevExpress', 'MSSQL', 'Python', 'Pandas', 'JMP'],
    },

    {
      id: 5,
      name: 'Actas ERP Mobile',
      duration: '2023.02 - 2023.04',
      description:
        'Flutter로 개발된 Android/IOS 지원 어플리케이션 입니다. Flutter를 이용하여 Web과 통신, OneSignal을 이용하여 push 알림을 구현했습니다. 공개 repository를 첨부합니다.',
      skillsUsed: ['Flutter', 'Dart', 'OneSignal'],
      link: 'https://github.com/actaserp/actasmobile',
    },
    {
      id: 6,
      name: 'Actas ERP Web',
      duration: '2022.12 - 2023.03',
      description:
        'Java, Spring Boot, MSSQL, Mybatis를 사용하여 개발했습니다. 공개 repository를 첨부합니다.',
      skillsUsed: ['Java', 'Spring Boot', 'HTML/CSS', 'JavaScript', 'MSSQL', 'Mybatis'],
      link: 'https://github.com/actaserp/werp',
    },
    {
      id: 7,
      name: '보이스피싱 성문 인식 라벨링에 대하여',
      duration: '2022.11',
      description:
        'AI를 활용한 보이스 피싱 방지라는 주제로 창업 아이디어 발표 대회에 출전했습니다. 발전하고 있는 AI로 인한 4차 산업 혁명에 대해 고민할 수 있는 시간이었으며, 국가를 상대로 사업 아이템을 구상할 수 있는 경험이었습니다.',
      skillsUsed: ['PPT'],
      link: 'https://www.notion.so/211110bbec59807c9329e58d579c1ecf?source=copy_link',
    },
    {
      id: 8,
      name: '청각장애인을 위한 스마트 LED',
      duration: '2022.11',
      description:
        '청각장애인을 위한 스마트 LED라는 주제로 졸업작품을 만들었습니다. 아두이노로 개발하고 사업 아이템을 구상할 수 있는 경험이었습니다.',
      skillsUsed: ['Arduino'],
      link: 'https://www.notion.so/211110bbec59807c9329e58d579c1ecf?source=copy_link',
    },
    {
      id: 9,
      name: 'OpenCV와 yolo4를 이용한 데이터 분석',
      duration: '2021.06',
      description:
        '오픈소스를 바탕으로 한 데이터 분석 입니다. Andriod Studio로 개발하고, 영수증은 Colab과 Tensorboard를 이용하여 분석했습니다. Sklearn을 사용하여 분석한 결과를 시각화했습니다.',
      skillsUsed: ['Colab', 'Tensorboard', 'OpenCV', 'yolo4'],
      link: 'https://witty-spider-ded.notion.site/URI-d7cc5ff168174dcb9420243099d8fda6',
    },
  ],
}
