<template>
  <div id="score-calculator">
    <div>
      <h2>Player Score</h2>
      <div id="score-form">
        <v-score-input
          v-for="(category, index) in score.categories"
          :key="index"
          :field="category"
          @scoreUpdated="updateScore"
        />
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
        categories: {
          victory: {
            name: "Victory Points",
            points: 0
          },
          industry: {
            name: "Industry",
            combo: 0
          },
          military: {
            name: "Military",
            combo: 0
          },
          science: {
            name: "Science",
            combo: 0
          },
          economy: {
            name: "Economy",
            combo: 0
          },
          discovery: {
            name: "Discovery",
            combo: 0
          },
          generals: {
            name: "Generals",
            points: 0,
            combo: 0
          },
          financers: {
            name: "Financers",
            points: 0,
            combo: 0
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
