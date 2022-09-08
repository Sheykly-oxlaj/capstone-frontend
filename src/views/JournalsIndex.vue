<script>
import axios from "axios";
export default {
  data: function () {
    return {
      message: "                ",
      journals: [],
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
  },
};
</script>

<template>
  <body class="left-sidebar is-preload">
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

      <section id="main">
        <div class="container">
          <div class="row">
            <!-- Sidebar -->
            <div>{{ message }}</div>
            <div id="sidebar" class="col-4 col-12-medium">
              <!-- Highlights -->
              <section>
                <ul class="divided">
                  <li>
                    <!-- Highlight -->
                    <article class="box highlight" v-for="journal in journals" v-bind:key="journal.id">
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
                            Take a look
                          </router-link>
                        </li>
                      </ul>
                    </article>
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>

    <!-- <div class="journals">
      <h1>{{ message }}</h1>
      <div v-for="journal in journals" v-bind:key="journal.id">
        <router-link :to="`/journals/${journal.id}`">
          <h2>{{ journal.name }}</h2>
        </router-link>
        <p>{{ journal.description }}</p>
      </div>
       <router-link v-bind:to="`/journals/new`">New Journal</router-link> -->
    <!-- > -->

    <section id="footer">
      <ul class="links">
        <li>&copy; Untitled. All rights reserved.</li>
        <li>
          Design:
          <a href="http://html5up.net">HTML5 UP</a>
        </li>
      </ul>
    </section>
  </body>
</template>

<style></style>
