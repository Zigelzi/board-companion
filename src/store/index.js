import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

function updatePlayerNumbers(state) {
  state.players.forEach((player, index) => {
    player.number = index + 1;
  });
}

export default new Vuex.Store({
  state: {
    players: []
  },
  mutations: {
    addPlayer(state, playerName) {
      let player = {
        id: state.players.length,
        name: playerName,
        number: state.players.length + 1 // Start player number indexing from 1
      };
      state.players.push(player);
    },
    removePlayer(state, player) {
      state.players.splice(player.number - 1, 1); // Players are indexed from 1
      updatePlayerNumbers(state);
    }
  },
  getters: {
    getPlayers(state) {
      return state.players;
    }
  }
});
