<template>
  <div id="index">
    <header>
      <h1>Board Companion</h1>
      <h2>Calculate your board game scores</h2>
    </header>
    <section>
      <v-player-container />
    </section>
    <section>
      <v-score-calculator />
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import PlayerContainer from "@/components/PlayerContainer.vue";
import ScoreCalculator from "@/components/ScoreCalculator.vue";

export default {
  name: "Home",
  components: {
    "v-player-container": PlayerContainer,
    "v-score-calculator": ScoreCalculator
  }
};
</script>
