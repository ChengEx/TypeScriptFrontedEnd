<script lang="ts">
import { defineComponent, onMounted, reactive, computed } from "vue";
import { useStore } from "vuex";
import { getCollectionById, deleteCollection } from "../api";

export default defineComponent({
    setup() {
        const store = useStore();
        const collectionList = reactive({
            getCollectionList:[
                {
                    _id: '',
                    name: '',
                    category: '',
                    subcategory: '',
                    productDetail: {
                        images: '',
                        price: 0
                    }
                }
            ]
        })
        onMounted(async() =>{  
            await getCollectionById({
                userId: store.getters['user']?.studentObj?._id
            }).then(res => {
                console.log(res);
                collectionList.getCollectionList = res?.data?.returnObj?.collectionProductId;
                
            })
        });
        async function deleteProduct(id: any) {
            await deleteCollection({
                productId: id,
                userId: store.getters['user']?.studentObj?._id
            }).then(res => {
                console.log(res);
                collectionList.getCollectionList = res?.data?.returnObj?.collectionProductId;
                alert('刪除成功');
            })
        };

        const collectionTotalPrice = computed(() => {
            let totalPrice = 0;
            collectionList.getCollectionList.forEach((item) => {
                totalPrice += item.productDetail.price;
            })
            return totalPrice;
        })

        return {
            collectionList, deleteProduct, collectionTotalPrice
        }
    }
})
</script>
<template>
    <div id="collectionPage">
       <div class="container mt-5 mb-5">
            <div class="d-flex justify-content-center row" >
                <div class="col-md-8">
                    <div class="p-2">
                        <h4>購物車</h4>
                    </div>

                    <div class="d-flex flex-row justify-content-between align-items-center p-3 mt-4 px-3 rounded" style="background: #E0E0E0;" v-for="(item, key) in collectionList.getCollectionList">
                        <div class="mr-1">
                            <img class="rounded" :src="item.productDetail.images[0]"  width="90"/>
                        </div>
      
                        <div class="d-flex flex-column align-items-center product-details mt-2">
                            <h6 class="font-weight-bold">{{ item.name }}</h6>
                        </div>
                        <div class="d-flex flex-column align-items-center product-details mt-2">
                            <h6 class="font-weight-bold">{{ item.category }}-{{ item.subcategory }}</h6>
                            <!-- <h6 class="font-weight-bold">{{ item.subcategory }}</h6> -->
                        </div>
                        
                        <div>
                            <h6 class="text-grey mt-1" style="width:100px">NT$ {{ item.productDetail.price }}</h6>
                        </div>
                        <div class="d-flex align-items-center">
                            <!-- <button class="edit_delete_btn" @click="deleteProduct(product._id)"> -->
                            <button class="edit_delete_btn" @click="deleteProduct(item._id)">
                                <img style="width:30px" src="../assets/img/bin.png">
                            </button>
                        </div>
                    </div>
                    <div class="d-flex flex-row justify-content-between align-items-center p-3 mt-4 px-3 rounded">
                        <h5 class="font-weight-bold">總金額: NT$ {{ collectionTotalPrice }}</h5>
                    </div>

                    <div class="d-flex flex-row align-items-center mt-3 p-2 bg-white rounded"><button class="btn btn-warning btn-block btn-lg ml-2 pay-button" type="button">付款</button></div>
                </div>
            </div>
        </div>
    </div>    
</template>



<style>
#collectionPage {
    padding-top: 100px;
}
</style>