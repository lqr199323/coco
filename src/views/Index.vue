<template>
  <div class="index">
    <my-header></my-header>
    <carousel></carousel>
    <product-navbar></product-navbar>
  </div>
</template>

<script>
// @ is an alias to /src
import MyHeader from '../components/MyHeader'
import Carousel from '../components/Carousel'
import ProductNavbar from '../components/ProductNavbar'
export default {
  components: {
    MyHeader,
    Carousel,
    ProductNavbar,
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
