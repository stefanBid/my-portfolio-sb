import { createRouter, createWebHistory } from "vue-router";

//Router is imported in main.ts
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/1_Home/HomeView.vue"),
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/2_About/AboutView.vue"),
    },
    {
      path: "/skills",
      name: "skills",
      component: () => import("../views/3_Skills/SkillsView.vue"),
    },
    {
      path: "/works",
      name: "works",
      component: () => import("../views/4_Works/WorksView.vue"),
    }
  ]
});

export default router;



