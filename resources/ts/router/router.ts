import {
    type RouteRecordRaw,
    createRouter,
    createWebHistory,
} from 'vue-router';
import Home from '../features/home/Home.vue';
import Tasks from '../features/tasks/Tasks.vue';
import Main from '../pages/Main.vue';
import HomeSideBar from '../features/home/HomeSideBar.vue';
import TasksSideBar from '../features/tasks/TasksSideBar.vue';

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
                components: {
                    default: Home,
                    aside: HomeSideBar,
                },
            },
            {
                path: '/tasks',
                name: 'tasks',
                components: {
                    default: Tasks,
                    aside: TasksSideBar,
                },
            },
        ],
    },
];

export default createRouter({
    history: createWebHistory(),
    routes,
});
