import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentPath: "dir1",
    // logs: ["Commands availables : cd, touch, mkdir"],
    input: "",
    files: ["testing"],
    folders: {
      dir1: { files: ["file1", "file2"], folders: ["folder"] },
      dir2: { files: ["file1"], folders: [] }
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
    },
    PARENT_COMMIT(state, payload) {
      state.parent = payload;
    }
  },
  actions: {}
});
