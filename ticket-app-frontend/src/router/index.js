import { createRouter, createWebHistory } from "vue-router";
import BookTicketView from "../views/BookTicketView";
const routes = [
  {
    path: "/",
    name: "BookTicketView",
    component: BookTicketView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
