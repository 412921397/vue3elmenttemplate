<template>
  <div>
    <h2>login</h2>

    <Text ref="textRef" msg="message" />

    <ElButton @click="clickRef">默认</ElButton>
    <ElButton type="primary">来了</ElButton>
    <ElButton type="danger">来了</ElButton>
    <ElButton type="success">来了</ElButton>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useUserStore } from "@/store/user";
import Text from "./Text.vue";

const textRef = ref<InstanceType<typeof Text>>();
const user = useUserStore();

const clickRef = () => {
  console.log(textRef.value?.message);
};
</script>

<style scoped></style>
