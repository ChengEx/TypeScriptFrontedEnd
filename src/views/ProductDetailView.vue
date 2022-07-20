<script lang="ts">
import { computed, defineComponent, onMounted, reactive  } from "vue";
import { useRoute } from "vue-router";
import { getProductById, addCollection } from '../api';
import { useStore } from 'vuex';

    export default defineComponent({
        setup() {
            const route = useRoute();
            const store = useStore();
            store.dispatch('user', JSON.parse(<string>sessionStorage.getItem('profile')));
            const product = reactive({
                getProductList:{
                    _id: '',
                    name: '',
                    category: '',
                    subcategory: '',
                    createdAt: '',
                    productDetail: {         
                        images: [],
                        description: '',
                        price: 0,
                        status: '',
                    },
                    // product creator
                    createdBy:{
                        name: '',
                        photo: '',
                        phone: '',
                        email: ''
                    }
                }
            });
            onMounted(async()=> {
                await getProductById({ 
                    _id: route.params.id 
                }).then(res => {
                    product.getProductList = res?.data?.productObj;

                    console.log("xxx",product.getProductList);
                })
            });
            async function addCollectionSubmit() {
                await addCollection({
                    productId: route.params.id,
                    userId: store.getters['user']?.studentObj?._id
                }).then(res => {
                    console.log('addCollection',res);
                })
            };
            const createdDateFormate = computed(() => {
                let date = new Date(product.getProductList.createdAt);
                return date.getFullYear()+'/' + (date.getMonth()+1) + '/'+date.getDate();
            })

            return {
                product, createdDateFormate, addCollectionSubmit
            }
        }
    })
</script>
<template> 
    <div class="producrDetail_Page">
        <div class="container">
            <div class="row">
                <div class="col-7">
                    <div style="margin-top: 20px;">
                        <img class="product_img" :src="product.getProductList.productDetail.images[0]" />
                    </div>
                    
                </div>
                <div class="col-5">
                    <div class="right_product_description" style="text-align: left; margin-top: 20px;">
                        <div class="row">
                            <h1 style="font-size: 60px;">{{ product.getProductList.name }}</h1>
                        </div>
                        <div class="row">
                            <div class="category_price">
                                <span style="font-size: 30px;">{{ product.getProductList.category }}-{{ product.getProductList.subcategory }}</span>                             
                            </div>

                        </div>
                        <div class="row" style="text-align: right;">
                            <span style="font-size: 30px;">NT$: {{ product.getProductList.productDetail.price }}</span>
                        </div>
                        <div class="row" style="display: flex;">
                            <div class="col-7">
                                <div class="row">
                                    <span>狀態: {{ product.getProductList.productDetail.status }}</span>
                                </div>
                                <div class="row">
                                    <span>建立時間: {{ createdDateFormate }}</span>
                                </div>
                            </div>
                            <div class="col-5" style="text-align: right; margin-top:10px;">
                                <button class="favorite_btn" @click="addCollectionSubmit()">
                                    <img style="width:30px;" src="../assets/img/heart.png" />
                                    <span style="font-size: 20px;">收藏</span>
                                </button>
                            </div>
                        </div>
                        
                        <hr class="hrhr mt-1">
                        <div class="row">
                            <span>敘述: {{ product.getProductList.productDetail.description }}</span>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div class="row"  style="padding: 20px 200px; ">
                <div class="created_user">
                    <div class="row">
                        <div class="col-6">
                            <div class="row">
                                <div class="col-4">
                                    <img class="createdBy_img" :src="product.getProductList.createdBy.photo"/>
                                </div>
                                <div class="col-8">
                                    <div class="row" style="text-align:left;">
                                        <h3>
                                            {{ product.getProductList.createdBy.name }}
                                        </h3> 
                                    </div>
                                    <div class="row" style="display: flex; margin-top: 20px;">
                                        <button class="detail_btn">私訊賣家</button>
                                        <button class="detail_btn" style="margin-left: 5px;">查看賣家商場</button>
                                    </div>                        
                                </div>
                            </div>                       
                        </div>
                        <div class="col-1"></div>
                        <div class="col-5" style="text-align: left;">
                            <div class="row" style="margin-top: 10px;">
                                <h5>
                                    信箱: {{ product.getProductList.createdBy.email }}
                                </h5>                          
                            </div>
                            <div class="row" style="margin-top: 20px;">
                                <h5>
                                    手機: {{ product.getProductList.createdBy.phone }}
                                </h5>                          
                            </div>
                        </div>           
                    </div>
                    
                </div>    
            </div>
            <div class="row" style="margin-bottom: 50px;">
                <div v-for="(item, key) in product.getProductList.productDetail?.images" :key="key">
                    <img style="margin-top: 20px;" :src="item"/>
                </div>
            </div>

        </div>
            
    </div>
</template>



<style>
.producrDetail_Page{
    position: fixed;
    top: 100px;
    bottom:0;
    width: 100%;
    overflow-y:scroll;
    overflow-x:hidden;
}
.right_product_description {
    padding: 20px;
}
.category_price {
    display: flex;
}
.product_img{
    width: 100%;
}
.createdBy_img {
    height: 90px;
    width: 90px;
    border: 3px solid #555;
    border-color: black;
    border-radius: 50%;
}
.favorite_btn {
    padding:3px; 
    border-radius: 5px; 
    border: 2px solid red;
}
.created_user {
    border: 2px solid gray;
    padding: 20px;
    border-radius: 10px;
}
.detail_btn {
    width: 140px;
    border-radius: 5px;
    background-color: white;
}
.detail_btn:hover {
    background-color: rgb(196, 196, 196);
}

</style>