<template>
  <section class="education-section">
    <SectionTitle :title="sectionTitles.education" />

    <div class="education-list">
      <div v-for="edu in education" :key="edu.id" class="education-item">
        <h3 class="school-name">{{ edu.school }}</h3>
        <p class="major-degree">{{ edu.major }} / {{ edu.degree }}</p>
        <p class="education-duration">{{ edu.duration }}</p>
        <p v-if="edu.details" class="education-details">{{ edu.details }}</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import SectionTitle from '../common/SectionTitle.vue' // SectionTitle 컴포넌트 불러오기
import type { Education } from '../../types/indexData' // 정의된 Education 타입 불러오기
import { useLanguageStore } from '../../stores/language' // 언어 스토어 임포트
import { storeToRefs } from 'pinia'
const languageStore = useLanguageStore()
const { sectionTitles } = storeToRefs(languageStore)

// Props 타입을 정의하고 적용합니다.
interface EducationSectionProps {
  education: Education[] // Education 타입의 배열을 받습니다.
}

const props = defineProps<EducationSectionProps>()
</script>

<style scoped>
.education-list {
  display: flex;
  flex-direction: column;
  gap: 18px; /* 각 학력 항목 간격 */
}

.education-item {
  background-color: #fcfcfc;
  border: 1px solid #eee;
  border-left: 5px solid #007bff; /* 포인트 라인 */
  border-radius: 8px;
  padding: 20px 25px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.04);
}

.school-name {
  font-size: 1.4em;
  color: #2c3e50;
  margin-top: 0;
  margin-bottom: 5px;
  font-weight: bold;
}

.major-degree {
  font-size: 1.1em;
  color: #555;
  margin-bottom: 5px;
}

.education-duration {
  font-size: 0.95em;
  color: #777;
  margin-bottom: 10px;
}

.education-details {
  font-size: 0.95em;
  color: #666;
  line-height: 1.6;
  margin-bottom: 0;
  white-space: pre-line; /* 줄바꿈 유지 */
}

/* 모바일 반응형 조정 */
@media (max-width: 768px) {
  .education-item {
    padding: 15px 20px;
  }
  .school-name {
    font-size: 1.2em;
  }
  .major-degree {
    font-size: 1em;
  }
}
</style>
