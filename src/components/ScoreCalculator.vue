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
            @valueUpdated="updateTotalScore"
          />
        </div>
        <div class="character-point-container">
          <div
            v-for="(character, name, index) in score.characterPoints"
            :key="`characterMultipliers-${index}`"
            class="character-card"
          >
            <h3>Character Points</h3>
            <v-score-input
              :content="character"
              @valueUpdated="updateTotalScore"
            />
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
            <v-score-input
              :content="industry"
              @valueUpdated="updateTotalScore"
            />
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
            grossPoints: 0
          },
          financers: {
            name: "Financers",
            multiplier: 0,
            grossPoints: 0
          }
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
        }
      }
    };
  },
  methods: {
    updateTotalScore() {
      let industryTotal = 0;
      let characterTotal = 0;
      for (let industryKey in this.score.industryPoints) {
        let industry = this.score.industryPoints[industryKey];
        industryTotal += industry.grossPoints * industry.multiplier;
      }
      for (let characterKey in this.score.characterPoints) {
        let character = this.score.characterPoints[characterKey];
        characterTotal += character.grossPoints * character.multiplier;
      }
      this.score.total =
        this.score.victoryPoints.grossPoints + industryTotal + characterTotal;
    }
  }
};
</script>
