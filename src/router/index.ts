import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import main from "../views/index.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "main",
    component: main,
  },
  /*{
    path: "/about",
    name: "about",
    component: () =>
      import("../views/AboutView.vue"),
  },*/
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
