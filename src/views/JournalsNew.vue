<script>
import axios from "axios";
export default {
  data: function () {
    return {
      newJournalParams: {},
      errors: [],
    };
  },
  created: function () {},
  methods: {
    createJournal: function () {
      axios
        .post("/journals", this.newJournalParams)
        .then((response) => {
          console.log("journals create", response);
          this.$router.push("/journals");
        })
        .catch((error) => {
          console.log("journals create error", error.response);
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>

<template>
  <body class="no-sidebar is-preload">
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
              <a href="/journals">All my Journals</a>
              |
              <a href="/logout">Logout</a>
            </p>
          </nav>
        </div>
      </section>
      <!-- Main -->
      <section id="main">
        <div class="container">
          <div class="journals-new">
            <h1>New Journal</h1>
            <form v-on:submit.prevent="createJournal()">
              <ul>
                <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
              </ul>
              <div>
                Name:
                <input type="text" v-model="newJournalParams.name" />
              </div>
              <div>
                Description:
                <input type="text" v-model="newJournalParams.description" />
              </div>
              <input type="submit" value="Create" />
            </form>
          </div>
        </div>
      </section>

      <!-- <div class="journals">
      <h1>{{ message }}</h1>
      <div v-for="journal in journals" v-bind:key="journal.id">
        <router-link :to="`/journals/${journal.id}`">
          <h2>{{ journal.name }}</h2>
        </router-link>
        <p>{{ journal.description }}</p>
      </div>
    <router-link v-bind:to="`/journals/new`">New Journal</router-link>
    
     Footer -->

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
  </body>
</template>
