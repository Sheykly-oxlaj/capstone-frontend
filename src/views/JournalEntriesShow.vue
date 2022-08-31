<script>
import axios from "axios";

export default {
  data: function () {
    return {
      journalEntry: {},
    };
  },
  created: function () {
    axios.get("/journal-entries/" + this.$route.params.id + ".json").then((response) => {
      this.journalEntry = response.data;
    });
  },
  methods: {
    destroyJournalEntry: function () {
      axios.delete("/journal-entries/" + this.$route.params.id + ".json").then((response) => {
        console.log("IT GONE!", response.data);
        this.$router.push("/journal-entries");
      });
    },
  },
};
</script>

<template>
  <div class="journal_entry-show">
    <div class="container">
      <h1>{{ journal.name }}</h1>
      <router-link to="/journals">Return to All Journals</router-link>
      |
      <router-link v-bind:to="`/journal-entries`">Add Journal Entry</router-link>
      <div>
        <!-- uses v-bind since the links have dynamic attributes… -->
        <button v-on:click="destroyJournalEntry()">Delete this Journal Entry</button>
      </div>
    </div>
  </div>
</template>

<style>
img {
  max-width: 200px;
  max-height: 300px;
}
</style>
