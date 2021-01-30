<template>
  <form class="input-container">
    <label for="playerName" class="player-input-label">Player Name </label>
    <input
      class="player-input"
      type="text"
      name="playerName"
      id="playerName"
      v-model="playerName"
      @submit="addPlayer"
    />
    <input type="submit" @click.prevent="addPlayer" value="Add Player" />
  </form>
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
      this.$emit("playerAdded", this.playerName);
      this.playerName = "";
    }
  }
};
</script>

<style scoped>
.player-input,
.player-input-label {
  display: block;
}

.player-input {
  padding: 10px 0;
  margin: 10px 0;
}
</style>
