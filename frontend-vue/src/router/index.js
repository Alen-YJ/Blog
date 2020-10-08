import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/about",
        name: "About",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
        import(/* webpackChunkName: "about" */ "../views/About.vue")
    },
    {
        path:"/articles",
        name:"article-list",
        exact:true,
        component:()=> import("../views/ArticleList.vue")
    },
    {
        path:"/article/create",
        name:"article",
        exact:true,
        component:()=> import("../views/Editor.vue")
    },
    {
        path:"/article/:id",
        name:"article",
        exact:true,
        component:()=> import("../views/Article.vue")
    },
    {
        path:"/login",
        name:"login",
        exact:true,
        component:()=> import("../views/Login.vue")
    },
    {
        path:"/register",
        name:"register",
        exact:true,
        component:()=> import("../views/Register.vue")
    },
];

const router = new VueRouter({
    routes
});

export default router;
