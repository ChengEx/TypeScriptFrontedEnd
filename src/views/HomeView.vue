<template>
    <Carousel/>
    <!-- <div class="container">  
        <div class="row">
            <div class="col-6 notyet">
                test1
            </div>
            <div class="col-6 notyet">
                test2
            </div>
        </div>
    </div> -->
    
</template>
<script lang="ts">
import { defineComponent, onMounted, reactive } from "vue";
import { useStore } from "vuex";
import { getAllCategory } from '../api';
import Carousel from '../components/Carousel.vue';
export default defineComponent({
    name:'Home',
    components:{
        Carousel
    },
    setup() {
        const store = useStore();
        onMounted(async() => {
            await getAllCategory().then(res => {
                sessionStorage.setItem('categoryList', JSON.stringify(res.data));
                store.dispatch('category',res?.data?.categoryObj);
            })
        })
        
        store.dispatch('user', JSON.parse(<string>sessionStorage.getItem('profile')));
    }

})
</script>
<style>

</style>
