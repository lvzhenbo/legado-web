<script setup lang="ts">
  import { zhCN, dateZhCN } from 'naive-ui';
</script>

<template>
  <NConfigProvider :locale="zhCN" :date-locale="dateZhCN">
    <AppProvider>
      <RouterView />
    </AppProvider>
  </NConfigProvider>
</template>

<style scoped></style>
