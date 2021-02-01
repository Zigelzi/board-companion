<template>
  <div>
    <div>
      <h4 class="text-3xl">Wonderful World</h4>
      <p>31.1.2021</p>
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
