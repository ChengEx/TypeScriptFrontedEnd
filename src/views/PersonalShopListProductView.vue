<script lang="ts">
    import { defineComponent, onMounted, ref, reactive, watch } from "vue";
    import { useStore } from "vuex";
    import { getProductListByUserId, deleteProductById } from '../api';
    import ProductCard from "../components/ProductCard.vue";

    export default defineComponent({
        setup() {
            const productList = reactive({
                list:[
                    {
                        _id:'',
                        name:'',
                        productDetail:{
                            price:0,
                            images:[],

                        }
                    }
                ]
            })
            const store = useStore();
            const userId = store.getters['user']?.studentObj?._id;
            onMounted(async() => {
                await getProductListByUserId({
                    _id: userId
                }).then(res=> {
                    productList.list = res?.data?.getProductList?.productId;
                    console.log(productList.list)          
                })
            });
            async function deleteProduct(id: any) {
                await deleteProductById({
                    _id: id,
                    userId: store.getters['user'].studentObj._id
                }).then(res => {
                    console.log("delete",res);
                    productList.list = res?.data?.getProductList?.productId;
                    alert("成功刪除");
                })
            }
            // watch(() => productList.list, (val, old) =>{
            //     console.log("old1", val);
            //      console.log("old2", old);
            //     productList.list = val
            //     getProductListByUserId({
            //         _id: userId
            //     }).then(res=> {
            //         productList.list = res?.data?.getProductList?.productId;             
            //     })
            // });
            return {
                productList, deleteProduct
            }
        },
        
        components: {
            ProductCard
        },
        methods: {

        }

    })
</script>

<template>
    <div class="row" style="text-align: right;">
        <div class="col-12">                
            <router-link to="/personal/shop/addProduct">
                <button class="btn btn-success" type="submit">新增商品 +</button>     
            </router-link>               
        </div>
    </div>
    <div class="row" style="margin-top: 20px;">
        <!-- <ProductCard v-for="(product,index) in productList.list" :key="index" :product="product" />   -->
        <div class="card col-3" v-for="(product,index) in productList.list" :key="index" style=" border: none">
            <div style="border: 2px  solid gray; border-radius: 5px; padding: 2px;">
                <div class="row" style="display: flex; float: right; margin: 0 ; --bs-gutter-x: 0">
                    <button class="edit_delete_btn">
                        <router-link :to="`/personal/shop/editProduct/${product._id}`">
                            <img  style="width:30px" src="../assets/img/pencil.png">
                        </router-link>
                    </button>
                    <button class="edit_delete_btn" @click="deleteProduct(product._id)">
                        <img style="width:30px" src="../assets/img/bin.png">
                    </button>
                </div>
                <router-link :to="`/product/${product._id}`" style="text-decoration: none; color: inherit;">
                    <img class="card-img-top mt-1" :src="product?.productDetail?.images[0]">
                    <div class="card-body">
                        <div class="row p-0 mt-3">
                        <h5 class="col-auto me-auto p-0">{{product.name}}</h5>
                        <h5 class="col-auto p-0">NT$ {{product?.productDetail?.price}}</h5>
                        </div>      
                    </div>
                </router-link> 
            </div>
            
        </div>
    </div>
</template>
<style>

</style>