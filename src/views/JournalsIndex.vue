<script>
import axios from "axios";
export default {
  data: function () {
    return {
      message: "All Journals!",
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
            <div id="sidebar" class="col-4 col-12-medium">
              <!-- Highlights -->
              <section>
                <ul class="divided">
                  <li>
                    <!-- Highlight -->
                    <article class="box highlight">
                      <header>
                        <h3><a href="#">Something of note</a></h3>
                      </header>
                      <a href="#" class="image left"><img src="images/pic06.jpg" alt="" /></a>
                      <p>
                        Phasellus sed laoreet massa id justo mattis pharetra. Fusce suscipit ligula vel quam viverra sit
                        amet mollis tortor congue magna lorem ipsum dolor et quisque ut odio facilisis convallis. Etiam
                        non nunc vel est suscipit convallis non id orci. Ut interdum tempus facilisis convallis. Etiam
                        non nunc vel est suscipit convallis non id orci.
                      </p>
                      <ul class="actions">
                        <li><a href="#" class="button icon solid fa-file">Learn More</a></li>
                      </ul>
                    </article>
                  </li>
                  <li>
                    <!-- Highlight -->
                    <article class="box highlight">
                      <header>
                        <h3><a href="#">Something of less note</a></h3>
                      </header>
                      <a href="#" class="image left"><img src="images/pic07.jpg" alt="" /></a>
                      <p>
                        Phasellus sed laoreet massa id justo mattis pharetra. Fusce suscipit ligula vel quam viverra sit
                        amet mollis tortor congue magna lorem ipsum dolor et quisque ut odio facilisis convallis. Etiam
                        non nunc vel est suscipit convallis non id orci. Ut interdum tempus facilisis convallis. Etiam
                        non nunc vel est suscipit convallis non id orci.
                      </p>
                      <ul class="actions">
                        <li><a href="#" class="button icon solid fa-file">Learn More</a></li>
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

    <div class="journals">
      <h1>{{ message }}</h1>
      <div v-for="journal in journals" v-bind:key="journal.id">
        <router-link :to="`/journals/${journal.id}`">
          <h2>{{ journal.name }}</h2>
        </router-link>
        <p>{{ journal.description }}</p>
      </div>
      <!-- <router-link v-bind:to="`/journals/new`">New Journal</router-link> -->
      <button @click="$router.push('/journals/new')">New Journal</button>
    </div>
  </body>
</template>

<style></style>
