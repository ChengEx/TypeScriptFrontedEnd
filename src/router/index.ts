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
import PersonalShopEditProductView from '../views/PersonalShopEditProductView.vue';
import PersonalShopListProductView from '../views/PersonalShopListProductView.vue';

const history = createWebHashHistory();
const router = createRouter({
    history: history,
    routes:[
        {
            path:'/',
            name:'home',
            component: HomeView
        },
        {
            path:'/:category',
            name:'sidebar',
            component: SideBarView
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
                        // {
                        //     path: '',
                        //     name: 'personalProduct',
                        //     redirect: { name: 'shop_personalProduct' }
                        // },
                        {
                            path:'',
                            name:'shop_personalProduct',
                            component: PersonalShopListProductView,
                        },
                        {
                            path:'/personal/shop/editProduct',
                            name:'shop_editProduct',
                            component: PersonalShopEditProductView,
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
        }
    ]
})

export default router;