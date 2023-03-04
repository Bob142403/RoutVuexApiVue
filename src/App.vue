<script setup>
import { useStore } from "vuex";

const store = useStore();

store.dispatch("fetchUsers");
</script>

<template>
  <router-view></router-view>
</template>

<style scoped></style>
