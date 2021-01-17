<template>
  <div id="score-calculator">
    <div>
      <h2>Player Score</h2>
      <div id="score-form">
        <div class="points-container">
          <h3>Points</h3>
          <v-score-input
            v-for="(field, name, index) in score.points"
            :key="`points-${index}`"
            :field="field"
            @scoreUpdated="updateScore"
          />
        </div>
        <div class="multiplier-container">
          <h3>Multipliers</h3>
          <v-score-input
            v-for="(field, name, index) in score.multipliers"
            :key="`multiplier-${index}`"
            :field="field"
            @scoreUpdated="updateScore"
          />
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
        points: {
          victory: {
            name: "Victory Points",
            value: 0
          },
          generals: {
            name: "Generals",
            value: 0
          },
          financers: {
            name: "Financers",
            value: 0
          }
        },
        multipliers: {
          industry: {
            name: "Industry",
            value: 0
          },
          military: {
            name: "Military",
            value: 0
          },
          science: {
            name: "Science",
            value: 0
          },
          economy: {
            name: "Economy",
            value: 0
          },
          discovery: {
            name: "Discovery",
            value: 0
          },
          generals: {
            name: "Generals",
            value: 0
          },
          financers: {
            name: "Financers",
            value: 0
          }
        }
      }
    };
  },
  methods: {
    updateScore() {
      // Calculate VP scores
      this.calculateVictorypoints();
      // Calculate General Scores
      // Calculate Financer scores
    },
    calculateVictorypoints() {
      const iterateObject = obj => {
        console.log(obj);
        Object.keys(obj).forEach(key => {
          console.log(`Key: ${key} - Value: ${obj[key]}`);
          if (typeof obj[key] === "object") {
            iterateObject(obj[key]);
          }
        });
      };
      iterateObject(this.score.categories);
    }
  }
};
</script>
