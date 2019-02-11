import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentPath: "/",
    logs: ["This is the logs"],
    input: "",
    files: {
      dir1: ["file1", "file2"],
      dir2: ["file1"]
    }
  },
  mutations: {
    INPUT_COMMIT(state, payload) {
      state.input = payload;
    },
    LOGS_COMMIT(state, payload) {
      state.logs = payload;
    },
    CURRENTPATH_COMMIT(state, payload) {
      state.currentPath = payload;
    }
  },
  actions: {}
});
