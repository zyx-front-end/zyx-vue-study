<template>
    <div class="main">
        <ul>
            <li v-for="item in arr" :key="item.id">
                <div class="left">
                    <input type="checkbox" v-model="item.isCheck">
                    <span :class="{undeline:item.isCheck}">{{item.name}}</span>
                </div>
                <button @click="delFn(item.id)">删除</button>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        props:['arr'],
        methods: {
            delFn(id) {
                this.$emit("delEvent", id);
            }
        },
    }
</script>

<style scoped>
ul{
    list-style: none;
    margin:0;
    padding:0;
}
li{
    display: flex;
    justify-content: space-between;
    align-items:center;
    padding:0 5px;
    height:50px;
}
.undeline{
    text-decoration: line-through;
}
</style>