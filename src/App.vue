<template>
  <!-- <nav>
    <router-link to="/">Home</router-link>
    |
    <router-link to="/signup">Signup</router-link>
    |
    <router-link to="/login">Login</router-link>
    |
    <router-link to="/logout">Logout</router-link>
    |
    <router-link to="/journals">All my Journals</router-link>
|
    <router-link to="/journals/:id">One journal</router-link> -->
  <!-- |
    <router-link to="/journals/new">New journal</router-link> -->
  <!-- Displayed in all my journals -->
  <!-- |
    <router-link to="/journal-entries/:id">Entry</router-link> -->
  <!-- displayed in journalsIndex/JournalsShow/ -->
  <!-- </nav> -->

  <head>
    <head>
      <title>Left Sidebar - Strongly Typed by HTML5 UP</title>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
      <link rel="stylesheet" href="assets/css/main.css" />
    </head>
  </head>

  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
