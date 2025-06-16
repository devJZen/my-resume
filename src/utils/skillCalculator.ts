import type { ResumeData } from '../types/indexData'

interface SkillFrequency {
  [key: string]: number
}

export function calculateSkillFrequencies(resumeData: ResumeData): SkillFrequency {
  const skillCounts: SkillFrequency = {}

  // 프로젝트의 skillsUsed 집계
  resumeData.projects.forEach((project) => {
    project.skillsUsed?.forEach((skill) => {
      const normalizedSkill = skill.trim()
      skillCounts[normalizedSkill] = (skillCounts[normalizedSkill] || 0) + 1
    })
  })

  return skillCounts
}

// 이 함수는 단순히 빈도수를 반환합니다. 필요에 따라 상위 N개 기술만 반환하도록 수정 가능
export function getTopNSkills(
  skillFrequencies: SkillFrequency,
  n: number,
): { skill: string; count: number }[] {
  return Object.entries(skillFrequencies)
    .map(([skill, count]) => ({ skill, count }))
    .sort((a, b) => b.count - a.count) // 빈도수 내림차순 정렬
    .slice(0, n) // 상위 N개만 선택
}
