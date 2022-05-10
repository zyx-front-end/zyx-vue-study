<template>
  <div class="todo">
    <todo-head @create="createFn" :list="list"></todo-head>
    <todo-main :arr="showArr" @delEvent="deleteFn"></todo-main>
    <todo-foot :fArr="list" @changeType="typeFn" @clearEvent="clearFun"></todo-foot>
  </div>
</template>

<script>
import TodoFoot from "./components/TodoFoot.vue";
import TodoHead from "./components/TodoHead.vue";
import TodoMain from "./components/TodoMain.vue";
export default {
  components: { TodoHead, TodoMain, TodoFoot },
  data() {
    return {
      list: JSON.parse(localStorage.getItem('list') || '[]'),
      getSel:'all',
    }
  },
  watch:{
    list:{
      deep:true,
      handler(newVal){
        localStorage.setItem('list',JSON.stringify(newVal))
      }
    }
  },
  computed:{
    showArr(){
      switch(this.getSel){
        case 'all':
          return this.list
          break
        case 'yes':
          return this.list.filter(item=>item.isCheck === true)
          break
        case 'no':
          return this.list.filter(item=>item.isCheck === false)
          break
      }
    }
  },
  methods: {
    createFn(name) {
      var id = this.list.length === 0 ? 100:this.list[this.list.length-1].id+1
      this.list.push({
        id:id,
        name:name,
        isCheck:false
      })
    },
    deleteFn(id){
      let index = this.list.findIndex((item)=>item.id === id)
      this.list.splice(index,1)
    },
    typeFn(isSel){
      this.getSel = isSel
    },
    clearFun(){
      this.list = this.list.filter((item)=>item.isCheck === false)
    }
  },
};
</script>

<style scoped>
.todo {
  width: 500px;
  height: 500px;
  border: 1px solid #ccc;
  margin: 200px auto;
}
</style>