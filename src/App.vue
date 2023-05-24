<template>
  <div id="app">
    <product-list-one></product-list-one>
    <product-list-two></product-list-two>
  </div>
</template>

<script>
// this is where you import components
// import HelloWorld from './components/HelloWorld.vue'
import ProductListOne from './components/ProductListOne.vue'
import ProductListTwo from './components/ProductListTwo.vue'


//this is where you register components
export default {
  name: 'App',
  data(){
    return {

    }
  },
  components: {
    // HelloWorld
    ProductListOne,
    ProductListTwo
  }
}
</script>

<style>
#app {
  /* center content */
  display: flex;
  flex-direction: column;
  align-items: center;
 
}

</style>
