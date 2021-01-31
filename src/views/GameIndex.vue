<template>
  <div>
    <div>
      <h4 class="text-3xl">Wonderful World</h4>
      <p>31.1.2021</p>
      <v-button
        ><router-link :to="{ name: 'CalculateGrossPoints' }"
          >Calculate Scores</router-link
        >
      </v-button>
    </div>
    <div class="my-4">
      <h4>Players</h4>
      <p>Matti Möttönen</p>
      <p>Erkki Esimerkki</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "GameIndex"
};
</script>
