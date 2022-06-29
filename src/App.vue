<template>
  <Navbar/>
  <router-view :key="$route.fullPath"/>
  <!-- <Footers/> -->
</template>
<script lang="ts">
  import { defineComponent } from 'vue'; 
  import Navbar from './components/Navbar.vue';
  import Footers from './components/Footer.vue';
  
  export default defineComponent({
      components: {
        Navbar,
        Footers
      }
  })
  
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
