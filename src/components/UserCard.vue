<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

defineProps({
  userName: String,
  userId: Number,
});
</script>

<template>
  <div class="card" @click="router.push({ name: 'posts', params: { userId } })">
    <div class="card-body">{{ userName }}</div>
  </div>
</template>

<style scoped>
.card {
  margin: 10px;
  cursor: pointer;
  background-color: #485159;
  color: aliceblue;
}
.card:hover {
  background-color: #394147;
}
</style>
