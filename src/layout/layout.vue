<template>
  <NLayout has-sider content-style="min-height: 100vh;">
    <NLayoutSider bordered>
      <div class="pt-12 px-9 mb-6">
        <div>阅读</div>
        <div>清风不识字，何故乱翻书</div>
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

  const route = useRoute();
  const menuValue = computed(() => {
    return findMenuValue(menuOptions, route.path);
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
