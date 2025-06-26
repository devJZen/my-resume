export type SectionTitles = {
  summary: string
  experience: string
  education: string
  skills: string
  skillFrequency: string
  projects: string
}

export interface PersonalInfo {
  name: string
  age: number
  jobTitle: string
  email: string
  phone: string
  github: string
  portfolio: string
  profileImage: string
}

export interface Experience {
  id: number
  company: string
  position: string
  duration: string
  description: string[]
  skillsUsed?: string[] //선택적: 사용한 기술 스택
}

export interface Education {
  id: number
  school: string
  major: string
  degree: string
  duration: string
  details?: string // 추가 정보 (예: 졸업 프로젝트, 주요 과목 등)
}

export interface Skills {
  languages: string[]
  frameworks: string[]
  tools: string[]
  etc: string[]
}

export interface Project {
  id: number
  name: string
  duration: string
  description: string
  skillsUsed: string[]
  link?: string //필수 아님
}

export interface ResumeData {
  personalInfo: PersonalInfo
  summary: string
  experiences: Experience[]
  education: Education[]
  skills: Skills
  projects: Project[]
  // 기타 섹션은 필요에 따라 추가
}
