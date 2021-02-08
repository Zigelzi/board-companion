<template>
  <div class="pt-4">
    <h4 class="text-m text-center">Gross Points for</h4>
    <p class="text-3xl text-center">{{ player.name }}</p>
    <div class="flex justify-between">
      <div v-if="!firstPlayer">
        <v-button
          ><router-link
            :to="{
              name: 'CalculateIndustryPoints',
              params: { playerNumber: player.number - 1 }
            }"
            >Previous player</router-link
          ></v-button
        >
      </div>
      <v-button
        ><router-link
          :to="{
            name: 'CalculateCharPoints',
            params: { playerNumber: player.number }
          }"
          >To character points</router-link
        ></v-button
      >
    </div>
    <v-score-input
      class="mt-4"
      :content="player.score.victoryPoints"
      key="victory-points"
      @valueUpdated="updatePoints"
    />
  </div>
</template>
<script>
import ScoreInput from "@/components/ScoreInput.vue";

export default {
  name: "CalculateGrossPoints",
  components: {
    "v-score-input": ScoreInput
  },
  props: {
    playerNumber: Number
  },
  computed: {
    player() {
      return this.$store.getters.getPlayerByNumber(this.playerNumber);
    },
    firstPlayer() {
      if (this.player.number === 1) {
        return true;
      } else {
        return false;
      }
    }
  },
  methods: {
    updatePoints() {
      this.$store.commit("updatePlayerState", this.player);
    }
  }
};
</script>
