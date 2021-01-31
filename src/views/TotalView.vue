<template>
  <div class="py-6">
    <div class="text-center">
      <p class="">The winner of the game is</p>
      <h4 class="text-4xl my-2">Matti Möttönen</h4>
      <p>with</p>
      <p class="text-4xl my-2">41</p>
      <p>points</p>
    </div>
    <div class="mt-6">
      <h4 class="text-lg">Score breakdown</h4>
      <table>
        <thead>
          <tr>
            <th>Player</th>
            <th>GP</th>
            <th>F</th>
            <th>G</th>
            <th>I</th>
            <th>M</th>
            <th>S</th>
            <th>D</th>
            <th>Tot.</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Matti Möttönen</td>
            <td>20</td>
            <td>12</td>
            <td>0</td>
            <td>5</td>
            <td>4</td>
            <td>0</td>
            <td>0</td>
            <td>41</td>
          </tr>
          <tr>
            <td>Erkki Esimerkki</td>
            <td>5</td>
            <td>12</td>
            <td>0</td>
            <td>5</td>
            <td>4</td>
            <td>0</td>
            <td>0</td>
            <td>27</td>
          </tr>
          <tr>
            <td>Tauno Palo</td>
            <td>5</td>
            <td>5</td>
            <td>0</td>
            <td>5</td>
            <td>4</td>
            <td>0</td>
            <td>0</td>
            <td>19</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  name: "TotalView"
};
</script>
