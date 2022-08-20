<template>
  <div>
    <h2>{{ msg }}</h2>
    <h2>{{ message }}</h2>
  </div>
</template>

<script setup lang="ts">
import { defineExpose, ref } from "vue";

const props = defineProps<{ msg: string }>();

const message = ref("我是组件内的message");

defineExpose({ message });
</script>

<style scoped></style>
