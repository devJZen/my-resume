<script setup lang="ts">
import { useLanguageStore } from './stores/language' // 언어 스토어 임포트
import { storeToRefs } from 'pinia' // Pinia ref 언래핑

// 각 섹션 컴포넌트 불러오기
import PersonalInfo from './components/resume/PersonalInfo.vue'
import SummarySection from './components/resume/SummarySection.vue'
import ExperienceSection from './components/resume/ExperienceSection.vue'
import EducationSection from './components/resume/EducationSection.vue'
import SkillsSection from './components/resume/SkillsSection.vue'
import SkillFrequencyChart from './components/resume/SkillFrequencyChart.vue'
import ProjectSection from './components/resume/ProjectSection.vue'

const languageStore = useLanguageStore()
const { resumeData } = storeToRefs(languageStore) // resumeData를 반응형으로 가져옴

// 현재 언어를 설정하는 함수
const setLang = (lang: 'ko' | 'en') => {
  languageStore.setLanguage(lang)
}
</script>

<template>
  <div id="resume-container">
    <PersonalInfo :personalInfo="resumeData.personalInfo" />

    <select v-model="languageStore.currentLanguage" class="language-dropdown">
      <option value="ko">한국어</option>
      <option value="en">English</option>
    </select>

    <main class="resume-main-content">
      <SummarySection :summary="resumeData.summary" />
      <ExperienceSection :experiences="resumeData.experiences" />
      <ProjectSection
        :projects="resumeData.projects"
        v-if="resumeData.projects && resumeData.projects.length"
      />
      <SkillsSection :skills="resumeData.skills" />
      <SkillFrequencyChart />

      <EducationSection :education="resumeData.education" />
    </main>

    <footer class="resume-footer">
      <p>&copy; 2025 {{ resumeData.personalInfo.name }}. All rights reserved.</p>
    </footer>
  </div>
</template>

<style>
/* src/App.vue 또는 src/style.css 에 포함 */
#app {
  font-family: 'Arial', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
  margin: 0;
  padding: 0;
  background-color: #f4f7f6;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start; /* 상단 정렬 */
  padding: 20px 0; /* 상하 여백 추가 */
  box-sizing: border-box;
}

#resume-container {
  min-width: 900px;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.08);
  border-radius: 8px;
  overflow: hidden;
  margin: 0 20px; /* 좌우 여백 */
  padding: 30px 40px;
  box-sizing: border-box;
}

.resume-main-content section {
  margin-bottom: 40px;
  padding-bottom: 20px;
  border-bottom: 1px solid #eee;
}

.resume-main-content section:last-of-type {
  border-bottom: none;
  margin-bottom: 0;
  padding-bottom: 0;
}

.resume-footer {
  text-align: center;
  margin-top: 40px;
  padding-top: 20px;
  border-top: 1px solid #eee;
  color: #777;
  font-size: 0.85em;
}
.language-dropdown {
  padding: 8px 12px;
  border: 1px solid #ced4da;
  border-radius: 5px;
  font-size: 0.9em;
  background-color: white;
  cursor: pointer;
  margin-bottom: 20px;
}

/* 기본 링크 스타일 */
a {
  color: #007bff;
  text-decoration: none;
}
</style>
