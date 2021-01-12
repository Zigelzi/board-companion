<template>
  <div>
    <div class="score-input-container" v-if="pointsFieldExists">
      <label class="score-input-label" :for="field.name">{{
        field.name
      }}</label>
      <div class="score-button-container">
        <button class="btn-counter" @click="decrement('points')">
          -
        </button>

        <input
          type="number"
          class="score-input"
          :name="field.name"
          :id="field.name"
          v-model="field.points"
        />
        <button class="btn-counter" @click="increment('points')">+</button>
      </div>
    </div>
    <div class="score-input-container" v-if="comboFieldExists">
      <label class="score-input-label" :for="field.name + '-combo'"
        >{{ field.name }} Combo</label
      >
      <div class="score-button-container">
        <button class="btn-counter" @click="decrement('combo')">
          -
        </button>
        <input
          type="number"
          class="score-input"
          :name="field.name + '-combo'"
          :id="field.name + '-combo'"
          v-model="field.combo"
        />

        <button class="btn-counter" @click="increment('combo')">+</button>
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
    increment(fieldType) {
      if (fieldType === "points") {
        this.field.points++;
        this.$emit("scoreUpdated", this.field.points);
      } else {
        this.field.combo++;
        this.$emit("scoreUpdated", this.field.combo);
      }
    },
    decrement(fieldType) {
      if (fieldType === "points") {
        if (this.field.points > 0) {
          this.field.points--;
          this.$emit("scoreUpdated", this.field.points);
        }
      } else {
        if (this.field.combo > 0) {
          this.field.combo--;
          this.$emit("scoreUpdated", this.field.combo);
        }
      }
    },
    fieldContainsKey(field, key) {
      return Object.keys(field).includes(key);
    }
  },
  computed: {
    pointsFieldExists() {
      return this.fieldContainsKey(this.field, "points");
    },
    comboFieldExists() {
      return this.fieldContainsKey(this.field, "combo");
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
