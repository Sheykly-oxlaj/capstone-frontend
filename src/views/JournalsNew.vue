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
      <input type="submit" value="Create" />
    </form>
  </div>
</template>
