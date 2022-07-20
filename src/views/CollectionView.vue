<script lang="ts">
import { defineComponent, onMounted } from "vue";

export default defineComponent({
    setup() {
        onMounted(async() =>{
            
        });
        async function deleteProduct(id: any) {
                
        };
        return {

        }
    }
})
</script>
<template>
    <div id="collectionPage">
       <div class="container mt-5 mb-5">
            <div class="d-flex justify-content-center row">
                <div class="col-md-8">
                    <div class="p-2">
                        <h4>Cart</h4>
                    </div>

                    <div class="d-flex flex-row justify-content-between align-items-center p-3 mt-4 px-3 rounded" style="background: #E0E0E0;">
                        <div class="mr-1">
                            <img class="rounded" src="../assets/img/woman.png"  width="90"/>
                        </div>
      
                        <div class="d-flex flex-column align-items-center product-details mt-2">
                            <h5 class="font-weight-bold">產品名稱</h5>
                        </div>
                        
                        <div>
                            <h5 class="text-grey mt-1" style="width:100px">NT$ 1500</h5>
                        </div>
                        <div class="d-flex align-items-center">
                            <!-- <button class="edit_delete_btn" @click="deleteProduct(product._id)"> -->
                            <button class="edit_delete_btn">
                                <img style="width:30px" src="../assets/img/bin.png">
                            </button>
                        </div>
                    </div>
                    
                    <div class="d-flex flex-row align-items-center mt-3 p-2 bg-white rounded"><input type="text" class="form-control border-0 gift-card" placeholder="discount code/gift card"><button class="btn btn-outline-warning btn-sm ml-2" type="button">Apply</button></div>
                    <div class="d-flex flex-row align-items-center mt-3 p-2 bg-white rounded"><button class="btn btn-warning btn-block btn-lg ml-2 pay-button" type="button">Proceed to Pay</button></div>
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