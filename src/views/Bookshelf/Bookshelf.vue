<template>
  <NLayoutHeader>
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
  <NLayoutContent> 平山道 </NLayoutContent>
  <!-- <NLayoutFooter>成府路</NLayoutFooter> -->
</template>

<script setup lang="ts">
  import { SearchOutlined, MenuFoldOutlined, MenuUnfoldOutlined } from '@vicons/antd';
  import { useCollapsederStore } from '@/stores/collapseder';

  const collapsederStore = useCollapsederStore();
  const collapsed = computed(() => collapsederStore.collapsed);

  function toggleMenuFold() {
    collapsederStore.collapsed = !collapsederStore.collapsed;
  }
</script>

<style scoped></style>
