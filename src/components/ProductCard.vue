<script lang="ts" >
    import { deleteProductById } from '../api';
    export default{
        props: {
           product: {
               type: Object
           }
        },
        methods: {
            async deleteProduct(id: any) {
                // await deleteProductById({
                //     _id: id,
                //     userId: this.$store.getters['user'].studentObj._id
                // }).then(res => {
                //     console.log("delete",res);
                //     alert("成功刪除");
                // })
            }
        }
    }
  
</script>
<template>
    <div class="card col-3" style=" border: none">
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
</template>


<style>
.edit_delete_btn {       
        height: 30px;  
        width:30px;
        margin-left: 3px;
        flex-direction: column;
        justify-content: center;
        border-color: transparent;
        background-color: transparent;
    }
</style>