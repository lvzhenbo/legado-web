import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

// TailwindCSS
import './styles/tailwind.css';

// 解决 TailwindCSS 和 Naive UI 的样式冲突 https://www.naiveui.com/zh-CN/os-theme/docs/style-conflict
const meta = document.createElement('meta');
meta.name = 'naive-ui-style';
document.head.appendChild(meta);

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount('#app');
