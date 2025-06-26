// src/main.ts
import { createApp } from 'vue'
import { createPinia } from 'pinia' // Pinia 임포트
import App from './App.vue'
import './assets/main.css' // 전역 CSS

const app = createApp(App)
const pinia = createPinia() // Pinia 인스턴스 생성

app.use(pinia) // Pinia 사용
app.mount('#app')
