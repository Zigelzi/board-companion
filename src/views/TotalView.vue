<template>
  <div class="py-6">
    <div class="text-center">
      <p class="">The winner of the game is</p>
      <h4 class="text-4xl my-2">{{ winner.name }}</h4>
      <p>with</p>
      <p class="text-4xl my-2">{{ winner.score.total }}</p>
      <p>points</p>
    </div>
    <div class="mt-6">
      <h4 class="text-2xl py-4 text-center">Score breakdown</h4>
      <table class="mx-auto">
        <thead>
          <tr>
            <th class="px-2 border-b-2">Player</th>
            <th class="px-2 border-b-2">GP</th>
            <th class="px-2 border-b-2">F</th>
            <th class="px-2 border-b-2">G</th>
            <th class="px-2 border-b-2">I</th>
            <th class="px-2 border-b-2">M</th>
            <th class="px-2 border-b-2">S</th>
            <th class="px-2 border-b-2">E</th>
            <th class="px-2 border-b-2">D</th>
            <th class="px-2 border-b-2">Tot.</th>
          </tr>
        </thead>
        <tbody>
          <tr
            class="border-b"
            v-for="player in sortedPlayers"
            :key="player.number"
          >
            <td class="p-2">{{ player.name }}</td>
            <td class="p-2">{{ player.score.victoryPoints.grossPoints }}</td>
            <td class="p-2">
              {{
                player.score.characterPoints.financers.grossPoints *
                  player.score.characterPoints.financers.multiplier
              }}
            </td>
            <td class="p-2">
              {{
                player.score.characterPoints.generals.grossPoints *
                  player.score.characterPoints.generals.multiplier
              }}
            </td>
            <td class="p-2">
              {{
                player.score.industryPoints.industry.grossPoints *
                  player.score.industryPoints.industry.multiplier
              }}
            </td>
            <td class="p-2">
              {{
                player.score.industryPoints.military.grossPoints *
                  player.score.industryPoints.military.multiplier
              }}
            </td>
            <td class="p-2">
              {{
                player.score.industryPoints.science.grossPoints *
                  player.score.industryPoints.science.multiplier
              }}
            </td>
            <td class="p-2">
              {{
                player.score.industryPoints.economy.grossPoints *
                  player.score.industryPoints.economy.multiplier
              }}
            </td>
            <td class="p-2">
              {{
                player.score.industryPoints.discovery.grossPoints *
                  player.score.industryPoints.discovery.multiplier
              }}
            </td>
            <td class="p-2">{{ player.score.total }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  name: "TotalView",
  computed: {
    sortedPlayers() {
      return this.$store.getters.getSortedPlayers(true);
    },
    winner() {
      return this.sortedPlayers[0];
    }
  }
};
</script>
