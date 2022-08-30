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
  <div class="home">
    <h1>{{ message }}</h1>
    <div v-for="journal in journals" v-bind:key="journal.id">
      <router-link :to="`/journals/${journal.id}`">
        <h2>{{ journal.name }}</h2>
      </router-link>
    </div>
  </div>
</template>

<style></style>
