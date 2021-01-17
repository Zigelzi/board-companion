<template>
  <div>
    <div class="score-input-container">
      <label class="score-input-label" :for="label">{{ label }}</label>
      <div class="score-button-container">
        <button class="btn-counter" @click="updateField('decrement')">
          -
        </button>
        <input
          type="number"
          class="score-input"
          :name="label"
          :id="label"
          v-model="value"
        />
        <button class="btn-counter" @click="updateField('increment')">+</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    label: String,
    value: Number
  },
  methods: {
    updateField(updateDirection) {
      console.log(updateDirection);
      if (updateDirection === "increment") {
        this.$emit("valueUpdated", "incremented");
      }
      if (updateDirection === "decrement") {
        if (this.value > 0) {
          this.$emit("valueUpdated", "decremented");
        }
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
