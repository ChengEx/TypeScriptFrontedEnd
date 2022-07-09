<script lang="ts">
    import { defineComponent, onMounted, reactive } from "vue";
    import { useRoute } from "vue-router";
    import { getProductListByCategory } from '../api';
    // import SideBarViewVue from "./SideBarView.vue";
    export default defineComponent({
        setup() {
            const route = useRoute();
            const productList = reactive({
                list:[]
            })
            onMounted(async ()=> {
                console.log(route.path);
                // await getProductListByCategory(
                //     {category: route.path}
                // ).then(res => {
                //     console.log("res",res);
                //     productList.list = res?.data?.returnObjList;
                // })
            })
        },
        // components: {
        //     SideBarViewVue
        // }
    })
</script>
<template>
    <!-- <SideBarViewVue></SideBarViewVue>
    <router-view :key="$route.fullPath" /> -->
    <div class="tetete">test</div>
</template>



<style>
.tetete {
    height: 1200px;
    background-color: red;
}
</style>