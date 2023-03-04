<script setup>
import Card from "./components/UserCard.vue";
import { computed, ref } from "vue";
import { useStore } from "vuex";
const store = useStore();

const items = ref([{ message: "Foo" }, { message: "Bar" }]);

const users = computed(() => {
  return store.state.users.users;
});
</script>

<template>
  <div class="users-page">
    <template v-for="user of users" :key="user.id">
      <Card :userName="user.name" :userId="user.id" />
    </template>
  </div>
</template>

<style scoped>
.users-page {
  flex-direction: column;
}
</style>
