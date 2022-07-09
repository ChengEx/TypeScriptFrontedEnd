import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import SideBarView from '../views/SideBarView.vue';
import LoginView from '../views/LoginView.vue';
import SignUpView from '../views/SignUpView.vue';
import PersonalView from '../views/PersonalView.vue';
import PersonalInformationView from '../views/PersonalInformationView.vue'
import PersonalShopView from '../views/PersonalShopView.vue';
import PersonalOrderView from '../views/PersonalOrderView.vue';
import ChatMessageView from '../views/ChatMessageView.vue';
import CollectionView from '../views/CollectionView.vue';
import PersonalChangePasswordView from '../views/PersonalChangePasswordView.vue';
import PersonalShopAddProductView from '../views/PersonalShopAddProductView.vue';
import PersonalShopEditProductView from '../views/PersonalShopEditProductView.vue';
import PersonalShopListProductView from '../views/PersonalShopListProductView.vue';

import ProductsView from '../views/ProductsView.vue';
import ProductDetailView from '../views/ProductDetailView.vue';

const history = createWebHashHistory();
const router = createRouter({
    history: history,
    routes:[
        {
            path:'/',
            name:'home',
            component: HomeView
        },
        // {
        //     path:'/:category',
        //     name:'sidebar',
        //     component: SideBarView,
        //     // children:[
        //     //     {
        //     //         path:'/:category/:type',
        //     //         name:'product',
        //     //         component: ProductsView,
        //     //     }
        //     // ]
        // },
        // {
        //     path:'/furniture',
        //     name:'sidebar',
        //     component: SideBarView,
        //     children:[
        //         {
        //             path:'/furniture/table',
        //             name:'product',
        //             component: ProductsView
        //         }
        //     ]
        // },
        {
            path:'/:category',
            name:'sidebar',
            component: SideBarView,
            children:[
                {
                    path:'/:category/:type',
                    name:'product',
                    component: ProductsView,
                }
            ]
        },
        {
            path:'/login',
            name:'login',
            component: LoginView
        },
        {
            path:'/signup',
            name:'signup',
            component: SignUpView
        },
        {
            path:'/personal',
            name:'personal',
            component: PersonalView,
            children:[
                {
                    path:'/personal/information',
                    name:'information',
                    component: PersonalInformationView,
                },
                {
                    path:'/personal/changepassword',
                    name:'changepassword',
                    component: PersonalChangePasswordView
                },
                {
                    path:'/personal/order',
                    name:'order',
                    component: PersonalOrderView,
                },
                {
                    path:'/personal/shop',
                    name:'shop',
                    component: PersonalShopView,
                    children: [
                        {
                            path:'',
                            name:'shop_personalProduct',
                            component: PersonalShopListProductView,
                        },
                        {
                            path:'/personal/shop/addProduct',
                            name:'shop_addProduct',
                            component: PersonalShopAddProductView,
                        },
                        {
                            path:'/personal/shop/editProduct/:id',
                            name:'shop_editProduct',
                            component: PersonalShopEditProductView
                        }
                    ]
                },
                {
                    path:'/personal/message',
                    name:'message',
                    component: ChatMessageView,
                }

            ]
        },
        {
            path:'/collection',
            name:'collection',
            component: CollectionView
        },
        {
            path:'/product/:id',
            name:'productdetail',
            component: ProductDetailView
        },
    ]
})

export default router;