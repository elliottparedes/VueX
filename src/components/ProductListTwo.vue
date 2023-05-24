<template>
    <div id="product-list-two">
        <h2>Product List Two</h2>
        <ul>
            <li v-for="product in saleProducts" :key="product.name">
                {{product.name}} - {{product.price}}
            </li>
        </ul>
         
    </div>
  </template>
  
  <script>
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
        saleProducts() {
            return this.$store.getters.saleProducts
        }
        }
    }
  
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
    #product-list-two{
        width: 100%;
        background-color: lightblue;
        
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
  