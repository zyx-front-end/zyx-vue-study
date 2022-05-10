<template>
  <div>
    <my-product @abcEvent="abcFn"></my-product>
    {{n}}
  </div>
</template>

<script>
import MyProduct from './components/MyProduct.vue'
  export default {
  components: { MyProduct },
  data() {
    return {
      n: 0
    }
  },
  methods: {
    abcFn(v) {
      this.n = v
    }
  },
  }
</script>

<style scoped>

</style>