import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentPath: "",
    logs: ["Type help to see availables commands"],
    helpMsg:
      "Hi! Here you can navigate between files (cd), create directories (mkdir) and create files (touch). Right now you can't navigate inside nested files, but I'm working on it!",
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
