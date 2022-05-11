<template>
  <div>
    <div class="wrap">
      <!-- router-link最终会被渲染成a标签 -->
      <router-link to="/home">首页</router-link>
      <router-link to="/find">发现</router-link>
      <router-link to="/part">part</router-link>
    </div>
    <!-- 路由出口 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.router-link-active{
  color:yellow;
}
.router-link-exact-active{
  color:red;
}

</style>
