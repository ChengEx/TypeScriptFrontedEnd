<script lang="ts">
    import { onMounted } from '@vue/runtime-core';
    import { getAllCategory } from '../api';
    import { ref } from 'vue';
    import { useStore } from 'vuex';
    export default {
        setup() {
            const result = ref({});
            const store = useStore();
            onMounted(async () => {
                await getAllCategory().then(data => {
                    result.value = data;
                })
            })

            function logout(){
                localStorage.clear();
                store.dispatch('user', null);
            }

            return { result, logout };
        }
    // data(){
    //   return {
    //     categoriesItem:{}
    //   }
    // },
    // methods:{
    //   logout(){
    //     localStorage.clear();
    //     this.$store.dispatch('user', null)
    //   }
    // },
    // created() {
    //   getCategories().then(response => {
    //           console.log("response:",response);
    //           this.categoriesItem = response.data;
    //           console.log("inventory category:",this.categoriesItem);
    //           this.$store.commit("getCategoryData", this.categoriesItem?.returnCategory);
    //       }).catch(error => {
    //           console.log(error);
    //       })
    // }
  }
  // array = ['male','female','kids']
</script>
<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
        <router-link class="navbar-brand " aria-current="page" to="/" style="margin-right: 30px; font-size:30px;" >校園二手市集</router-link>

        <div class="collapse navbar-collapse mt-3 mb-3" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">                
                <li v-for="item in result?.data?.categoryObj" class="nav-item insidefont" style="margin-right: 20px;">
                    <router-link class="nav-link" aria-current="page" :to="`/${item.categoryNameEN}`">{{ item.categoryName }}</router-link>  
                </li>    
                <li class="nav-item">
                <router-link class="nav-link insidefont" aria-current="page" to="/backstage">暫時後台</router-link>
                </li>
            </ul>
            <div v-if="!$store.getters['user']">
                <router-link class="nav-link insidefont mr-5" to="/login" style="text-decoration: none; color: inherit;">登入</router-link>
            </div>
            <div v-else>
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link class="insidefont" to="/personalInformation" style="text-decoration: none; color: inherit; margin-right: 15px;">個人資訊</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="insidefont" to="/collection" style="text-decoration: none; color: inherit; margin-right: 15px;">收藏</router-link>
                    </li>
                    <li class="nav-item" >
                        <button class="insidefont" @click="logout" style="border: none; background: none; margin-right: 15px;">
                        登出
                        </button>   
                    </li>                
                </ul>            
            </div>
        </div>
    </div>
</nav>
</template>
<style>
.dropdown:hover .dropdown-menu {
    display: block;
    margin-top: 0;
}

.insidefont {
  font-size:20px;
}
</style>