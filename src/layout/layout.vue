<template>
  <NLayout has-sider content-style="min-height: 100vh;">
    <NLayoutSider bordered collapse-mode="transform" :collapsed-width="0" :collapsed="collapsed">
      <div class="pt-12 px-8 mb-6">
        <div class="font-LXGW-WenKai-Screen text-2xl font-medium">阅读</div>
        <div class="font-LXGW-WenKai-Screen text-base mt-4 text-zinc-400">
          清风不识字，何故乱翻书
        </div>
      </div>
      <NMenu :options="menuOptions" :value="menuValue" />
    </NLayoutSider>
    <NLayout>
      <RouterView />
    </NLayout>
  </NLayout>
</template>

<script setup lang="tsx">
  import type { MenuOption } from 'naive-ui';
  import { RouterLink } from 'vue-router';
  import { findMenuValue } from '@/utils/route';
  import { useCollapsederStore } from '@/stores/collapseder';
  import { useWindowSize } from '@vueuse/core';

  const route = useRoute();
  const menuValue = computed(() => {
    return findMenuValue(menuOptions, route.path);
  });
  const collapsederStore = useCollapsederStore();
  const collapsed = computed(() => collapsederStore.collapsed);
  const { width } = useWindowSize();
  if (width.value < 960) {
    collapsederStore.collapsed = true;
  }
  watch(width, () => {
    if (width.value < 960) {
      collapsederStore.collapsed = true;
    } else {
      collapsederStore.collapsed = false;
    }
  });

  const menuOptions: MenuOption[] = [
    {
      label: () => <RouterLink to="/bookshelf">书架</RouterLink>,
      key: 'bookshelf',
      path: '/bookshelf',
    },
    {
      label: () => <RouterLink to="/bookSource">书源管理</RouterLink>,
      key: 'bookSource',
      path: '/bookSource',
    },
    {
      label: () => <RouterLink to="/feeds">订阅源管理</RouterLink>,
      key: 'feeds',
      path: '/feeds',
    },
  ];
</script>

<style scoped></style>
