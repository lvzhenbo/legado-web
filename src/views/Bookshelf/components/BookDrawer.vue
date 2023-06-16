<template>
  <NDrawer v-model:show="show" width="100%">
    <NDrawerContent :title="bookDetail.name" closable> 内容 </NDrawerContent>
  </NDrawer>
</template>

<script setup lang="ts">
  import type { BookState } from '#/bookshelf';
  import { bookState } from '@/utils/provideInject';

  const { show, bookDetail } = inject(bookState) as BookState;
  watch(bookDetail, (val) => {
    console.log(val);
  });
</script>

<style scoped></style>
