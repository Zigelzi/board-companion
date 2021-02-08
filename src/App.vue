<template>
  <div id="app">
    <div class="container mx-auto text-gray-200">
      <header class="mb-4 ">
        <h1 class="text-4xl ">Board Companion</h1>
        <h2>Calculate your Wonderful World score</h2>
        <router-link
          class="underline text-blue-300 visited:text-purple-500"
          :to="{ name: 'Index' }"
          >Home</router-link
        >
      </header>
      <router-view />
    </div>
  </div>
</template>

<style>
body {
  margin: 0;
  box-sizing: border-box;
}

p {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
