import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    count: 2
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    setAll(state, payload) {
      state.count = payload.count;
    }
  },
  actions: {}
});
