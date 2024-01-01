import Vue from 'vue';
import VueRouter from 'vue-router';
import NotesView from '../components/NotesView.vue';
import NoteDetails from '../components/NoteDetails.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: NotesView },
  { path: '/note/:id', component: NoteDetails },
];

const router = new VueRouter({
  routes,
});

export default router;
