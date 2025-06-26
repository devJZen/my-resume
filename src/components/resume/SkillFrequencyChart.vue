<template>
  <section class="skill-frequency-chart-section">
    <SectionTitle title="어떤 스킬을 자주 사용했을까?" />
    <div class="chart-container">
      <Doughnut
        :data="chartData"
        :options="chartOptions"
        v-if="chartData.labels && chartData.labels.length > 0"
      />
      <p v-else class="no-data-message">경력이나 프로젝트에서 사용된 기술 데이터가 없습니다.</p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { Doughnut } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement, // Doughnut/Pie 차트에 필요한 요소
} from 'chart.js'
import type { ChartOptions, ChartData } from 'chart.js'
import SectionTitle from '../common/SectionTitle.vue'
import { calculateSkillFrequencies, getTopNSkills } from '../../utils/skillCalculator'
import { resumeData } from '../../data/ko-resumeData' // resumeData 불러오기

// Chart.js 모듈 등록
ChartJS.register(Title, Tooltip, Legend, ArcElement)

// 빈도수 계산
const skillFrequencies = calculateSkillFrequencies(resumeData)

// 상위 N개 기술만 사용 (예: 상위 10개)
const topSkills = computed(() => getTopNSkills(skillFrequencies, 12)) // N 값을 조정

// 차트 데이터 생성
const chartData = computed<ChartData<'doughnut'>>(() => ({
  labels: topSkills.value.map((s) => s.skill),
  datasets: [
    {
      backgroundColor: [
        // 각 섹션의 색상
        '#007bff',
        '#28a745',
        '#ffc107',
        '#dc3545',
        '#6f42c1',
        '#20c997',
        '#fd7e14',
        '#e83e8c',
        '#6c757d',
        '#17a2b8',
        '#f39c12',
        '#8e44ad',
        '#2ecc71',
        '#e74c3c',
        '#3498db',
      ],
      data: topSkills.value.map((s) => s.count),
    },
  ],
}))

// 차트 옵션 설정
const chartOptions: ChartOptions<'doughnut'> = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: true, // 범례 표시 (Doughnut 차트에서는 중요)
      position: 'right', // 범례 위치
      labels: {
        font: {
          size: 12,
        },
      },
    },
    title: {
      display: true,
      text: '기술 스택 사용 빈도수', // 제목 변경
      font: {
        size: 18,
      },
    },
    tooltip: {
      callbacks: {
        label: function (context) {
          // context: TooltipItem<'doughnut'>
          const label = context.label || ''
          const value = context.parsed
          const total = context.dataset.data.reduce((acc: number, val: number) => acc + val, 0)
          const percentage = total > 0 ? ((value / total) * 100).toFixed(1) : '0.0'
          return `${label}: ${value}회 (${percentage}%)`
        },
      },
    },
  },
}
</script>

<style scoped>
.skill-frequency-chart-section {
  /* 섹션 스타일은 App.vue의 전역 섹션 스타일에 따름 */
}
.chart-container {
  position: relative;
  height: 350px; /* 차트 높이 조정 (원형 차트는 정사각형에 가까움) */
  width: 100%;
  max-width: 600px; /* 최대 너비 설정으로 너무 커지는 것을 방지 */
  margin: 0 auto; /* 중앙 정렬 */
  padding: 20px;
  box-sizing: border-box;
  background-color: #fcfcfc;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(190, 189, 189, 0.04);
  display: flex; /* 중앙 정렬을 위해 */
  justify-content: center;
  align-items: center;
}

.no-data-message {
  color: #777;
  font-size: 1.1em;
  text-align: center;
}

/* 모바일 반응형 조정 */
@media (max-width: 768px) {
  .chart-container {
    max-width: 100%; /* 모바일에서 너비 조정 */
  }
}
</style>
