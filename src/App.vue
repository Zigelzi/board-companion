<template>
  <div id="app">
    <nav id="nav"><router-link to="/">Home</router-link></nav>
    <router-view />
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
  color: #2c3e50;
  padding: 20px 20px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
