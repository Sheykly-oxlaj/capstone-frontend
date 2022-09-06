<template>
  <!-- <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div> -->
  <section id="header">
    <div class="container">
      <!-- Logo -->
      <h1 id="logo">
        <router-link to="/login">FOR ME | BY ME</router-link>
      </h1>
      <p>A PLACE TO RECORD MY THOUGHTS</p>

      <!-- Nav -->
      <nav id="nav">
        <h1></h1>

        <p>
          <a href="/login">Login</a>
          |
          <a href="/logout">Logout</a>
          |
          <a href="/journals">All my Journals</a>
        </p>
      </nav>
    </div>
  </section>
</template>

<script>
// // @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

// export default {
//   name: "HomeView",
//   components: {
//     HelloWorld,
//   },
// };
</script>
