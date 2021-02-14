<template>
  <div>
    <div class="mb-5" v-if="multiplierExist">
      <label class="text-lg text-center block mb-2" :for="content.name">{{
        "Multiplier"
      }}</label>
      <div class="flex justify-between text-gray-700">
        <button
          class="bg-gray-300 mr-4 w-14 h-14 text-3xl flex-none"
          @click="updateMultiplier('decrement')"
        >
          -
        </button>
        <input
          type="number"
          class="text-center text-3xl flex-shrink min-w-0"
          :name="content.name"
          :id="content.name"
          v-model="content.multiplier"
        />
        <button
          class="bg-gray-300 ml-4 w-14 h-14 text-3xl flex-none"
          @click="updateMultiplier('increment')"
        >
          +
        </button>
      </div>
    </div>
    <div class="mb-5" v-if="grossPointsExist">
      <label class="text-lg text-center block mb-2" :for="content.name">{{
        "Tokens"
      }}</label>
      <div class="flex justify-between text-gray-700">
        <button
          class="bg-gray-300 mr-4 w-14 h-14 text-3xl flex-none"
          @click="updateGrossPoints('decrement')"
        >
          -
        </button>
        <input
          type="number"
          class="text-center text-3xl flex-shrink min-w-0"
          :name="content.name"
          :id="content.name"
          v-model="content.grossPoints"
        />
        <button
          class="bg-gray-300 ml-4 w-14 h-14 text-3xl flex-none"
          @click="updateGrossPoints('increment')"
        >
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
