import { commentsApi } from "../../services/comment-api";
import { postsApi } from "../../services/post-api";

export default {
  actions: {
    async fetchCommentsByPostId(ctx, postId) {
      await commentsApi.getCommentsByPostId(postId).then((comments) => {
        ctx.commit("setComments", comments);
      });
      await postsApi.getPostByPostId(postId).then((post) => {
        ctx.commit("setPostInfo", post);
      });
      await ctx.commit(
        "setUserInfo",
        ctx.getters.getUserById(ctx.state.postInfo[0].userId)
      );
    },
  },
  state: { comments: [], postInfo: [{}], userInfo: {} },
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
