import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import SideBarView from '../views/SideBarView.vue';
import LoginView from '../views/LoginView.vue';
import SignUpView from '../views/SignUpView.vue';
import PersonalInformationView from '../views/PersonalInformationView.vue';
import CollectionView from '../views/CollectionView.vue';

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
            path:'/personalInformation',
            name:'personalInformation',
            component: PersonalInformationView
        },
        {
            path:'/collection',
            name:'collection',
            component: CollectionView
        }
    ]
})

export default router;