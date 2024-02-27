import {
    type RouteRecordRaw,
    createRouter,
    createWebHistory,
} from "vue-router";

const routes: RouteRecordRaw[] = [];

export default createRouter({
    history: createWebHistory(),
    routes,
});
