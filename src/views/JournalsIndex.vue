<script>
import axios from "axios";
export default {
  data: function () {
    return {
      message: "My Journals!",
      journals: [],
      journal: {},
    };
  },
  created: function () {
    this.indexJournal();
  },
  methods: {
    indexJournal: function () {
      axios.get("/journals").then((response) => {
        console.log("journals index", response);
        this.journals = response.data;
      });
    },
    showJournal: function () {
      axios.get("/journals/" + this.$route.params.id + ".json").then((response) => {
        this.journal = response.data;
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
          <div class="row">
            <!-- Sidebar -->
            <div id="sidebar" class="col-4 col-12-medium" v-for="journal in journals" v-bind:key="journal.id">
              <!-- Highlights -->

              <section>
                <ul class="divided">
                  <li>
                    <!-- Highlight -->
                    <article class="box highlight">
                      <header>
                        <h3>
                          <router-link :to="`/journals/${journal.id}`">
                            <h2>{{ journal.name }}</h2>
                          </router-link>
                        </h3>
                      </header>

                      <p>
                        {{ journal.description }}
                      </p>
                      <ul class="actions">
                        <li>
                          <router-link :to="`/journals/${journal.id}`" class="button icon solid fa-file">
                            Take a look inside?
                          </router-link>
                        </li>
                      </ul>
                      <div>________________</div>
                    </article>
                  </li>
                </ul>
              </section>
            </div>
          </div>
          <router-link v-bind:to="`/journals/new`" class="button icon solid fa-file">New Journal</router-link>
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

<style></style>
