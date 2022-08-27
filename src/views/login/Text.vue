<template>
  <div>
    <h2 class="a">{{ msg }}</h2>
    <h2 class="b">{{ message }}</h2>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const props = withDefaults(defineProps<{ msg: string }>(), { msg: "" });

const message = ref("我是组件内的message");

defineExpose({ message });
</script>

<style scoped lang="less">
// @deep: ~":deep()";
@{deep} {
  .a {
    color: #f00;
  }
  .b {
    color: skyblue;
  }
}
</style>
