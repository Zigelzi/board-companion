<template>
  <div id="index" class="flex justify-center mt-12">
    <v-button>
      <router-link :to="{ name: 'NewGame' }">New Game</router-link>
    </v-button>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>
