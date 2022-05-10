<template>
  <div></div>
</template>

<script>
export default {
  created() {
    this.getData();
  },
  methods: {
    async getData() {
      let res = await this.$axios.get("/api/getbooks");
      console.log(res);
    },
  },
};
</script>

<style scoped>
</style>