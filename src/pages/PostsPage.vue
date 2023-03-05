<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import PostCard from "../components/PostCard.vue";

const store = useStore();
const route = useRoute();
const userId = route.params.userId;

store.dispatch("fetchPostsByUserId", userId);

const posts = computed(() => store.state.posts.posts);
</script>

<template>
  <div class="posts-page row row-cols-4 text-center">
    <template v-for="post in posts" :key="post.id">
      <PostCard :body="post.body" :title="post.title" :id="post.id" />
    </template>
  </div>
</template>

<style scoped>
.posts-page {
  color: aliceblue;
  display: flex;
  width: 100%;
  justify-content: center;
}
</style>
