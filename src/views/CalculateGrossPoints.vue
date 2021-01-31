<template>
  <div class="pt-4">
    <h4 class="text-xl text-center">Gross Points for</h4>
    <p class="text-2xl text-center">Matti Möttönen</p>
    <div class="flex justify-end">
      <v-button
        ><router-link :to="{ name: 'CalculateCharPoints' }"
          >To character points</router-link
        ></v-button
      >
    </div>
    <v-score-input
      class="mt-4"
      :content="score.victoryPoints"
      key="victory-points"
      @valueUpdated="updateTotalScore"
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
  data() {
    return {
      score: {
        victoryPoints: {
          name: "Victory Points",
          grossPoints: 0
        }
      }
    };
  }
};
</script>
