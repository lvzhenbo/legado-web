<template>
  <NDrawer v-model:show="show" width="100%" @after-leave="close">
    <NDrawerContent :title="detail.name" closable> 内容 </NDrawerContent>
  </NDrawer>
</template>

<script setup lang="ts">
  import type { BookList } from '#/bookshelf';

  const props = defineProps({
    open: {
      type: Boolean,
      default: false,
    },
    bookDetail: {
      type: Object,
      default: () => ({}),
    },
  });
  const emit = defineEmits(['update:open']);
  const show = ref(false);
  const detail = ref<BookList>({
    name: '',
  });

  watch(props, (val) => {
    show.value = val.open;
    detail.value = val.bookDetail;
  });

  function close() {
    emit('update:open', false);
  }
</script>

<style scoped></style>
