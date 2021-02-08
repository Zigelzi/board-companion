<template>
  <div class="mt-8">
    <div>
      <h4 class="text-2xl mb-2">2 - Play the game</h4>
      <p class="mb-1">Chill, have fun and play the four rounds as usual.</p>
      <p>When you're done, start calculating each player score</p>
      <v-button
        ><router-link
          :to="{ name: 'CalculateGrossPoints', params: { playerNumber: 1 } }"
          >Calculate Scores</router-link
        >
      </v-button>
    </div>
    <div class="my-4">
      <v-player-table />
    </div>
  </div>
</template>
<script>
import PlayerTable from "@/components/PlayerTable";
export default {
  name: "GameIndex",
  components: {
    "v-player-table": PlayerTable
  }
};
</script>
