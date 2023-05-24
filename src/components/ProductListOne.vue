<template>
    <div id="product-list-one">
        <h2>Product List One</h2>
            <ul>
                <li v-for="product in saleProducts" :key="product.name">
                    {{product.name}} - {{product.price}}
                </li>   
            </ul>
            <button @click="reducePrice(4)">Reduce Price</button>
    </div>
  </template>
  
  <script>
  import { mapActions, mapGetters } from 'vuex';
  // mapping the actions and getters to the local methods and computed properties 
  // instead of using this.$store.dispatch('reducePrice', amount) and this.$store.getters.saleProducts

  export default {
    props: [
      
    ],
    data() {
        return {

        }
    },
    computed: {
        products() {
            return this.$store.state.products
        },
        // saleProducts() {
        //   return this.$store.getters.saleProducts
        // }
        // this is called a spread operator which is a new feature in ES6 that allows us to spread out the elements of an array or an object
        ...mapGetters([
            'saleProducts'
        ])

    },
    methods: {
        // reducePrice: function(amount) {
        //     // this.$store.state.products.forEach(product => {
        //     //     product.price -= 1
        //     // })
        //     // we commit mutations to change the state    
        //     //this.$store.commit('reducePrice');
        //     this.$store.dispatch('reducePrice', amount);
        // }
        ...mapActions([
            'reducePrice'
        ])
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
    #product-list-one{
        width: 100%;
        background-color: salmon;
        
    }
    h2 {
        text-align: center;
    }
    ul {
        
        list-style: none;
        padding: 0;
        display: flex;
        flex-wrap: wrap;
        justify-content:center; 
    }

    li {
       
        border: 2px solid black;
        align-items: center;
        padding: 10px;
        background-color: #f2f2f2;
        border-radius: 5px;
        margin-bottom: 10px;
        padding:20px;
        margin-right: 20px;
        
    }
  </style>
  