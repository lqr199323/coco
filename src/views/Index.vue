<template>
  <div class="index">
    <my-header></my-header>
    <carousel></carousel>
    <product-navbar></product-navbar>
    <product></product>
    <news></news>
  </div>
</template>

<script>
// @ is an alias to /src
import MyHeader from '../components/MyHeader'
import Carousel from '../components/Carousel'
import ProductNavbar from '../components/ProductNavbar'
import Product from '../components/Product'
import News from '../components/News'
export default {
  components: {
    MyHeader,
    Carousel,
    ProductNavbar,
    Product,
    News
  }
}
</script>
<style scoped>
  /* .index{position: relative;}
  .index>.header:after{
    content:"";
    display:block;
    clear:both;
  } */
</style>
