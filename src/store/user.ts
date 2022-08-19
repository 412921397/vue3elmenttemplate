import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    name: "why",
    age: 18
  }),
  actions: {}
});
