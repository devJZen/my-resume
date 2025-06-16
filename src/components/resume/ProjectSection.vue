<template>
  <section class="project-section">
    <SectionTitle title="경험 프로젝트" />

    <div class="projects-list">
      <div v-for="project in projects" :key="project.id" class="project-item">
        <h3 class="project-name">{{ project.name }}</h3>
        <p class="project-duration">{{ project.duration }}</p>
        <p class="project-description">{{ project.description }}</p>

        <div v-if="project.skillsUsed && project.skillsUsed.length" class="project-skills">
          <h4>사용 기술:</h4>
          <ul class="skill-tags">
            <li v-for="skill in project.skillsUsed" :key="skill">{{ skill }}</li>
          </ul>
        </div>

        <div v-if="project.link" class="project-link">
          <a :href="project.link" class="pulse-link" target="_blank" rel="noopener noreferrer">
            프로젝트 보러가기 <span class="arrow">▶</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import SectionTitle from '../common/SectionTitle.vue' // SectionTitle 컴포넌트 불러오기
import type { Project } from '../../types/indexData' // 정의된 Project 타입 불러오기

// Props 타입을 정의하고 적용합니다.
interface ProjectSectionProps {
  projects: Project[] // Project 타입의 배열을 받습니다.
}

const props = defineProps<ProjectSectionProps>()
</script>

<style scoped>
.projects-list {
  display: grid;
  grid-template-columns: 1fr; /* 기본적으로 한 줄에 하나 */
  gap: 30px; /* 각 프로젝트 아이템 간격 */
}

.project-item {
  background-color: #fff;
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 25px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s ease-in-out;
}

.project-item:hover {
  transform: translateY(-5px); /* 호버 효과 */
}

.project-name {
  font-size: 1.6em;
  font-weight: bold;
  color: #2c3e50;
  margin-top: 0;
  margin-bottom: 8px;
}

.project-duration {
  font-size: 0.95em;
  color: #777;
  margin-bottom: 15px;
}

.project-description {
  font-size: 1em;
  color: #444;
  line-height: 1.7;
  margin-bottom: 20px;
  white-space: pre-line; /* 줄바꿈 유지 */
}

.project-skills {
  margin-top: 10px;
  margin-bottom: 10px;
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
  gap: 8px; /* 태그 간 간격 */
}

.skill-tags li {
  background-color: #e2f0ff;
  color: #0056b3;
  padding: 6px 12px;
  border-radius: 15px;
  font-size: 0.85em;
  white-space: nowrap;
}

.project-link {
  text-align: right;
  margin-top: 20px;
}

.project-link a {
  display: inline-flex;
  align-items: center;
  color: #007bff;
  text-decoration: none;
  font-weight: bold;
  font-size: 1em;
  transition: color 0.2s ease-in-out;
}

.project-link a:hover {
  color: #0056b3;
}

.project-link .arrow {
  margin-left: 5px;
  font-size: 1.2em;
}

/* 모바일 화면을 위한 반응형 조정 (필요시 추가) */
@media (max-width: 768px) {
  .project-item {
    padding: 20px;
  }
  .project-name {
    font-size: 1.4em;
  }
}
</style>
