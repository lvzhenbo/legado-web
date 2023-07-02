<template>
  <NLayoutHeader position="absolute" class="z-10">
    <div class="p-2 flex justify-between items-center">
      <div class="mr-2">
        <NButton quaternary @click="toggleMenuFold">
          <template #icon>
            <NIcon>
              <MenuUnfoldOutlined v-if="collapsed" />
              <MenuFoldOutlined v-else />
            </NIcon>
          </template>
          书架
        </NButton>
      </div>
      <div>
        <NForm label-placement="left" :show-feedback="false">
          <NFormItem class="min-[488px]:w-96 min-[360px]:w-64 w-full">
            <NInput placeholder="搜索书籍，在线书籍自动加入书架" round>
              <template #prefix>
                <NIcon :component="SearchOutlined" />
              </template>
            </NInput>
          </NFormItem>
        </NForm>
      </div>
    </div>
  </NLayoutHeader>
  <NLayoutContent :native-scrollbar="false" position="absolute" class="pt-[50px]">
    <div class="p-4">
      <NGrid
        cols="1 600:2 900:3 1200:4 1500:5 1800:6"
        x-gap="0 600:20 900:20 1200:20 1500:20 1800:20"
        y-gap="40"
        item-responsive
      >
        <NGi v-for="(item, i) in bookList" :key="i" span="1" class="flex justify-center">
          <NCard
            :title="item.name"
            class="!w-72 min-w-[288px]"
            size="small"
            hoverable
            :theme-overrides="cardThemeOverrides"
            @click="openBook(i)"
          >
            <template #cover>
              <img
                :src="apiUrl + '/cover?path=' + item.coverUrl"
                loading="lazy"
                class="h-[400px] w-full object-cover"
              />
            </template>
            <div>
              <div class="text-zinc-500 font-bold">
                {{ item.author }}·共{{ item.totalChapterNum }}章·
                <NTime :to="item.lastCheckTime" type="relative" />
              </div>
              <div class="text-zinc-400">已读：{{ item.durChapterTitle }}</div>
              <div class="text-zinc-400">最新：{{ item.latestChapterTitle }}</div>
            </div>
          </NCard>
        </NGi>
      </NGrid>
      <div ref="endLoadingRef"></div>
    </div>
  </NLayoutContent>
  <BookDrawer v-model:open="show" :book-detail="bookDetail" />
</template>

<script setup lang="ts">
  import { SearchOutlined, MenuFoldOutlined, MenuUnfoldOutlined } from '@vicons/antd';
  import { useCollapsederStore } from '@/stores/collapseder';
  import type { CardProps } from 'naive-ui';
  import type { BookList } from '#/bookshelf';
  import BookDrawer from './components/BookDrawer.vue';
  import { bookshelf } from '@/api/bookshelf';
  import { useIntersectionObserver } from '@vueuse/core';

  type CardThemeOverrides = NonNullable<CardProps['themeOverrides']>;

  const cardThemeOverrides: CardThemeOverrides = {
    titleFontWeight: 'bold',
    textColor: '#33373d',
  };
  const collapsederStore = useCollapsederStore();
  const collapsed = computed(() => collapsederStore.collapsed);
  const bookList = ref<BookList[]>([]);
  const show = ref(false);
  const bookDetail = ref<BookList>({});
  const rawData = ref<BookList[]>([]);
  const endLoadingRef = ref<HTMLElement | null>(null);
  const stopFun = ref<() => void>(() => {});
  const apiUrl = import.meta.env.VITE_API_URL;

  onMounted(async () => {
    await getBookshelf();
    pushData();
    const { stop } = useIntersectionObserver(endLoadingRef, ([{ isIntersecting }]) => {
      if (isIntersecting) {
        pushData();
      }
    });
    stopFun.value = stop;
  });
  onUnmounted(() => {
    stopFun.value();
  });

  async function getBookshelf() {
    const res = await bookshelf();
    rawData.value = res.data.data;
  }

  function pushData() {
    const rawDataLength = rawData.value.length;
    if (rawDataLength === 0) return;
    if (bookList.value.length === rawDataLength) return;
    const start = bookList.value.length;
    const end = Math.min(start + 20, rawDataLength);
    bookList.value.push(...rawData.value.slice(start, end));
  }

  function toggleMenuFold() {
    collapsederStore.collapsed = !collapsederStore.collapsed;
    collapsederStore.customCollapsed = collapsederStore.collapsed;
  }

  function openBook(index: number) {
    bookDetail.value = bookList.value[index];
    show.value = true;
  }
</script>

<style scoped></style>
