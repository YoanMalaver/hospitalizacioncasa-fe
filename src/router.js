import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import LogIn from './components/LogIn.vue';
import SignUp from './components/SignUp.vue';
import Home from './components/Home.vue';
import Signos from './components/Signos.vue';

const routes = [
    {
        path: '/',
        name: 'root',
        component: App,
    },
    {
        path: '/user/singUp',
        name: 'signUp',
        component: SignUp,
    },
    {
        path: '/user/logIn',
        name: 'logIn',
        component: LogIn,
    },
    {
        path: '/user/home',
        name: 'home',
        component: Home,
    },
    {
        path: '/user/signos',
        name: 'signos',
        component: Signos,
    },
    // {
    //     path: '/about',
    //     name: 'about',
    //     // route level code-splitting
    //     // this generates a separate chunk (about.[hash].js) for this route
    //     // which is lazy-loaded when the route is visited.
    //     component: () => import(/* webpackChunkName: "about" */ './views/AboutView.vue'),
    // },
];

const router = createRouter({
    // history: createWebHashHistory(),
    history: createWebHistory(),
    routes,
});

export default router;
