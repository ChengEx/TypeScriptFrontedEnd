<script lang="ts">
    import { defineComponent, reactive, onMounted, watch, ref } from "vue"
    import { useRoute } from "vue-router";
    import { getProductListBySubCategory, getAllCategory, getProductListByCategory, getCategoryByPath } from '../api';
    import store from "../store";
    import ProductCard from "../components/ProductCard.vue";
import { main } from "@popperjs/core";
    export default defineComponent({
        components: {
            ProductCard
        },
        setup() {
            const route = useRoute();
            const productList = reactive({
                list:[]
            })
            const categoryList = reactive({
                list:[{
                    categoryName:'',
                    categoryNameEN:'',
                    subCategory:[]
                }]
            })
            const categoryListTEST = reactive({
                categoryName:'',
                categoryNameEN:'',
                subCategory:[
                    {
                        subCategoryName:'',
                        subCategoryNameEN:''
                    }
                ]
            })
            const subCategory = reactive({   
                categoryNameEN:'', 
                list:[
                    {
                        subCategoryName:'',
                        subCategoryNameEN:''
                    }
                ]
            });
            const result = ref();
            result.value = route.params.type;
            console.log("here", result.value);
            watch(()=> result.value , (val, old) =>{
                console.log("old", val);
                subCategory.list = val;
            });
            const mainPath = ref();
            onMounted(async ()=> {  
                const categoryPath = route.path.replace('/','');
                console.log("category path", categoryPath);
                // let mainPath = '';
                let secondPath = '';
                const splitPath = route.path.split('/');
                if(splitPath.length === 2) {
                    mainPath.value = splitPath[1];
                }
                else if(splitPath.length === 3) {
                    mainPath.value = splitPath[1];
                    secondPath = splitPath[2];
                }
                console.log("route", route.path.split('/'));

                await getCategoryByPath({path: mainPath.value}).then(res=> {
                    categoryListTEST.categoryNameEN = res?.data?.categoryObj?.categoryNameEN;
                    categoryListTEST.categoryName = res?.data?.categoryObj?.categoryName;
                    categoryListTEST.subCategory = res?.data?.categoryObj?.subCategory;
                    
                })

                // await getAllCategory().then(res=> {
                //     categoryList.list = res?.data?.categoryObj;
                //     console.log("list",categoryList.list);
                //     categoryList.list.forEach(element => {
                //         if(mainPath === element.categoryNameEN) {
                            
                //             subCategory.categoryNameEN = element.categoryNameEN;
                //             subCategory.list = element.subCategory;                          
                //         }
                //     })
                // })
                
                // await getProductListByCategory(
                //     {category: subCategory.categoryName}
                // ).then(res => {
                //     productList.list = res?.data?.returnObjList;
                // });

               

                //console.log(store.getters['category']);
                // categoryList.list = store.getters['category'];
                // categoryList.list.forEach(element => {
                //     if(categoryPath === element.categoryNameEN){
                //         subCategory.categoryNameEN = element.categoryNameEN;
                //         subCategory.list = element.subCategory;                          
                //     }
                // })

                

            })

            
            return {
                categoryList, productList, categoryListTEST, mainPath
            }
        }
    })
</script>
<template>
    <div id="personalPage">
        <div id="leftBar">
            <ul class="personalSideBar">
                <li v-for="(item, key) in categoryListTEST.subCategory" :key="key">
                    <router-link class="nav-link" aria-current="page" :to="`/${mainPath}/${item.subCategoryNameEN}`"> 
                        {{ item.subCategoryName }}
                    </router-link>
                </li>
            </ul>
        </div>
        <div id="rightPage">
            <router-view :key="$route.fullPath"></router-view>
        </div>
    </div>
</template>

<style>
#rightPage {
    margin-left: 500px;
    margin-top: 50px;
    padding: 50px;
    width:100%;
}
.sidebar_btn {
    width: 100%;
    padding: 5px;
    font-size: 20px;
    border-radius: 10px;
    border: none;
}
.sidebar_btn:hover {
    background-color: gray;
    opacity: 0.5;
}

</style>