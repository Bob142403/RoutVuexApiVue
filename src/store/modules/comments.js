import { commentsApi } from "../../services/comment-api";
import { postsApi } from "../../services/post-api";
import { usersApi } from "../../services/user-api";

export default {
  actions: {
    async fetchCommentsByPostId({ commit, state }, postId) {
      await commentsApi.getCommentsByPostId(postId).then((comments) => {
        commit("setComments", comments);
      });
      await postsApi.getPostByPostId(postId).then((post) => {
        commit("setPostInfo", post);
      });
      await usersApi.getUserById(state.postInfo[0].userId).then((user) => {
        commit("setUserInfo", user);
      });
    },
  },
  state: { comments: [], postInfo: [{}], userInfo: [{}] },
  mutations: {
    setComments(state, comments) {
      state.comments = comments;
    },
    setPostInfo(state, postInfo) {
      state.postInfo = postInfo;
    },
    setUserInfo(state, userInfo) {
      state.userInfo = userInfo;
    },
  },
};
