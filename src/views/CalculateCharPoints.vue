<template>
  <div>
    <div class="pt-4">
      <h4 class="text-xl text-center">Character Points for</h4>
      <p class="text-2xl text-center">{{ player.name }}</p>
      <div class="flex justify-between">
        <v-button
          ><router-link
            :to="{
              name: 'CalculateGrossPoints',
              params: { playerNumber: player.number }
            }"
            >To gross points</router-link
          ></v-button
        >
        <v-button
          ><router-link
            :to="{
              name: 'CalculateIndustryPoints',
              params: { playerNumber: player.number }
            }"
            >To industry points</router-link
          ></v-button
        >
      </div>
      <div class="mt-6">
        <div
          v-for="(character, name, index) in player.score.characterPoints"
          :key="`characterMultipliers-${index}`"
          class="character-card"
        >
          <v-score-input :content="character" @valueUpdated="updatePoints" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ScoreInput from "@/components/ScoreInput.vue";

export default {
  name: "CalculateCharPoints",
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
    lastPlayer() {
      const numberOfPlayers = this.$store.getters.getPlayers.length;
      if (this.player.number >= numberOfPlayers) {
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
