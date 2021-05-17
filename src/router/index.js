import Home from "../components/Dashboard/Home.vue";
import Hello from "../components/HelloWorld.vue";
import {createRouter, createWebHistory} from "vue-router";

const routes = [
  {
    name: 'Home',
    component: Home,
    path: '/'
  },
  {
    name: 'Hello',
    component: Hello,
    path: '/hello'
  }
];

const router = createRouter({
  history:createWebHistory(),
  routes
});

export default router;