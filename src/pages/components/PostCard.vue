<script setup>
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";

defineProps({ body: String, title: String, id: Number });

const store = useStore();
const route = useRoute();
const router = useRouter();

const userId = route.params.userId;

const aboutUser = store.getters.getUserById(userId);
</script>

<template>
  <div class="card col" @click="router.push(`/posts/${userId}/comments/${id}`)">
    <div class="card-body">
      <h5 class="card-title">{{ title }}</h5>
      <h6 class="card-subtitle mb-2 text-muted">
        Author: {{ aboutUser.name }}
      </h6>
      <p class="card-text">
        {{ body }}
      </p>
    </div>
  </div>
</template>

<style scoped>
.card {
  margin: 10px;
  background-color: #485159;
  color: aliceblue;
  cursor: pointer;
}
.card:hover {
  background-color: #394147;
}
</style>
