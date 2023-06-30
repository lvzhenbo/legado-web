import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useCollapsederStore = defineStore(
  'collapseder',
  () => {
    const collapsed = ref(false);
    const customCollapsed = ref(false);

    return { collapsed, customCollapsed };
  },
  {
    persist: true,
  },
);
