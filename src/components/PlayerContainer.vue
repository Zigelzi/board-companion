<template>
  <div>
    <v-add-player @playerAdded="addPlayer" />
    <v-player-table :players="players" @playerRemoved="removePlayer" />
  </div>
</template>
<script>
import AddPlayer from "@/components/AddPlayer.vue";
import PlayerTable from "@/components/PlayerTable.vue";

export default {
  components: {
    "v-add-player": AddPlayer,
    "v-player-table": PlayerTable
  },
  data() {
    return {
      players: []
    };
  },
  methods: {
    addPlayer(playerName) {
      let player = {
        name: playerName,
        number: this.players.length + 1 // Start player number indexing from 1
      };
      this.players.push(player);
    },
    removePlayer(player) {
      this.players.splice(player.number - 1, 1); // Players are indexed from 1
      this.updatePlayerNumbers();
    },
    updatePlayerNumbers() {
      this.players.forEach((player, index) => {
        player.number = index + 1; // Start player number indexing from 1
      });
    }
  }
};
</script>
