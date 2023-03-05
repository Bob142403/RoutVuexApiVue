<script setup>
import UserCard from "../components/UserCard.vue";
import { computed } from "vue";
import { useStore } from "vuex";
const store = useStore();

const users = computed(() => {
  return store.state.users.users;
});
</script>

<template>
  <div class="users-page">
    <template v-for="user of users" :key="user.id">
      <UserCard :userName="user.name" :userId="user.id" />
    </template>
  </div>
</template>

<style scoped>
.users-page {
  flex-direction: column;
}
</style>
