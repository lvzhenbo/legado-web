import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useCollapsederStore = defineStore('collapseder', () => {
  const collapsed = ref(false);

  return { collapsed };
});
