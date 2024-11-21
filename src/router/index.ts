import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";

const routes = [
    { path: "/", name: "Home", component: Home },
    { path: "/about", name: "About", component: () => import("@/views/About.vue") },
    { path: "/products", name: "Products", component: () => import("@/views/Products.vue") },
    { path: "/users", name: "Users", component: () => import("@/views/Users.vue") },
    { path: "/posts", name: "Posts", component: () => import("@/views/Posts.vue") }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;