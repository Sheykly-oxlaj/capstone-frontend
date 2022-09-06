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
</template>

<style></style>
