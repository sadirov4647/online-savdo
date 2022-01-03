import { createRouter, createWebHistory } from "vue-router";
import Register from '../views/Register.vue'
import Home from '../views/Home.vue'
const routes = [
  {
    path:'/',
    name:"Home",
    component:Home,
    children:[
      {
        path:'customers',
        name:'Customers',
        component:()=> import("../components/Customers.vue")
      },
      {
        path:'product-part',
        name:"ProductPart",
        component:()=> import("../components/ProductPart.vue")
      },
      {
        path:'product-list',
        name:'ProductList',
        component:()=> import("../components/ProductList.vue")
      },
      {
        path:'product-orders',
        name:'ProductOrders',
        component:()=> import("../components/ProductOrders.vue")
      },
      {
        path:'product-messages',
        name:'ProductMessages',
        component:()=> import("../components/ProductMessages.vue")
      },
    ]
  },
  {
    path:'/register',
    name:'Register',
    component:Register,
  },
  {
    path:'/sign-up',
    name:'SignUp',
    component:()=> import("../views/SignUp.vue")
  },




];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
