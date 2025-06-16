<template>
  <h2 class="section-title">
    {{ title }}
  </h2>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

// Props 타입을 정의합니다.
interface SectionTitleProps {
  title: string // 제목 텍스트는 필수 문자열입니다.
}

// defineProps에 정의된 타입을 적용합니다.
const props = defineProps<SectionTitleProps>()
</script>

<style scoped>
/*
  이 컴포넌트만의 스타일을 정의합니다.
  App.vue에 이미 포함된 섹션 제목 스타일을 여기에 옮겨와도 좋습니다.
  'scoped'를 사용하여 이 스타일이 다른 컴포넌트에 영향을 주지 않도록 합니다.
*/
.section-title {
  font-size: 1.9em; /* 폰트 크기 더 키움 */
  color: #2c3e50;
  margin-bottom: 25px; /* 하단 여백 증가 */
  text-align: center;
  position: relative;
  padding-bottom: 15px; /* 선과 텍스트 간격 증가 */
  letter-spacing: -0.05em;
  cursor: pointer; /* 호버 효과가 있음을 시각적으로 알림 */
  transition: all 0.3s ease; /* 호버 시 전체적인 부드러운 전환 효과 */
}

.section-title::after {
  content: '';
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 0;
  width: 80px; /* 선 길이 증가 */
  height: 3px; /* 선 두께 증가 */
  background-color: #007bff; /* 메인 테마 색상 (진한 파랑) */
  border-radius: 2px;
  transition: width 0.3s ease; /* 호버 시 길이 변화 애니메이션 */
  z-index: 2; /* 배경색 위로 오도록 */
}

.section-title::before {
  content: '';
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: -5px; /* 밑줄보다 약간 아래에 위치하여 배경처럼 보이게 */
  width: 100%; /* 제목 전체 너비를 커버하도록 */
  height: calc(100% + 10px); /* 제목 높이 + 상하 여백을 포함하여 배경처럼 보이게 */
  background-color: transparent; /* 초기에는 투명 */
  border-radius: 5px;
  transition:
    background-color 0.3s ease,
    bottom 0.3s ease,
    height 0.3s ease; /* 배경색 변화 애니메이션 */
  z-index: 1; /* 밑줄 아래로 가도록 */
}

/* 호버 시 스타일 */
.section-title:hover::after {
  width: 40px; /* 호버 시 선 길이 절반으로 줄임 */
}

.section-title:hover::before {
  bottom: -10px; /* 살짝 위로 올라와서 감싸는 느낌 */
  height: calc(100% + 20px); /* 배경 영역 더 확장 */
}

/* 모바일 반응형 조정 */
@media (max-width: 768px) {
  .section-title {
    font-size: 1.8em;
    margin-bottom: 20px;
    padding-bottom: 3px;
  }
  .section-title::after {
    width: 60px;
    height: 2px;
  }
  .section-title:hover::after {
    width: 30px;
  }
  .section-title::before {
    bottom: -3px;
    height: calc(100% + 6px);
  }
  .section-title:hover::before {
    bottom: -8px;
    height: calc(100% + 16px);
  }
}
</style>
