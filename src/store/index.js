import { createStore } from 'vuex';
// import axios from 'axios'

export default createStore({
  state: {
    cars: null,
    consoles: null,
    friends: null
  },
  mutations: {
    setCars(state, payload) {
      state.cars = payload;
    },
    setConsoles(state, payload) {
      state.consoles = payload;
    },
    setFriends(state, payload) {
      state.friends = payload;
    }
  },
  actions: {
    async getCars({ commit }) {
      let fetchedInfo = await fetch('https://caleb-okkers.github.io/dejavue/data/');
      let converted = await fetchedInfo.json();
      commit('setCars', converted.cars);
    },
    async getConsoles({ commit }) {
      let fetchedInfo = await fetch('https://caleb-okkers.github.io/dejavue/data/');
      let converted = await fetchedInfo.json();
      commit('setConsoles', converted.consoles);
    },
    async getFriends({ commit }) {
      let fetchedInfo = await fetch('https://caleb-okkers.github.io/dejavue/data/');
      let converted = await fetchedInfo.json();
      commit('setFriends', converted.friends);
    }
  },
  modules: {}
});