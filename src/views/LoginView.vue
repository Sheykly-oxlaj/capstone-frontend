<script>
import axios from "axios";

export default {
  data: function () {
    return {
      newSessionParams: {},
      errors: [],
    };
  },
  methods: {
    submit: function () {
      axios
        .post("/sessions", this.newSessionParams)
        .then((response) => {
          axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.jwt;
          localStorage.setItem("jwt", response.data.jwt);
          this.$router.push("/");
        })
        .catch((error) => {
          console.log(error.response);
          this.errors = ["Invalid email or password."];
          this.email = "";
          this.password = "";
        });
    },
  },
};
</script>

<template>
  <div id="page-wrapper">
    <!-- Header -->
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
            <a href="/">Home</a>
            |
            <a href="/login">Login</a>
            |
            <a href="/logout">Logout</a>
            |
            <a href="/journals">All my Journals</a>
          </p>
        </nav>
      </div>
    </section>
    <section id="main">
      <div class="container">
        <div id="content">
          <div class="login">
            <form v-on:submit.prevent="submit()">
              <ul>
                <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
              </ul>
              <div>
                <label>Email:</label>
                <input type="email" v-model="newSessionParams.email" />
              </div>
              <div>
                <label>Password:</label>
                <input type="password" v-model="newSessionParams.password" />
              </div>
              <br />
              <input type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </div>
    </section>
    <section id="footer">
      <ul class="links">
        <li>&copy; ForMebyMe. All rights reserved.</li>
        <li>
          Design:
          <a href="http://html5up.net">HTML5 UP</a>
        </li>
      </ul>
    </section>
  </div>
</template>
