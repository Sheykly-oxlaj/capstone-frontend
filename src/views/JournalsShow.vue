<script>
import axios from "axios";

export default {
  data: function () {
    return {
      journal: {},
    };
  },
  created: function () {
    axios.get("/journals/" + this.$route.params.id + ".json").then((response) => {
      this.journal = response.data;
    });
  },
  // methods: {
  //   destroyJournal: function () {
  //     axios.delete("/journals/" + this.$route.params.id + ".json").then((response) => {
  //       console.log("IT GONE!", response.data);
  //       this.$router.push("/journals");
  //     });
  //   },
  // },
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
            <div id="sidebar" class="col-4 col-12-medium">
              <!-- Excerpts -->
              <section>
                <ul class="divided">
                  <li>
                    <!-- Excerpt -->
                    <article class="box excerpt" v-for="journal_entry in journal" v-bind:key="journal_entry.id">
                      <header>
                        <span class="date">date</span>
                        <h3>
                          <router-link
                            :to="`/journals/${this.$route.params.id}/journal-entries/${journal_entry.title}`"
                          >
                            {{ journal_entry.title }}
                          </router-link>
                        </h3>
                      </header>
                      <p>
                        {{ journal_entry.text }}
                      </p>
                      <br />
                    </article>
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </div>
        <div>
          <div>
            <button @click="$router.push('/journals')">Return to All Journals</button>
            |
            <button @click="$router.push(`/journals/${this.$route.params.id}/journal-entries`)">
              Add Journal Entry
            </button>
          </div>
        </div>
      </section>

      <!-- Footer -->
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

<style>
img {
  max-width: 200px;
  max-height: 300px;
}
</style>
