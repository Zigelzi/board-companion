<template>
  <div>
    <form class="">
      <label for="playerName" class="block mb-1">Player Name</label>
      <div class="flex mb-4">
        <input
          class="py-2 px-2 text-gray-800"
          type="text"
          name="playerName"
          id="playerName"
          v-model="playerName"
          @submit="addPlayer"
        />
        <input
          class="px-2 bg-gray-400 text-gray-800"
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
