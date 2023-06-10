<script setup lang="ts">
  import { zhCN, dateZhCN, useOsTheme, darkTheme, lightTheme } from 'naive-ui';
  const osThemeRef = useOsTheme();
  const theme = ref(osThemeRef.value === 'dark' ? darkTheme : lightTheme);
  watch(
    () => osThemeRef.value,
    (newVal) => {
      if (newVal === 'dark') {
        theme.value = darkTheme;
      } else {
        theme.value = lightTheme;
      }
    },
  );
</script>

<template>
  <NConfigProvider :locale="zhCN" :date-locale="dateZhCN" :theme="theme">
    <AppProvider>
      <RouterView />
    </AppProvider>
  </NConfigProvider>
</template>

<style scoped></style>
