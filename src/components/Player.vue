<template>
  <div class="player">
    <p>{{ player.number }} - {{ player.name }}</p>
    <button class="player-remove-button" @click="removePlayer">X</button>
  </div>
</template>
<script>
export default {
  props: {
    player: Object
  },
  methods: {
    removePlayer() {
      this.$emit("playerRemoved1", this.player);
    }
  }
};
</script>
<style lang="scss">
.player {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

.player-remove-button {
  border: none;
  padding: 10px;
  background: tomato;
  font-weight: 600;
}
</style>
