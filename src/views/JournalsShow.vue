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
  methods: {
    destroyJournal: function () {
      axios.delete("/journals/" + this.$route.params.id + ".json").then((response) => {
        console.log("IT GONE!", response.data);
        this.$router.push("/journals");
      });
    },
  },
};
</script>

<template>
  <div class="journals-show">
    <div class="container">
      <h1>{{ journal.name }}</h1>
      <router-link to="/journals">Return to All Journals</router-link>
      |
      <router-link v-bind:to="`/journal-entries`">Add Journal Entry</router-link>
      <div>
        <!-- uses v-bind since the links have dynamic attributes… -->
        <button v-on:click="destroyJournal()">Delete this Journal</button>
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
