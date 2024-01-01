<template>
    <div>
      <h2>Jegyzetek</h2>
      <router-link v-for="note in notes" :key="note.id" :to="'/note/' + note.id" class="note-link">{{ note.title }}</router-link>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        notes: [
          { id: 1, title: 'Jegyzet 1', date: '2023-01-01', content: 'Ez egy példa jegyzet.' },
          { id: 2, title: 'Jegyzet 2', date: '2023-01-01', content: 'Ez egy példa jegyzet.' },
          { id: 3, title: 'Jegyzet 3', date: '2023-01-01', content: 'Ez egy példa jegyzet.' },
          // Add more notes
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .note-link {
    display: block;
    margin-bottom: 10px; /* Ez állítja be az egyes jegyzetek közötti térközt */
  }
  </style>
  