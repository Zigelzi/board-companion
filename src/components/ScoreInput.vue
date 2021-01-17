<template>
  <div>
    <div class="score-input-container">
      <label class="score-input-label" :for="field.name">{{
        field.name
      }}</label>
      <div class="score-button-container">
        <button class="btn-counter" @click="decrement">
          -
        </button>

        <input
          type="number"
          class="score-input"
          :name="field.name"
          :id="field.name"
          v-model="field.value"
        />
        <button class="btn-counter" @click="increment">+</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    field: Object
  },
  methods: {
    increment() {
      this.field.value++;
      this.$emit("scoreUpdated", this.field.value);
    },
    decrement() {
      if (this.field.value > 0) {
        this.field.value--;
        this.$emit("scoreUpdated", this.field.value);
      }
    }
  }
};
</script>
<style lang="scss">
.score-input-container {
  margin-bottom: 25px;
}

.score-button-container {
  display: flex;
  justify-content: space-between;
}

.score-input {
  max-width: 100px;
}
.btn-counter {
  background: #cacaca;
  border: none;
  padding: 20px;
  margin: 0 10px;
}
</style>
