import {
    type RouteRecordRaw,
    createRouter,
    createWebHistory,
} from 'vue-router';
import Home from '../features/home/Home.vue';
import Tasks from '../features/tasks/Tasks.vue';
import Main from '../pages/Main.vue';

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'main',
        component: Main,
        redirect: { name: 'home' },
        children: [
            {
                path: '/home',
                name: 'home',
                component: Home,
            },
            {
                path: '/tasks',
                name: 'tasks',
                component: Tasks,
            },
        ],
    },
];

export default createRouter({
    history: createWebHistory(),
    routes,
});
