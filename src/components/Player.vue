<template>
  <div class="flex justify-between items-center mb-2">
    <p>{{ player.number }} - {{ player.name }}</p>
    <button class="p-3 bg-red-500" @click="removePlayer">X</button>
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
<style>
/* .player {
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
} */
</style>
