import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

function updatePlayerNumbers(state) {
  state.players.forEach((player, index) => {
    player.number = index + 1;
  });
}

function updatePlayerTotalScore(state, player) {
  const playerBeingUpdated = findPlayerFromArray(state, player);
  let industryTotal = 0;
  let characterTotal = 0;
  for (let industryKey in playerBeingUpdated.score.industryPoints) {
    let industry = playerBeingUpdated.score.industryPoints[industryKey];
    industryTotal += industry.grossPoints * industry.multiplier;
  }
  for (let characterKey in playerBeingUpdated.score.characterPoints) {
    let character = playerBeingUpdated.score.characterPoints[characterKey];
    characterTotal += character.grossPoints * character.multiplier;
  }
  playerBeingUpdated.score.total =
    playerBeingUpdated.score.victoryPoints.grossPoints +
    industryTotal +
    characterTotal;
}

function findPlayerFromArray(state, player) {
  const foundPlayer = state.players.find(
    element => element.number === player.number
  );
  return foundPlayer;
}

export default new Vuex.Store({
  state: {
    players: []
  },
  mutations: {
    addPlayer(state, playerName) {
      let player = {
        name: playerName,
        number: state.players.length + 1, // Start player number indexing from 1
        score: {
          total: 0,
          victoryPoints: {
            name: "Victory Points",
            grossPoints: 0
          },
          industryPoints: {
            industry: {
              name: "Industry",
              multiplier: 0,
              grossPoints: 0
            },
            military: {
              name: "Military",
              multiplier: 0,
              grossPoints: 0
            },
            science: {
              name: "Science",
              multiplier: 0,
              grossPoints: 0
            },
            economy: {
              name: "Economy",
              multiplier: 0,
              grossPoints: 0
            },
            discovery: {
              name: "Discovery",
              multiplier: 0,
              grossPoints: 0
            }
          },
          characterPoints: {
            generals: {
              name: "Generals",
              multiplier: 0,
              grossPoints: 0
            },
            financers: {
              name: "Financers",
              multiplier: 0,
              grossPoints: 0
            }
          }
        }
      };
      state.players.push(player);
    },
    removePlayer(state, player) {
      state.players.splice(player.number - 1, 1); // Players are indexed from 1
      updatePlayerNumbers(state);
    },
    updatePlayerState(state, player) {
      // Find and update the player status
      let index = state.players.findIndex(
        element => element.number === player.number
      );
      updatePlayerTotalScore(state, player);
      state.players.splice(index, 1, player);
    }
  },
  getters: {
    getPlayers(state) {
      return state.players;
    },
    getPlayerByNumber: state => playerNumber => {
      return state.players.find(player => player.number === playerNumber);
    },
    getSortedPlayers(state) {
      let sortedPlayers = state.players.sort((player1, player2) => {
        return player1.total - player2.total;
      });
      return sortedPlayers;
    }
  }
});
