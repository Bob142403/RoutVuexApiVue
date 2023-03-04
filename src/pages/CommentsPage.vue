<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";

const store = useStore();
const route = useRoute();
const postId = route.params.postId;

store.dispatch("fetchCommentsByPostId", postId);

const comments = computed(() => store.state.comments.comments);

const postInfo = computed(() => store.state.comments.postInfo);

const userInfo = computed(() => store.state.comments.userInfo);
</script>

<template>
  <div class="post-with-comment">
    <div class="post-info">
      <h1>{{ postInfo[0].title }}</h1>
      Author: {{ userInfo[0].name }}
      <p style="font-weight: bold">{{ postInfo[0].body }}</p>
    </div>
    <hr style="color: aliceblue" />
    <div class="comment" v-for="comment in comments" :key="comment.id">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">{{ comment.name }}</h5>
          <h6 class="card-subtitle mb-2 text-muted">{{ comment.email }}</h6>
          <p class="card-text">
            {{ comment.body }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.comment {
  color: aliceblue;
}

.card {
  margin: 10px;
  background-color: #485159;
  color: aliceblue;
}
.post-with-comment {
  display: flex;
  padding: 10px;
  justify-content: center;
  flex-direction: column;
}
.post-info {
  color: aliceblue;
}
</style>
