<template>
  <div id="score-calculator">
    <div>
      <h2>Player Score</h2>
      <p>{{ score.total }}</p>
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
          <div
            v-for="(character, name, index) in score.characterPoints"
            :key="`characterMultipliers-${index}`"
            class="character-card"
          >
            <h3>Character Points</h3>
            <v-score-input :content="character" @valueUpdated="updateScore" />
            <div>
              <p>Points: {{ character.calculatedPoints }}</p>
            </div>
          </div>
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
            grossPoints: 0,
            calculatedPoints: 0
          },
          military: {
            name: "Military",
            multiplier: 0,
            grossPoints: 0,
            calculatedPoints: 0
          },
          science: {
            name: "Science",
            multiplier: 0,
            grossPoints: 0,
            calculatedPoints: 0
          },
          economy: {
            name: "Economy",
            multiplier: 0,
            grossPoints: 0,
            calculatedPoints: 0
          },
          discovery: {
            name: "Discovery",
            multiplier: 0,
            grossPoints: 0,
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
      if (updatedField.name === "Victory Points") {
        this.calculateAllCategoryPoints(this.score.industryPoints);
      } else {
        this.calculateIndustryPoints(updatedField);
      }
      if (this.isCharacterField(updatedField)) {
        this.calculateCharacterPoints(updatedField);
      }

      this.calculateTotalPoints();
    },

    calculateIndustryPoints(industry) {
      industry.calculatedPoints =
        this.score.victoryPoints.grossPoints * industry.multiplier;
    },
    calculateAllCategoryPoints(category) {
      let totalCategoryPoints = 0;
      if (this.isCharacterPoints(category)) {
        for (var characterKey in category) {
          this.calculateCharacterPoints(category[characterKey]);
          totalCategoryPoints += category[characterKey].calculatedPoints;
        }
      } else {
        for (var industryKey in category) {
          this.calculateIndustryPoints(category[industryKey]);
          totalCategoryPoints += category[industryKey].calculatedPoints;
        }
      }
      return totalCategoryPoints;
    },
    isCharacterField(field) {
      if (field.name === "Generals" || field.name === "Financers") {
        return true;
      } else {
        return false;
      }
    },
    isCharacterPoints(category) {
      if (Object.is(category, this.score.characterPoints)) {
        return true;
      } else {
        return false;
      }
    },
    calculateCharacterPoints(character) {
      character.calculatedPoints = character.grossPoints * character.multiplier;
    },
    calculateTotalPoints() {
      // console.log(this.score.industryPoints);
      // console.log(this.score.characterPoints);
      let totalIndustryPoints = this.calculateAllCategoryPoints(
        this.score.industryPoints
      );
      let totalCharacterPoints = this.calculateAllCategoryPoints(
        this.score.characterPoints
      );
      this.score.total = totalIndustryPoints + totalCharacterPoints;
    }
  }
};
</script>

<style lang="scss">
.industry-card {
  padding: 25px 0;
}
</style>
