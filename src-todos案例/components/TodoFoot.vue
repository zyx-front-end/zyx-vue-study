<template>
    <div class="todo-foot">
        <div>
            剩余{{allNum}}----{{fArr.length}}
        </div>
        <ul @click="fn">
            <li @click="isSel = 'all'" :class="{active: isSel === 'all'}">全部</li>
            <li @click="isSel = 'yes'" :class="{active: isSel === 'yes'}">已完成</li>
            <li @click="isSel = 'no'" :class="{active: isSel === 'no'}">未完成</li>
        </ul>
        <button @click="clearFn">清除已完成</button>
    </div>
</template>

<script>
    export default {
        props:['fArr'],
        data() {
            return {
                isSel: "all"
            }
        },
        computed:{
            allNum(){
                return this.fArr.length
            }
        },
        methods: {
            fn() {
                this.$emit('changeType',this.isSel)
            },
            clearFn(){
                this.$emit('clearEvent')
            }
        },
    }
</script>

<style scoped>
.todo-foot{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height:50px;
    border-top:1px solid red
}
ul{
    display: flex;
    list-style: none;
    margin:0;
    padding:0;
    width:200px;
    justify-content: space-between;
    align-items:center;
    padding:0 5px;
    height:50px;
}
ul .active {
  border: 1px solid red;
}
</style>