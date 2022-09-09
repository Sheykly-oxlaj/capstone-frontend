<script>
import axios from "axios";

export default {
  data: function () {
    return {
      newUserParams: {},
      errors: [],
    };
  },
  methods: {
    submit: function () {
      axios
        .post("/users", this.newUserParams)
        .then((response) => {
          console.log(response.data);
          this.$router.push("/login");
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
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
          <div class="signup">
            <form v-on:submit.prevent="submit()">
              <div>
                <label>Name:</label>
                <input type="text" v-model="newUserParams.name" />
              </div>
              <div>
                <label>Email:</label>
                <input type="email" v-model="newUserParams.email" />
              </div>
              <div>
                <label>Password:</label>
                <input type="password" v-model="newUserParams.password" />
              </div>
              <div>
                <label>Password confirmation:</label>
                <input type="password" v-model="newUserParams.password_confirmation" />
              </div>
              <br />
              <input type="submit" value="SignUp" />
              <br />
              <div v-for="error in errors" v-bind:key="error">{{ error }}</div>
            </form>
          </div>
        </div>
      </div>
    </section>
    <section id="footer">
      <ul class="links">
        <li>&copy; Untitled. All rights reserved.</li>
        <li>
          Design:
          <a href="http://html5up.net">HTML5 UP</a>
        </li>
      </ul>
    </section>
  </div>
</template>
