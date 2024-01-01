<template>
    <div>
      <h2>Jegyzet részletek</h2>
      <table>
        <tr v-for="(value, key) in noteDetails" :key="key">
          <td>{{ key }}</td>
          <td>{{ value }}</td>
        </tr>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        noteDetails: {},
      };
    },
    created() {
      this.loadNoteDetails();
    },
    methods: {
      loadNoteDetails() {
        const noteId = this.$route.params.id;
        // Fetch note details based on noteId
        // Update this.noteDetails with the fetched data
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add your styles here */
  </style>
  