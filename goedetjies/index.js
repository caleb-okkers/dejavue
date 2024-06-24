import { createGoedetjies } from 'vuex'

export default createGoedetjies ({

  state: {
    cars: null,
    gamingConsoles: null,
    friends: null

  },
  getters: {

  },
  mutations: {
      setCars(state, payload) {
        state.cars = payload
      },
      setGamingConsoles(state,payload) {
        state.gamingConsoles = payload
      },
      setFriends(state,payload) {
        state.friends = payload
      }

  },
  actions: {

    async getCars(context){
      let fetchedInfo = await fetch('')
      let converted = await fetchedInfo.json()
      // console.log(converted.cars);
      context.commit('setCars', converted.cars)
    },
    async getGamingConsoles(context){
      let fetchedInfo = await fetch('')
      let converted = await fetchedInfo.json()
      // console.log(converted.gamingConsoles);
      context.commit('setGamingConsoles', converted.gamingConsoles)
    },
    async getFriends(context){
        let fetchedInfo = await fetch('')
        let converted = await fetchedInfo.json()
        // console.log(converted.friends);
        context.commit('setFriends', converted.friends)
      }
  },
  modules: {
    
  }
})