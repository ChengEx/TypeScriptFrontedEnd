<script lang="ts">
    import { defineComponent, onMounted, reactive, ref, watch } from "vue";
    import { useRouter } from "vue-router";
    import { getAllCategory } from '../api';
    export default defineComponent({
        setup() {
            const router = useRouter();
            const addProduct = reactive({
                name:'',
                category:'',
                subcategory:'',
                price:'',
                description:'',
                status:'',
                photo:[]
            });
            const categoryList = reactive({
                list:[{
                    categoryName:'',
                    subCategory:[]
                }]
            });
            const subCategoryList = reactive({
                list:[{
                    subCategoryName:''
                }]
            })
            const statusList = reactive({
                list:[
                    { statusItem: '全新' },
                    { statusItem: '九成新' },
                    { statusItem: '可正常使用' }
                ]
            })
            watch(() => addProduct.category, (val, old) =>{
                console.log("old", val);
                categoryList.list.forEach(element => {                 
                    if(val === element.categoryName){
                        subCategoryList.list = element.subCategory
                    }
                }, {
                    immediate: true
                })
            });
            onMounted(async()=> {
                await getAllCategory().then(res=> {
                    categoryList.list = res?.data?.categoryObj;     
                })
            })
            function addProductSubmit() {
                router.push('/personal/shop');
            }
            function cancel() {
                router.push('/personal/shop');
            }
            
            return {
                addProduct, addProductSubmit, categoryList, cancel, subCategoryList, statusList
            }
        }
    })
</script>
<template>
    <form id="add_Product_form" @submit.prevent="addProductSubmit" method="post">
        <div class="pic" style="padding-left: 0px;">
            <div class="addProduct_left">
                <div class="row" style="width:auto; padding-right: 0;">
                    
                    
                </div>
                <div class="row input_file">
                    <input name="file_input" type="file"  />
                </div>
                
            </div>
            <div class="addProduct_right">
                <div class="row each_col">
                    <div class="col-2 font_span">
                        <span>二手商品名稱:</span>
                    </div>
                    <div class="col-6">
                        <input class="field_class" name="name" type="text" v-model="addProduct.name" />
                    </div>
                    
                </div>
                <div class="row each_col">
                    <div class="col-2 font_span">
                        <span>分類:</span>
                    </div>
                    <div class="col-6">
                        <select class="form-select form-select-sm field_class" aria-label="Default select example" v-model="addProduct.category">
                            <option v-for="item in categoryList.list" :value="item.categoryName">
                                {{ item.categoryName }}
                            </option>
                        </select>
                    </div>
                </div>
                <div class="row each_col">
                    <div class="col-2 font_span">
                        <span>子分類:</span>
                    </div>
                    <div class="col-6">
                        <select class="form-select form-select-sm field_class" aria-label="Default select example" v-model="addProduct.subcategory">
                            <option v-for="item in subCategoryList.list" :value="item.subCategoryName">
                                {{ item.subCategoryName }}
                            </option>
                        </select>
                    </div>
                </div>
                
                <div class="row each_col">
                    <div class="col-2 font_span">
                        <span>售價:</span>
                    </div>
                    <div class="col-6">
                        <input class="field_class" name="price" type="text" v-model="addProduct.price" />
                    </div>
                </div>
                <div class="row each_col">
                    <div class="col-2 font_span">
                        <span>商品狀態:</span>
                    </div>
                    <div class="col-6">
                        <select class="form-select form-select-sm field_class" aria-label="Default select example" v-model="addProduct.status">
                            <option v-for="item in statusList.list" :value="item.statusItem">
                                {{ item.statusItem }}
                            </option>
                        </select>
                    </div>
                </div>
                <div class="row each_col">
                    <div class="col-2 font_span">
                        <span>敘述:</span>
                    </div>
                    <div class="col-6">
                        <textarea name="mytext"
                            style="margin-top: 10px; padding:5px"
                            v-model="addProduct.description"
                            required>
                        </textarea>
                    </div>
                </div>
                <div class="row each_col button_row" style="text-align: right;">
                    <div class="col-4"></div>
                    <div class="col-2">
                        <button class="btn btn-secondary update_Btn" type="submit" @click="cancel" >取消</button>
                    </div>
                    <div class="col-2">
                        <button class="btn btn-success update_Btn" type="submit" form="add_Product_form" >新增商品</button>
                    </div>
                </div>

            </div>
        </div>
    </form>
    
</template>


<style>
    figure {
        border: 2px solid #f00;
        margin: auto;
        line-height: 400px;
        text-align: center;

    }
    .information_img {
        display: inline-block;  
        line-height:1;
        max-width: 100%;
        max-height: 100%;
        background: #ccc;
	    vertical-align: middle;
    }
    .addProduct_left {
        margin-top: 50px;
        margin-left: 150px;
        width:500px;
    }
    .addProduct_left .input_file {
        margin-top: 50px;
        margin-left: 80px;
    }
    .addProduct_right {
        margin-top: 20px;
        margin-left: 100px;
        width: 100%;
    }
    .font_span {
        line-height:50px;
        text-align: right;
    }
    .each_col {
        margin-top: 20px;
    }
     textarea {
        border-radius: 5px;
        border: 1px solid black;
        height:300px;
        width: 100%;
    }
    .button_row {
        align-self: flex-end;
    }
    .update_Btn{

        float:right
        /* justify-content: right; */
    }
</style>