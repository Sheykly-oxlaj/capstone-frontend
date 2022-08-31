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
  <div class="journals-show">
    <div v-for="journal_entry in journal" v-bind:key="journal_entry.id">
      <router-link :to="`/journal-entries/${journal_entry.id}`">{{ journal_entry.title }}</router-link>
      <p>{{ journal_entry.text }}</p>
      <!-- would like to add a created at -->
    </div>
    <router-link to="/journals">Return to All Journals</router-link>
    |
    <router-link v-bind:to="`/journal-entries`">Add Journal Entry</router-link>
    <div>
      <!-- uses v-bind since the links have dynamic attributes… -->
      <!-- <button v-on:click="destroyJournal()">Delete this Journal</button> -->
      <!-- I dont have a delete function -->
    </div>
  </div>
</template>

<style>
img {
  max-width: 200px;
  max-height: 300px;
}
</style>
