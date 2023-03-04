const baseURL = "https://jsonplaceholder.typicode.com/comments";

export const commentsApi = {
  getComments: async () => {
    return await fetch(baseURL).then((response) => response.json());
  },
  getCommentsByPostId: async (postId) => {
    return await fetch(baseURL + "?postId=" + postId).then((response) =>
      response.json()
    );
  },
};
