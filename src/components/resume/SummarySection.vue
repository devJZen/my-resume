<template>
  <section class="summary-section">
    <SectionTitle :title="sectionTitles.summary" />
    <p class="summary-text">{{ summary }}</p>
  </section>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import SectionTitle from '../common/SectionTitle.vue' // SectionTitle 컴포넌트 불러오기
import { useLanguageStore } from '../../stores/language'
import { storeToRefs } from 'pinia'

interface SummaryProps {
  summary: string
}

const props = defineProps<SummaryProps>()
// Pinia 스토어에서 sectionTitles를 가져옴
const languageStore = useLanguageStore()
const { sectionTitles } = storeToRefs(languageStore)
</script>

<style scoped>
/* 섹션별 스타일은 여기에 추가하거나, App.vue의 전역 스타일을 활용 */
.summary-section {
  margin-bottom: 30px; /* 섹션 간 간격 */
  /* margin-bottom: 40px; 등 App.vue에서 이미 설정된 경우 */
}

.summary-text {
  font-size: 1.15em; /* 폰트 크기 증가 */
  line-height: 1.8;
  color: #333; /* 글자색 더 진하게 */
  text-align: justify;
  margin-bottom: 0;
}

/* 자기소개 내 강조 텍스트를 위한 스타일 */
.summary-text :deep(.highlight) {
  /* :deep()은 scoped style에서 자식 컴포넌트나 v-html 내부 스타일에 적용 */
  font-weight: bold;
  color: #007bff; /* 강조 색상 */
  background-color: #e6f3ff; /* 배경색 살짝 추가 */
  padding: 2px 5px;
  border-radius: 4px;
}
</style>
