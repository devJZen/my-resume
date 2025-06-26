// src/stores/language.ts
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { resumeData as koResumeData } from '../data/ko-resumeData'
import { resumeData as enResumeData } from '../data/en-resumeData'
import type { ResumeData } from '../types/indexData'
import type { SectionTitles } from '../types/indexData'

type Language = 'ko' | 'en'

export const useLanguageStore = defineStore('language', () => {
  const currentLanguage = ref<Language>('ko') // 기본 언어 설정

  const setLanguage = (lang: Language) => {
    currentLanguage.value = lang
  }

  const resumeData = computed<ResumeData>(() => {
    if (currentLanguage.value === 'en') {
      return enResumeData
    }
    return koResumeData
  })

  // 언어별 섹션 제목 정의 (여기에 추가)
  const sectionTitles = computed<SectionTitles>(() => {
    if (currentLanguage.value === 'en') {
      return {
        summary: 'About Me', // 영어 요약 제목
        experience: 'Experience',
        education: 'Education',
        skills: 'Skills',
        skillFrequency: 'Skill Usage Frequency',
        projects: 'Projects',
      }
    }
    return {
      summary: '노력하는 개발자', // 한국어 요약 제목
      experience: '경력 기술서',
      education: '학력 사항',
      skills: '기술 스택',
      skillFrequency: '어떤 스킬을 자주 사용했을까?',
      projects: '경험 프로젝트',
    }
  })

  return {
    currentLanguage,
    setLanguage,
    resumeData,
    sectionTitles,
  }
})
