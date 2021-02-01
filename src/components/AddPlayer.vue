<template>
  <div>
    <h4 class="text-xl mb-2">Add new player</h4>
    <form class="">
      <label for="playerName" class="block">Player Name</label>
      <div class="flex mb-4">
        <input
          class="py-2 px-2 text-gray-700"
          type="text"
          name="playerName"
          id="playerName"
          v-model="playerName"
          @submit="addPlayer"
        />
        <input
          class="px-2 bg-gray-400 text-gray-700"
          type="submit"
          @click.prevent="addPlayer"
          value="Add Player"
        />
      </div>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      playerName: ""
    };
  },
  methods: {
    addPlayer() {
      this.$store.commit("addPlayer", this.playerName);
      this.playerName = "";
    }
  }
};
</script>
