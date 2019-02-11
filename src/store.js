import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
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
    }
  },
  actions: {}
});
