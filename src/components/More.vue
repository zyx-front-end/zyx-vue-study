<template>
  <div>
    <p>获取原生的dom元素</p>
    <h1 id="h" ref="myh">我是一个h1标记</h1>
    <child ref="myc"></child>
  </div>
</template>

<script>
import Child from './Child.vue';

/*
1:用来获取dom元素
2：可以获取组件对象
*/

export default {
  components: { Child },
  
  beforeMount() {
    console.log(document.getElementById("h"));
    console.log(this.$refs.myh);
  },
  mounted() {
    // console.log(document.getElementById("h"));
    // console.log(this.$refs.myh);
    console.log(this.$refs.myc)
    let childObj = this.$refs.myc
    childObj.fn()
  },
};
</script>

<style scoped>
</style>