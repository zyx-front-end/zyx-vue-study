<template>
  <div>
    <p @click="tzHome">首页</p>
  </div>
</template>

<script>
export default {
  methods: {
    tzHome() {
      this.$router.push({
        name: "home",
        // path: '/home',
      });
    },
  },
};
</script>

<style scoped>
</style>