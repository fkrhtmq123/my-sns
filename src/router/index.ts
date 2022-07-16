import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import main from "../views/index.vue";
import login from "../views/users/login/login_main.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "main",
    component: main,
  },
  {
    path: "/login",
    name: "login",
    component: login,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
