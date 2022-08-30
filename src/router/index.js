import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SignupView from "../views/SignupView.vue";
import LoginView from "../views/LoginView.vue";
import LogoutView from "../views/LogoutView.vue";
import JournalsIndex from "../views/LogoutView.vue";
import JournalsShow from "../views/JournalsShow.vue";
import JournalsNew from "../views/JournalsNew.vue";
import JournalEntriesShow from "../views/JournalEntriesShow.vue";
import JournalEntriesNew from "../views/JournalEntriesNew.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/signup",
    name: "signup",
    component: SignupView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/logout",
    name: "logout",
    component: LogoutView,
  },
  {
    path: "/journals",
    name: "journals",
    component: JournalsIndex,
  },
  {
    path: "/journals/:id",
    name: "journals-show",
    component: JournalsShow,
  },
  {
    path: "/journals/new",
    name: "journals-new",
    component: JournalsNew,
  },
  {
    path: "/journal-entries/:id",
    name: "journal_entry-show",
    component: JournalEntriesShow,
  },
  {
    path: "/journal-entries",
    name: "journal_entry-new",
    component: JournalEntriesNew,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
