<script>
import axios from "axios";
export default {
  data: function () {
    return {
      newJournalEntryParams: {},
      errors: [],
    };
  },
  created: function () {},
  methods: {
    createJournalEntry: function () {
      axios
        .journalEntry("/journal-entries", this.newJournalEntryParams)
        .then((response) => {
          console.log("journals create", response);
          this.$router.push("/journal-entries");
          // unsure this is the way it is, might be "/journal-entries"
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
  <div class="journal_entry-new">
    <h1>New Journal Entry</h1>
    <form v-on:submit.prevent="createJournalEntry()">
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      <div>
        Title:
        <input type="text" v-model="newJournalEntryParams.title" />
      </div>
      <div>
        Text:
        <input type="text" v-model="newJournalEntryParams.text" />
      </div>
      <input type="submit" value="Create" />
    </form>
  </div>
</template>
