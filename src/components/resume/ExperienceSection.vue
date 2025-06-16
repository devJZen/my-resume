<template>
  <section class="experience-section">
    <SectionTitle title="경력 기술서" />
    <div v-for="exp in experiences" :key="exp.id" class="experience-item">
      <h3 class="company-name">{{ exp.company }}</h3>
      <p class="position-duration">
        <span class="position">{{ exp.position }}</span> |
        <span class="duration">{{ exp.duration }}</span>
      </p>
      <ul class="responsibilities-list">
        <li v-for="(desc, index) in exp.description" :key="index">{{ desc }}</li>
      </ul>

      <div v-if="exp.skillsUsed && exp.skillsUsed.length" class="project-skills">
        <h4>주요 기술:</h4>
        <ul class="skill-tags">
          <li v-for="skill in exp.skillsUsed" :key="skill">{{ skill }}</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import SectionTitle from '../common/SectionTitle.vue'
import type { Experience } from '../../types/indexData'

interface ExperienceSectionProps {
  experiences: Experience[]
}

const props = defineProps<ExperienceSectionProps>()
</script>

<style scoped>
.experience-item {
  margin-bottom: 25px;
  padding: 20px; /* 패딩 추가 */
  border: 1px solid #eee; /* 테두리 추가 */
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05); /* 그림자 추가 */
  transition:
    transform 0.2s ease-in-out,
    box-shadow 0.2s ease-in-out; /* 트랜지션 추가 */
}

.experience-item:last-child {
  margin-bottom: 0;
}

.experience-item:hover {
  transform: translateY(-5px); /* 호버 시 살짝 위로 이동 */
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1); /* 호버 시 그림자 강조 */
}

.company-name {
  font-size: 1.3em;
  font-weight: bold;
  color: #2c3e50;
  margin-bottom: 5px;
}

.position-duration {
  font-size: 0.95em;
  color: #666;
  margin-bottom: 10px;
}

.position {
  font-weight: bold;
}

.responsibilities-list {
  list-style-type: disc;
  padding-left: 20px;
  margin-top: 5px;
  color: #555;
  line-height: 1.6;
}

.responsibilities-list li {
  margin-bottom: 5px;
}

/* 사용 기술 태그 스타일 (ProjectSection.vue에서 가져와도 좋습니다) */
.project-skills {
  margin-top: 15px;
  padding-top: 10px;
  border-top: 1px dashed #eee; /* 구분선 추가 */
}

.project-skills h4 {
  font-size: 1em;
  color: #555;
  margin-top: 0;
  margin-bottom: 10px;
  font-weight: bold;
}

.skill-tags {
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.skill-tags li {
  background-color: #e2f0ff;
  color: #0056b3;
  padding: 6px 12px;
  border-radius: 15px;
  font-size: 0.85em;
  white-space: nowrap;
}
</style>
