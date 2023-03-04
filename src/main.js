import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import PostsPage from "./components/PostsPage.vue";
import UsersPage from "./components/UsersPage.vue";
import CommentsPage from "./components/CommentsPage.vue";
import { store } from "./store/store";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", component: UsersPage },
  {
    path: "/posts/:userId",
    component: PostsPage,
  },
  { path: "/posts/:userId/comments/:postId", component: CommentsPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);

app.use(store);
app.use(router);

app.mount("#app");
