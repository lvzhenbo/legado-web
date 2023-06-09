<template>
  <NLayoutHeader>
    <div class="p-2 flex justify-between items-center">
      <div class="mr-2">
        <NButton quaternary @click="toggleMenuFold">
          <template #icon>
            <NIcon>
              <MenuUnfoldOutlined v-if="collapsed" />
              <MenuFoldOutlined v-else />
            </NIcon>
          </template>
        </NButton>
      </div>
      <div>
        <NForm label-placement="left" :show-feedback="false">
          <NFormItem class="w-96">
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
  import { changeMenuFoldKey } from '@/utils/provideInject';

  const changeMenuFold = inject<{ changeMenuFold: (value: boolean) => void }>(changeMenuFoldKey);
  const collapsed = ref(false);

  function toggleMenuFold() {
    collapsed.value = !collapsed.value;
    changeMenuFold?.changeMenuFold(collapsed.value);
  }
</script>

<style scoped></style>
