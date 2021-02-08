<template>
  <div id="index" class=" my-8">
    <div>
      <h3 class="text-2xl mb-2 text-center">How it works</h3>
      <div class="bg-gray-300 px-2 py-4 mb-4">
        <div class="mb-2">
          <div
            class="text-2xl rounded-full bg-gray-100 h-10 w-10 inline-flex items-center justify-center text-gray-800"
          >
            1
          </div>
          <h4 class=" ml-2 text-lg text-gray-800 inline-block">
            Add players
          </h4>
        </div>
        <p class="text-gray-800">
          Start by adding the players who will participate to the game
        </p>
      </div>
      <div class="bg-gray-300 px-2 py-4 mb-4">
        <div class="mb-2">
          <div
            class="text-2xl rounded-full bg-gray-100 h-10 w-10 inline-flex items-center justify-center text-gray-800"
          >
            2
          </div>
          <h4 class=" ml-2 text-lg text-gray-800 inline-block">
            Play the game
          </h4>
        </div>
        <p class="text-gray-800 mb-1">
          Play the game with your friends and try to have fun!
        </p>
        <p class="text-gray-800">
          When you've finished the last round, start counting the score.
        </p>
      </div>
      <div class="bg-gray-300 px-2 py-4 mb-4">
        <div class="mb-2">
          <div
            class="text-2xl rounded-full bg-gray-100 h-10 w-10 inline-flex items-center justify-center text-gray-800"
          >
            3
          </div>
          <h4 class=" ml-2 text-lg text-gray-800 inline-block">
            Calculate players points
          </h4>
        </div>
        <p class="text-gray-800 mb-1">
          Go though each player and add how many gross points player has, insert
          the industry multiplier and number of cards they had for each industry
          and lastly the character points and their multipliers.
        </p>
      </div>
      <div class="bg-gray-300 px-2 py-4 mb-4">
        <div class="mb-2">
          <div
            class="text-2xl rounded-full bg-gray-100 h-10 w-10 inline-flex items-center justify-center text-gray-800"
          >
            4
          </div>
          <h4 class=" ml-2 text-lg text-gray-800 inline-block">
            See the winner
          </h4>
        </div>
        <p class="text-gray-800 mb-1">
          The app will calculate each players total score and tell who's the
          winner!
        </p>
        <p class="text-gray-800 mb-1">
          You can review and edit the scores afterwards if you find that
          something didn't match.
        </p>
      </div>
    </div>
    <div class="flex justify-center">
      <v-button>
        <router-link class="text-3xl" :to="{ name: 'NewGame' }"
          >Start Game</router-link
        >
      </v-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>
