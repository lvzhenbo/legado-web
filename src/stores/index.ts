import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

const pinia = createPinia();

// 文档 https://prazdevs.github.io/pinia-plugin-persistedstate/zh/
pinia.use(piniaPluginPersistedstate);

export { pinia };
