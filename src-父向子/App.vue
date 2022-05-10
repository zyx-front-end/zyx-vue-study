<template>
  <div>
    <product 
    :zyx="n" 
    :s='str' 
    :arr='arr'
    :obj='obj'>
    </product>
    <button @click="n++">n++</button>
  </div>
</template>

<script>
import product from './components/MyProduct.vue'
  export default {
    //注册组件
    components:{
      product:product,
    },
    data() {
      return {
        n:10,
        str:'hello',
        arr:['aa','bb','cc'],
        obj:{
          name:'zs',
          age:25
        }
      }
    },
  }
</script>

<style scoped>

</style>