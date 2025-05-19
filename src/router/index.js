import { createRouter, createWebHistory } from "vue-router";

const CheckInComponent = () => import("../registration/pages/check-in.component.vue");
const HomeComponent = () => import('../public/pages/home.component.vue');
const PageNotFoundComponent = () => import('../public/pages/page-not-found.component.vue');

/**
 * @module router
 * @summary Vue Router configuration with application routes and navigation guards.
 * @description Defines routes for the application including home, event check-in, default redirect, and 404 not found page.
 * Implements a global navigation guard to log route changes and update the document title dynamically.
 * @author Daniel Crispin Ramos
 */
const routes = [
    {
        path: '/home',
        name: 'home',
        component: HomeComponent,
        meta: { title: 'Home' }
    },
    {
        path: '/registration/event-check-ins/new',
        name: 'Check-In',
        component: CheckInComponent,
        meta: { title: 'Check-In' }
    },
    {
        path: '/',
        name: 'default',
        redirect: { name: 'home' }
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'not-found',
        component: PageNotFoundComponent,
        meta: { title: 'Page not found' }
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: routes,
});

/**
 * Global navigation guard that:
 * - Logs navigation from previous route to next route.
 * - Sets the document title based on route meta title and a base application title.
 */
router.beforeEach((to, from, next) => {
    console.log(`Navigating from ${from.name} to ${to.name}`);
    const baseTitle = 'ACME Learning Center';
    document.title = `${baseTitle} | ${to.meta['title']}`;
    next();
});

export default router;
