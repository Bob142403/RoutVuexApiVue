import { postsApi } from "../../services/post-api";

export default {
  actions: {
    async fetchPostsByUserId({ commit }, userId) {
      await postsApi
        .getPostsByUserId(userId)
        .then((posts) => commit("setPosts", posts));
    },
  },
  mutations: {
    setPosts(state, posts) {
      state.posts = posts;
    },
  },
  state: {
    posts: [],
  },
  getters: {},
};
