import { createStore } from "vuex";
import users from "./modules/users.js";
import posts from "./modules/posts.js";
import comments from "./modules/comments.js";

export const store = createStore({
  modules: { users, posts, comments },
});
