<template>
  <el-config-provider :locale="zhCn">
    <router-view></router-view>
  </el-config-provider>
</template>

<script lang="ts" setup>
// import messageQueue from '@/composables/messageQueueComposable';
import configComposable from '@/composables/configComposable';
import zhCn from 'element-plus/lib/locale/lang/zh-cn';

// messageQueue();
const { getConfig } = configComposable();
getConfig();
</script>

<style>
#app {
  color: #2c3e50;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
