<template>
  <div>
    <div class="pt-4">
      <h4 class="text-xl text-center">Industry Points for</h4>
      <p class="text-2xl text-center">Matti Möttönen</p>
      <div class="flex justify-between">
        <v-button
          ><router-link :to="{ name: 'CalculateGrossPoints' }"
            >To character points</router-link
          ></v-button
        >
        <v-button
          ><router-link :to="{ name: 'TotalView' }"
            >View results</router-link
          ></v-button
        >
      </div>
      <div class="mt-6">
        <div
          v-for="(character, name, index) in score.industryPoints"
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
  name: "CalculateIndustryPoints",
  components: {
    "v-score-input": ScoreInput
  },
  data() {
    return {
      score: {
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
        }
      }
    };
  }
};
</script>
