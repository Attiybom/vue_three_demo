import { createRouter, createWebHashHistory } from "vue-router";

import HomeView from "../pages/HomeView.vue";
// import TestView from "../pages/TestView.vue";
// import EditView from "../pages/EditView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/directive",
    name: "directive",
    component: () => import("../pages/DirectiveDemo.vue"),
  },
  {
    path: "/test",
    name: "test",
    component: () => import("../pages/TestView.vue"),
  },
  {
    path: "/edit",
    name: "edit",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../pages/EditView.vue"),
  },
  {
    path: "/temp",
    name: "temp",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../pages/TempDemo.vue"),
  },
  {
    path: "/tagDemo",
    name: "tagDemo",
    component: () => import("../pages/TagDemo.vue"),
  },
  {
    path: "/tablePage",
    name: "tablePage",
    component: () => import("../pages/TablePage.vue"),
  }
];

export const HOME_PATH = "/";
export const TEST_PATH = "/test";
export const EDIT_PATH = "/edit";

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
