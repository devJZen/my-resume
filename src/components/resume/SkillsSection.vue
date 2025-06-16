<template>
  <section class="skills-section">
    <SectionTitle title="기술 스택" />

    <div class="skills-grid">
      <div v-if="skills.languages && skills.languages.length" class="skill-category">
        <h3>언어</h3>
        <ul class="skill-list">
          <li v-for="skill in skills.languages" :key="skill">{{ skill }}</li>
        </ul>
      </div>

      <div v-if="skills.frameworks && skills.frameworks.length" class="skill-category">
        <h3>프레임워크 / 라이브러리</h3>
        <ul class="skill-list">
          <li v-for="skill in skills.frameworks" :key="skill">{{ skill }}</li>
        </ul>
      </div>

      <div v-if="skills.tools && skills.tools.length" class="skill-category">
        <h3>툴 & 환경</h3>
        <ul class="skill-list">
          <li v-for="skill in skills.tools" :key="skill">{{ skill }}</li>
        </ul>
      </div>

      <div v-if="skills.etc && skills.etc.length" class="skill-category">
        <h3>기타</h3>
        <ul class="skill-list">
          <li v-for="skill in skills.etc" :key="skill">{{ skill }}</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import SectionTitle from '../common/SectionTitle.vue'
import type { Skills } from '../../types/indexData' // Skills 타입 불러오기

interface SkillsSectionProps {
  skills: Skills
}

const props = defineProps<SkillsSectionProps>()
</script>

<style scoped>
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); /* 반응형 그리드 */
  gap: 25px; /* 그리드 간격 */
  justify-items: center; /* 그리드 아이템 중앙 정렬 */
  padding: 0 20px; /* 좌우 여백 */
}

.skill-category {
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  width: 100%; /* 그리드 아이템 내에서 가득 채우기 */
  box-sizing: border-box; /* 패딩이 너비에 포함되도록 */
  letter-spacing: -0.05em;
}

.skill-category h3 {
  font-size: 1.3em;
  color: #2c3e50;
  margin-top: 0;
  margin-bottom: 15px;
  padding-top: 8px;
  padding-bottom: 8px;
  border-bottom: 1px solid #eee;
  text-align: center;
  letter-spacing: -0.03em;
}

.skill-list {
  list-style-type: none; /* 기본 리스트 마커 제거 */
  padding: 0;
  margin: 0;
  display: flex; /* 가로 정렬을 위해 flexbox 사용 */
  flex-wrap: wrap; /* 내용이 넘치면 다음 줄로 */
  justify-content: center; /* 아이템 중앙 정렬 */
}

.skill-list li {
  background-color: #e2f0ff; /* 스킬 태그 배경색 */
  color: #0056b3; /* 스킬 태그 글자색 */
  padding: 8px 15px;
  border-radius: 20px; /* 둥근 모양 */
  margin: 5px; /* 스킬 태그 간 간격 */
  font-size: 0.9em;
  white-space: nowrap; /* 텍스트가 한 줄에 유지되도록 */
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
}

/* 모바일 화면을 위한 반응형 조정 */
@media (max-width: 768px) {
  .skills-grid {
    grid-template-columns: 1fr; /* 작은 화면에서는 한 줄에 하나씩 */
  }
}
</style>
