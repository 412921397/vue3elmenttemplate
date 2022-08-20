<script setup lang="ts">
import { ElConfigProvider } from "element-plus";
import zhCn from "element-plus/lib/locale/lang/zh-cn";
</script>

<template>
  <ElConfigProvider :locale="zhCn">
    <RouterLink to="/login">登录</RouterLink>
    <RouterLink to="/main">主要</RouterLink>

    <RouterView />
  </ElConfigProvider>
</template>

<style scoped></style>
