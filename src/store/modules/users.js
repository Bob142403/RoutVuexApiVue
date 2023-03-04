import { usersApi } from "../../services/user-api";

export default {
  actions: {
    async fetchUsers({ commit }) {
      await usersApi.getUsers().then((users) => commit("setUsers", users));
    },
  },
  mutations: {
    setUsers(state, payload) {
      state.users = payload;
    },
  },
  state: {
    users: [],
  },
  getters: {
    getUsers(state) {
      return state.users;
    },
    getUserById: (state) => (id) => {
      return state.users.find((user) => user.id === +id);
    },
  },
};
