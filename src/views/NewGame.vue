<template>
  <div class="mt-8">
    <h3 class="text-2xl mb-2">1 - Add players</h3>
    <v-button class="mb-4">
      <router-link :to="{ name: 'GameIndex' }">Start game</router-link>
    </v-button>
    <v-player-container />
  </div>
</template>
<script>
import PlayerContainer from "@/components/PlayerContainer";

export default {
  name: "NewGame",
  components: {
    "v-player-container": PlayerContainer
  }
};
</script>
