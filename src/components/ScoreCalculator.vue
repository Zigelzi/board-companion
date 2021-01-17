<template>
  <div id="score-calculator">
    <div>
      <h2>Player Score</h2>
      <div id="score-form">
        <div class="points-container">
          <h3>Gross Points</h3>
          <v-score-input
            :label="score.victoryPoints.name"
            :value="score.victoryPoints.points"
            key="victory-points"
            @valueUpdated="updateScore"
          />
        </div>
        <div class="character-point-container">
          <h3>Character Points</h3>
          <v-score-input
            v-for="(character, name, index) in score.characterPoints"
            :key="`characterPoints-${index}`"
            :label="character.name"
            :value="character.points"
            @valueUpdated="updateScore"
          />
          <v-score-input
            v-for="(character, name, index) in score.characterPoints"
            :key="`characterMultipliers-${index}`"
            :label="character.name"
            :value="character.multiplier"
            @valueUpdated="updateScore"
          />
        </div>
        <div class="industry-point-container">
          <h3>Industry Points</h3>
          <div
            v-for="(industry, name, index) in score.industryPoints"
            :key="`industry-${index}`"
          >
            <v-score-input
              :label="industry.name"
              @valueUpdated="updateScore"
              :value="industry.points"
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
          points: 0
        },
        characterPoints: {
          generals: {
            name: "Generals",
            multiplier: 0,
            points: 0
          },
          financers: {
            name: "Financers",
            multiplier: 0,
            points: 0
          }
        },
        industryPoints: {
          industry: {
            name: "Industry",
            multiplier: 0,
            points: 0
          },
          military: {
            name: "Military",
            multiplier: 0,
            points: 0
          },
          science: {
            name: "Science",
            multiplier: 0,
            points: 0
          },
          economy: {
            name: "Economy",
            multiplier: 0,
            points: 0
          },
          discovery: {
            name: "Discovery",
            multiplier: 0,
            points: 0
          }
        },
        characterMultipliers: {
          generals: {
            name: "Generals",
            points: 0
          },
          financers: {
            name: "Financers",
            points: 0
          }
        }
      }
    };
  },
  methods: {
    updateScore(updatedField) {
      // Calculate VP scores
      this.calculateVictorypoints();
      console.log("Parent:" + updatedField);
      // Calculate General Scores
      // Calculate Financer scores
    },
    calculateVictorypoints() {
      const numberOfMultipliers = Object.keys(this.score.industryPoints).length;
      console.log(numberOfMultipliers);
    }
  }
};
</script>
