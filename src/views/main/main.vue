<template>
  <div>
    <h2>main</h2>
    <el-button v-loading.fullscreen.lock="fullscreenLoading" type="primary" @click="openFullScreen1">
      As a directive
    </el-button>

    <!-- vite vue3对tsx的支持不友好，修改tsx代码需要关掉重新打开此文件 -->
    <Foo title="msg" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Foo from "./File";

const fullscreenLoading = ref(false);

const openFullScreen1 = () => {
  fullscreenLoading.value = true;
  setTimeout(() => {
    fullscreenLoading.value = false;
  }, 2000);
};
</script>

<style scoped></style>
