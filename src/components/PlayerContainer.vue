<template>
  <div>
    <v-add-player @playerAdded="addPlayer" />
    <v-player-table />
  </div>
</template>
<script>
import AddPlayer from "@/components/AddPlayer.vue";
import PlayerTable from "@/components/PlayerTable.vue";

export default {
  components: {
    "v-add-player": AddPlayer,
    "v-player-table": PlayerTable
  }
};
</script>
