import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router";
import Layout from "@/layout/Index.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "login",
        component: import("../pages/Login.vue"),
    },
    {
        path: "/register",
        name: "register",
        component: import("../pages/Register.vue"),
    },
    {
        path: "/user/record",
        name: "userRecord",
        component: import("../pages/UserRecord.vue"),
    },
    {
        path: "/layout",
        name: "Layout",
        redirect: "/layout/all",
        component: Layout,
        children: [
            {
                path: "all",
                name: "All",
                component: import("../pages/RecordList/Index.vue"),
            },

            {
                path: "entry",
                name: "Entry",
                component: () =>
                    import(/* webpackChunkName: "about" */ "../pages/RecordList/Entry.vue"),
            },
            {
                path: "my",
                name: "My",
                component: () =>
                    import(/* webpackChunkName: "about" */ "../pages/RecordList/MyRecord.vue"),
            },
            {
                path: "info",
                name: "Info",
                component: () =>
                    import(/* webpackChunkName: "about" */ "../pages/Setting/Index.vue"),
            },
            {
                path: "account",
                name: "Account",
                component: () =>
                    import(/* webpackChunkName: "about" */ "../pages/User/UserList.vue"),
            },
        ],
    },
    {
        path: "/register",
        name: "register",
        component: import("../pages/Register.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
