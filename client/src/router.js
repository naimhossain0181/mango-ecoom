import { createWebHistory, createRouter } from "vue-router";
import AdminLogin from "./components/AdminPanel/AdminLogin.vue";
import AdminHomePage from "./components/AdminPanel/AdminHomePage.vue";
import HomePage from "./components/pages/HomePage.vue";
import ProductDetails from "./components/pages/ProductDetails.vue";
import ProductAdd from './components/AdminPanel/ProductAdd.vue'
import ProductUpdate from './components/AdminPanel/ProductUpdate.vue'
import ProductUpdateForm from './components/AdminPanel/ProductUpdateForm.vue'
import ProductDelete from './components/AdminPanel/ProductDelete.vue'

const routes = [
  {
    name: "Home",
    path: "/",
    component: HomePage,
  },
  {
    name: "Product",
    path: "/product/:id",
    component: ProductDetails,
  },

  // admin deshboard
  {
    name: "AdminLogin",
    path: "/admin",
    component: AdminLogin,
  },
  {
    name: "Deshboard",
    path: "/deshboard",
    component: AdminHomePage,
   
  },

  {
    name: "ProductAdd",
   path: "/deshboard/create",
   component: ProductAdd,
 },
 {
  name: "ProductUpdate",
 path: "/deshboard/update",
 component: ProductUpdate,
},
{
  name: "ProductUpdateForm",
 path: "/deshboard/update/:id",
 component: ProductUpdateForm,
},
{
  name: "ProductDelete",
 path: "/deshboard/delete",
 component: ProductDelete,
}

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
