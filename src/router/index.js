import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";

const routes = [
  {
    path: "/",
    name: "HOME",
    component: HomeView,
  },
  {
    path: "/about",
    name: "ABOUT",
    component: AboutView,
  },
];

const router = createRouter({
  history: createWebHistory("/"),
  routes,
});

export default router;
