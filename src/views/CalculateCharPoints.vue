<template>
  <div>
    <div class="pt-4">
      <h4 class="text-xl text-center">Character Points for</h4>
      <p class="text-2xl text-center">Matti Möttönen</p>
      <div class="flex justify-between">
        <v-button
          ><router-link :to="{ name: 'CalculateGrossPoints' }"
            >To gross points</router-link
          ></v-button
        >
        <v-button
          ><router-link :to="{ name: 'CalculateIndustryPoints' }"
            >To industry points</router-link
          ></v-button
        >
      </div>
      <div class="mt-6">
        <div
          v-for="(character, name, index) in score.characterPoints"
          :key="`characterMultipliers-${index}`"
          class="character-card"
        >
          <v-score-input
            :content="character"
            @valueUpdated="updateTotalScore"
          />
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
  data() {
    return {
      score: {
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
  }
};
</script>
