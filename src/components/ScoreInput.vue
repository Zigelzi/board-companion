<template>
  <div>
    <div class="score-input-container" v-if="multiplierExist">
      <label class="score-input-label" :for="content.name">{{
        content.name + " multiplier"
      }}</label>
      <div class="score-button-container">
        <button class="btn-counter" @click="updateMultiplier('decrement')">
          -
        </button>
        <input
          type="number"
          class="score-input"
          :name="content.name"
          :id="content.name"
          v-model="content.multiplier"
        />
        <button class="btn-counter" @click="updateMultiplier('increment')">
          +
        </button>
      </div>
    </div>
    <div class="score-input-container" v-if="grossPointsExist">
      <label class="score-input-label" :for="content.name">{{
        content.name + " points"
      }}</label>
      <div class="score-button-container">
        <button class="btn-counter" @click="updateGrossPoints('decrement')">
          -
        </button>
        <input
          type="number"
          class="score-input"
          :name="content.name"
          :id="content.name"
          v-model="content.grossPoints"
        />
        <button class="btn-counter" @click="updateGrossPoints('increment')">
          +
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    content: Object
  },
  methods: {
    updateMultiplier(updateDirection) {
      if (updateDirection === "increment") {
        this.content.multiplier++;
        this.$emit("valueUpdated", this.content);
      }
      if (updateDirection === "decrement") {
        if (this.content.multiplier > 0) {
          this.content.multiplier--;
          this.$emit("valueUpdated", this.content);
        }
      }
    },
    updateGrossPoints(updateDirection) {
      if (updateDirection === "increment") {
        this.content.grossPoints++;
        this.$emit("valueUpdated", this.content);
      }
      if (updateDirection === "decrement") {
        if (this.content.grossPoints > 0) {
          this.content.grossPoints--;
          this.$emit("valueUpdated", this.content);
        }
      }
    },
    checkForKey(object, key) {
      return Object.keys(object).includes(key);
    }
  },
  computed: {
    grossPointsExist() {
      return this.checkForKey(this.content, "grossPoints");
    },
    multiplierExist() {
      return this.checkForKey(this.content, "multiplier");
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

.score-input-label {
  display: block;
  font-size: 18px;
  margin-bottom: 5px;
}
.btn-counter {
  background: #cacaca;
  border: none;
  padding: 20px;
}
</style>
