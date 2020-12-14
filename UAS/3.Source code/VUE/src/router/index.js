import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/HomePage/HomePage.vue";
import SignUp from "../views/Auth/SignUp.vue";
import SignIn from "../views/Auth/SignIn.vue";
import AboutUs from "../views/AboutUs/AboutUs.vue"
/*
import ContactUs from "../views/ContactUs/ContactUs.vue";
*/
import Content from "../views/Content/Content.vue";
import ContentMenu from "../views/ContentMenu/ContentMenu.vue";
import Dashboard from "../views/Dashboard/Dashboard.vue";
import Gallery from "../views/Gallery/Gallery.vue";
import Sejarah from "../views/Sejarah/Sejarah.vue";

Vue.use(VueRouter);

const routes = [{
    path: "",
    name: "Home",
    component: Home
  },
  {
    path: "/signup",
    name: 'SignUp',
    component: SignUp
  },
  {
    path: "/signin",
    name: 'SignIn',
    component: SignIn
  },
  {
    path: "/about",
    name: "About",
    component: AboutUs
  },
  /*
    {
      path: "/contact",
      name: "Contact",
      component: ContactUs
    },*/
  {
    path: "/content",
    name: "Content",
    component: Content
  },
  {
    path: "/menu",
    name: "Menu",
    component: ContentMenu
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard
  },
  {
    path: "/gallery",
    name: "Gallery",
    component: Gallery
  },
  {
    path: "/sejarah",
    name: "Sejarah",
    component: Sejarah
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;