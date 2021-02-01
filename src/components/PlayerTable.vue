<template>
  <div>
    <h2 class="text-xl">Players</h2>
    <div v-if="players.length != 0">
      <v-player
        v-for="player in players"
        :key="player.number"
        :player="player"
        @playerRemoved1="removePlayer"
      />
    </div>
    <div v-else>
      <p>No players in the game!</p>
    </div>
  </div>
</template>
<script>
import Player from "@/components/Player.vue";
export default {
  components: {
    "v-player": Player
  },
  methods: {
    removePlayer(player) {
      this.$store.commit("removePlayer", player);
    }
  },
  computed: {
    players() {
      return this.$store.getters.getPlayers;
    }
  }
};
</script>
