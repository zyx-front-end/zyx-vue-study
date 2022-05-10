<template>
  <div class="todo-head">
    <h1>ToDos</h1>
    <input type="checkbox" v-model="isAll"/>
    <input type="text" v-model="name" @keyup.enter="addFn" />
  </div>
</template>

<script>
export default {
    props:['list'],
  data() {
    return {
      name: "",
    };
  },
  computed:{
      isAll: {
          set(checked){
              this.list.forEach((item)=>{
                  item.isCheck = checked
              })
          },
          get(){
              return (this.list.length !== 0 && this.list.every(item=>item.isCheck === true))
          }
      }
  },
  methods: {
    addFn() {
      if (this.name.trim().length === 0) {
        alert("输入框为空！");
        return;
      }
      //子传父
      this.$emit("create", this.name);

      this.name = ''
    },
  },
};
</script>

<style scoped>
</style>