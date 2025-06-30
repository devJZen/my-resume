import type { ResumeData } from '../types/indexData'

export const resumeData: ResumeData = {
  personalInfo: {
    name: 'JuSeon Lee',
    jobTitle: 'Full-Stack Developer',
    age: 26,
    email: 'quasar.joo@gmail.com',
    github: 'https://github.com/devJZen',
    portfolio: 'https://devjzen.netlify.app/',
    profileImage: '/profile.jpg',
  },
  summary:
    'A developer proficient in Vue.js and modern frontend tech stacks, prioritizing user experience. Enjoys solving complex problems and learning new technologies.',
  experiences: [
    {
      id: 1,
      company: 'Mobile Factory Co., Ltd.',
      position: 'Full-Stack Developer',
      duration: '02.2025 - Present',
      description: [
        'Develop and maintain ERP system mobile applications using Flutter for cross-platform compatibility',
        'Migrating Spring Boot Legacy Projects',
        'Change LogFactory to Lombok Slf4j',
        'Change RedisFactory to LettuceFactory',
        'Change Gradle dependency',
        'Writing utility unit tests',
        'Visualizing Data Using AUIGrid',
        'Exchange rate API integration and data processing',
      ],
      skillsUsed: ['Java', 'JavaScript', 'HTML/CSS', 'Oracle', 'SVN'],
    },
    {
      id: 2,
      company: 'Actas Co., Ltd.',
      position: 'Full-Stack Developer',
      duration: '12.2022 - 01.2024',
      description: [
        'Participating in Spring Boot, Flutter-based ERP web/app conversion project',
        'Developing android/ios apps using Flutter',
        'Implementing push notifications using OneSignal',
        'Develop and visualize MES data using Pandas and Tkinter in Win application',
        'MES system maintenance and functional improvement',
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
      school: 'Kyungmin University',
      major: 'Information and Communication',
      degree: 'Associate Degree',
      duration: '03.2020 - 02.2023',
      details:
        "Served as the president of the 2021-2022 academic society, operated the major clubs 'CNC' and 'Blue Dream Tree', developed the open source project 'TomTom', and developed the graduation project 'Smart LED Implementation for the Deaf and Hard of Hearing'.",
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
      name: 'Portfolio website',
      duration: '06.2025',
      description:
        'A responsive website showcasing my personal work and tech stack. Developed with Vue.js and Vite, and deployed with Netlify.',
      skillsUsed: ['Vue.js', 'Vite', 'HTML/CSS', 'TypeScript', 'Netlify'],
      link: 'https://github.com/devJZen/my-resume',
    },
    {
      id: 2,
      name: 'MF Erp Web/App',
      duration: '02.2025 - 현재',
      description:
        'Flutter maintenance, Spring Boot legacy project migration, data visualization using AUIGrid, currency exchange rate API integration',
      skillsUsed: ['Flutter', 'Dart', 'Java', 'Spring Boot', 'Oracle', 'JavaScript', 'AUIGrid'],
    },
    {
      id: 3,
      name: 'Actas Hyundai/Kia ANDON Monitoring Conversion Project',
      duration: '09.2023 - 11.2023',
      description:
        'I developed an ANDON monitoring screen for the TRIM process using DevExpress. I used C#/C++ and MSSQL to query and visualize the data.',
      skillsUsed: ['C#/C++', 'DevExpress', 'MSSQL'],
    },
    {
      id: 4,
      name: 'Actas MES SME Manufacturing Advanced Project',
      duration: '04.2023 - 08.2023',
      description:
        'I mainly used C#/C++, MSSQL, and DevExpress to create screens to query and visualize data from MES. I have experience in data visualization using Python and Pandas.',
      skillsUsed: ['C#/C++', 'DevExpress', 'MSSQL', 'Python', 'Pandas', 'JMP'],
    },

    {
      id: 5,
      name: 'Actas ERP Mobile',
      duration: '02.2023 - 04.2023',
      description:
        'This is an Android/IOS supported application developed with Flutter. Flutter is used to communicate with the Web and OneSignal is used to implement push notifications. The public repository is attached.',
      skillsUsed: ['Flutter', 'Dart', 'OneSignal'],
      link: 'https://github.com/actaserp/actasmobile',
    },
    {
      id: 6,
      name: 'Actas ERP Web',
      duration: '12.2022 - 03.2023',
      description:
        'Developed using Java, Spring Boot, MSSQL, and Mybatis. Public repository attached.',
      skillsUsed: ['Java', 'Spring Boot', 'HTML/CSS', 'JavaScript', 'MSSQL', 'Mybatis'],
      link: 'https://github.com/actaserp/werp',
    },
    {
      id: 7,
      name: 'About voice phishing voice recognition labeling',
      duration: '11.2022',
      description:
        'I participated in a startup idea presentation contest with the theme of preventing voice phishing using AI. It was a time to think about the 4th industrial revolution caused by the developing AI, and it was an experience to think about business items targeting the country.',
      skillsUsed: ['PPT'],
      link: 'https://www.notion.so/211110bbec59807c9329e58d579c1ecf?source=copy_link',
    },
    {
      id: 8,
      name: 'Smart LED Implementation for the Deaf and Hard of Hearing',
      duration: '11.2022',
      description:
        'I created my graduation project on the topic of smart LED for the Deaf and Hard of Hearing. It was an experience that allowed me to develop with Arduino and come up with business ideas',
      skillsUsed: ['Arduino'],
      link: 'https://www.notion.so/211110bbec59807c9329e58d579c1ecf?source=copy_link',
    },
    {
      id: 9,
      name: 'Data analysis using OpenCV and yolo4',
      duration: '06.2021',
      description:
        'This is data analysis based on open source. It was developed with Andriod Studio, and the receipts were analyzed using Colab and Tensorboard. The results of the analysis were visualized using Sklearn.',
      skillsUsed: ['Colab', 'Tensorboard', 'OpenCV', 'yolo4'],
      link: 'https://witty-spider-ded.notion.site/URI-d7cc5ff168174dcb9420243099d8fda6',
    },
  ],
}
