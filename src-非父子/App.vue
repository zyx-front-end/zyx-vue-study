<template>
  <div>
    <my-product></my-product>
    <hr>
    <my-head></my-head>
  </div>
</template>

<script>
import MyHead from './components/MyHead.vue'
import MyProduct from './components/MyProduct.vue'
  export default {
  components: { MyProduct, MyHead },
    
  }
</script>

<style scoped>

</style>