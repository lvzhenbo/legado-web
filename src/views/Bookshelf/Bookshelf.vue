<template>
  <NLayoutHeader position="absolute" class="z-10">
    <div class="p-2 flex justify-between items-center">
      <div class="mr-2">
        <NButton quaternary class="!font-LXGW-WenKai-Screen" @click="toggleMenuFold">
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
        <NGi v-for="i in 10" :key="i" span="6 s:3 m:2 l:1 xl:1 xxl:1" class="flex justify-center">
          <NCard
            title="书名"
            class="!w-60"
            size="small"
            hoverable
            :theme-overrides="cardThemeOverrides"
          >
            <template #cover>
              <img src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg" />
            </template>
            <div>
              <div class="text-zinc-500 font-bold">作者·总章节·上次更新时间</div>
              <div class="text-zinc-400">已读：已读章节</div>
              <div class="text-zinc-400">最新：最新章节</div>
            </div>
          </NCard>
        </NGi>
      </NGrid>
    </div>
  </NLayoutContent>
</template>

<script setup lang="ts">
  import { SearchOutlined, MenuFoldOutlined, MenuUnfoldOutlined } from '@vicons/antd';
  import { useCollapsederStore } from '@/stores/collapseder';
  import type { CardProps } from 'naive-ui';

  type CardThemeOverrides = NonNullable<CardProps['themeOverrides']>;

  const cardThemeOverrides: CardThemeOverrides = {
    titleFontWeight: 'bold',
    textColor: '#33373d',
  };
  const collapsederStore = useCollapsederStore();
  const collapsed = computed(() => collapsederStore.collapsed);

  function toggleMenuFold() {
    collapsederStore.collapsed = !collapsederStore.collapsed;
  }
</script>

<style scoped></style>
