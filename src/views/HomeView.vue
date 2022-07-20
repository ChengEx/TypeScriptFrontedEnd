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
import { defineComponent } from "vue";
import { useStore } from "vuex";
import Carousel from '../components/Carousel.vue';
export default defineComponent({
    name:'Home',
    components:{
        Carousel
    },
    setup() {
        const store = useStore();
        store.dispatch('user', JSON.parse(<string>sessionStorage.getItem('profile')));
    }

})
</script>
<style>

</style>
