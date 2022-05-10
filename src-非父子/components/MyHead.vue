<template>
  <div>
    MyHead
    {{n}}
  </div>
</template>

<script>
import eventBus from '../EventBus/index'
  export default {
    data() {
      return {
        n: 0
      }
    },
    created(){
      eventBus.$on('send',(v)=>{
        alert(v)
        this.n = v
      })
    }
  }
</script>

<style scoped>

</style>