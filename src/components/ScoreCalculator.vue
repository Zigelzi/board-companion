<template>
  <div id="score-calculator">
    <div>
      <h2>Player Score</h2>
      <div id="score-form">
        <div class="points-container">
          <h3>Gross Points</h3>
          <v-score-input
            :content="score.victoryPoints"
            key="victory-points"
            @valueUpdated="updateScore"
          />
        </div>
        <div class="character-point-container">
          <h3>Character Points</h3>
          <v-score-input
            v-for="(character, name, index) in score.characterPoints"
            :key="`characterMultipliers-${index}`"
            :content="character"
            @valueUpdated="updateScore"
          />
        </div>
        <div class="industry-point-container">
          <h3>Industry Points</h3>
          <div
            v-for="(industry, name, index) in score.industryPoints"
            :key="`industry-${index}`"
            class="industry-card"
          >
            <v-score-input :content="industry" @valueUpdated="updateScore" />
            <div>
              <p>Points: {{ industry.calculatedPoints }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ScoreInput from "@/components/ScoreInput.vue";
export default {
  components: {
    "v-score-input": ScoreInput
  },
  data() {
    return {
      score: {
        total: 0,
        victoryPoints: {
          name: "Victory Points",
          grossPoints: 0
        },
        characterPoints: {
          generals: {
            name: "Generals",
            multiplier: 0,
            grossPoints: 0,
            calculatedPoints: 0
          },
          financers: {
            name: "Financers",
            multiplier: 0,
            grossPoints: 0,
            calculatedPoints: 0
          }
        },
        industryPoints: {
          industry: {
            name: "Industry",
            multiplier: 0,
            calculatedPoints: 0
          },
          military: {
            name: "Military",
            multiplier: 0,
            calculatedPoints: 0
          },
          science: {
            name: "Science",
            multiplier: 0,
            calculatedPoints: 0
          },
          economy: {
            name: "Economy",
            multiplier: 0,
            calculatedPoints: 0
          },
          discovery: {
            name: "Discovery",
            multiplier: 0,
            calculatedPoints: 0
          }
        },
        characterMultipliers: {
          generals: {
            name: "Generals",
            calculatedPoints: 0
          },
          financers: {
            name: "Financers",
            calculatedPoints: 0
          }
        }
      }
    };
  },
  methods: {
    updateScore(updatedField) {
      // Update industry points when GP updates
      // Calculate Industry scores
      this.calculateIndustryPoints(updatedField);
      // Calculate General Scores
      // Calculate Financer scores
    },
    calculateIndustryPoints(industry) {
      industry.calculatedPoints =
        this.score.victoryPoints.grossPoints * industry.multiplier;
    }
  }
};
</script>

<style lang="scss">
.industry-card {
  padding: 25px 0;
}
</style>
