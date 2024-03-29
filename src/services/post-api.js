const baseUrl = "https://jsonplaceholder.typicode.com/posts";

export const postsApi = {
  getPosts: async () => {
    return await fetch(baseUrl).then((response) => response.json());
  },
  getPostsByUserId: async (userId) => {
    return await fetch(baseUrl + "?userId=" + userId).then((response) =>
      response.json()
    );
  },
  getPostByPostId: async (postId) => {
    return await fetch(baseUrl + "?id=" + postId).then((response) =>
      response.json()
    );
  },
};
