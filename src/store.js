import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    input: ""
  },
  mutations: {
    INPUT_COMMIT(state, payload) {
      state.input = payload;
    }
  },
  actions: {}
});
