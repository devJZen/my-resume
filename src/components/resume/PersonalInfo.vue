<template>
  <section class="personal-info-section">
    <div class="profile-image-wrapper">
      <img
        v-if="personalInfo.profileImage"
        :src="personalInfo.profileImage"
        alt="Profile Image"
        class="profile-image"
      />
    </div>

    <div class="name-and-title">
      <h1 class="name">{{ personalInfo.name }}</h1>
      <p class="job-title">{{ personalInfo.jobTitle }}</p>
    </div>

    <div class="contact-details">
      <p v-if="personalInfo.age"><span class="icon">🎂</span> {{ personalInfo.age }}세</p>
      <p v-if="personalInfo.email">
        <span class="icon">✉️</span>
        <a :href="'mailto:' + personalInfo.email" class="pulse-link">{{ personalInfo.email }}</a>
      </p>
      <p v-if="personalInfo.github">
        <span class="icon">🐙</span>
        <a :href="personalInfo.github" class="pulse-link" target="_blank" rel="noopener noreferrer">
          {{ personalInfo.github.split('/').pop() }}
        </a>
      </p>
      <p v-if="personalInfo.portfolio">
        <span class="icon">🌐</span>
        <a
          :href="personalInfo.portfolio"
          class="pulse-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Portfolio
        </a>
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import type { PersonalInfo } from '../../types/indexData'

interface PersonalInfoProps {
  personalInfo: PersonalInfo
}

const props = defineProps<PersonalInfoProps>()
</script>

<style scoped>
.personal-info-section {
  display: flex;
  justify-content: space-between;
  gap: 10px; /* 요소 간의 간격 */
  flex-direction: row;
  flex-wrap: wrap; /* 공간 부족 시 줄바꿈 허용 */
  padding-bottom: 30px;
  border-bottom: 2px solid #eee;
  margin-bottom: 30px;
  text-align: left; /* 기본 텍스트 정렬 */
}

/* 프로필 이미지 래퍼 (이미지 크기 및 테두리만 담당) */
.profile-image-wrapper {
  margin-right: 10px;
  flex-shrink: 0;
}

.profile-image {
  width: 200px; /* 이미지 크기 */
  height: 200px;
  border-radius: 8px;
  object-fit: cover;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

/* 이름과 직책 컨테이너 */
.name-and-title {
  display: flex;
  flex-direction: column;
  justify-content: flex-ㄴend; /* 아래 정렬 */
  align-items: flex-start; /* 왼쪽 정렬 */
  align-content: left;
  margin: 80px 0 0 10px;
  flex-shrink: 0; /* 공간이 부족해도 축소되지 않음 */
}

.name {
  font-size: 3em;
  color: #2c3e50;
  margin: 0;
  font-weight: 700;
  letter-spacing: -1px;
  white-space: nowrap;
}

.job-title {
  font-size: 1.5em;
  color: #555;
  margin-top: 5px; /* 이름 아래 간격 */
  font-weight: 400;
  white-space: nowrap;
}

/* 연락처 상세 정보 컨테이너 */
.contact-details {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end; /* 우측 정렬 */
  margin-left: 10px;
  gap: 8px 25px;
  font-size: 1em;
  color: #555;
  margin-top: 0;
  flex-grow: 1;
  min-width: 250px;
}

.contact-details p {
  margin: 0;
  display: flex; /* 아이콘과 텍스트를 나란히 */
  align-items: center; /* 수직 중앙 정렬 */
}

.contact-details .icon {
  margin-right: 8px;
  font-size: 1.2em;
  color: #007bff;
}

.contact-details a {
  color: #007bff;
  text-decoration: none;
  transition: color 0.2s ease;
}

.contact-details a:hover {
  text-decoration: underline;
  color: #0056b3;
}

/* 모바일 화면을 위한 반응형 조정 */
@media (max-width: 768px) {
  .personal-info-section {
    flex-direction: column; /* 작은 화면에서는 모든 요소를 세로로 배치 */
    align-items: center; /* 세로 배치 시 중앙 정렬 */
    gap: 15px; /* 세로 간격 조정 */
  }

  .profile-image-wrapper {
    margin-bottom: 0; /* 이미지 아래 마진 제거 */
  }

  .name-and-title {
    align-items: center; /* 이름/직책 중앙 정렬 */
    margin-bottom: 10px; /* 연락처와의 간격 */
  }

  .name {
    font-size: 2.2em;
  }
  .job-title {
    font-size: 1.2em;
  }

  .contact-details {
    flex-direction: column; /* 연락처 항목들도 세로로 나열 */
    gap: 8px;
    align-items: center;
    margin-top: 0; /* 간격 조정 */
    width: auto; /* 너비 자동 */
  }
}
</style>
