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
      <NGrid x-gap="20" :cols="6" y-gap="40" item-responsive responsive="screen">
        <NGi
          v-for="(item, i) in bookList"
          :key="i"
          span="6 s:3 m:2 l:1 xl:1 xxl:1"
          class="flex justify-center"
        >
          <NCard
            :title="item.name"
            class="!w-60"
            size="small"
            hoverable
            :theme-overrides="cardThemeOverrides"
            @click="openBook(i)"
          >
            <template #cover>
              <img :src="item.coverUrl" />
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

  type CardThemeOverrides = NonNullable<CardProps['themeOverrides']>;

  const cardThemeOverrides: CardThemeOverrides = {
    titleFontWeight: 'bold',
    textColor: '#33373d',
  };
  const collapsederStore = useCollapsederStore();
  const collapsed = computed(() => collapsederStore.collapsed);
  const bookList = ref<BookList[]>([
    {
      author: '作者',
      bookUrl: '',
      coverUrl: 'https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg',
      lastCheckTime: 1686816807172,
      latestChapterTitle: '最新章节',
      name: '书名',
      totalChapterNum: 600,
      durChapterTitle: '已读章节',
    },
    {
      author: '作者1',
      bookUrl: '',
      coverUrl: 'https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg',
      lastCheckTime: 1686816807172,
      latestChapterTitle: '最新章节',
      name: '书名1',
      totalChapterNum: 600,
      durChapterTitle: '已读章节',
    },
  ]);
  const show = ref(false);
  const bookDetail = ref<BookList>({});

  function toggleMenuFold() {
    collapsederStore.collapsed = !collapsederStore.collapsed;
  }

  function openBook(index: number) {
    bookDetail.value = bookList.value[index];
    show.value = true;
  }
</script>

<style scoped></style>
