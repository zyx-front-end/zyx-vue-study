<template>
    <div>
        <p id="myp">{{msg}}</p>
        <ul id="myul">
            <li v-for="(item,i) in arr" :key="i">
                {{item}}
            </li>
        </ul>
        <button @click="arr.push('eee')">添加</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                msg: 'hello vue',
                timer:null,
                arr:['aa','bb','cc','dd']
            }
        },
        beforeCreate(){
            console.log('beforeCreate')
            console.log(this.msg)//undefined
        },
        //data和methods初始化以后
        //场景：网络请求 注册全局事件
        created(){
            console.log("created")
            console.log(this.msg)//hello vue
            // this.timer = setInterval(()=>{
            //     console.log('hahaha')
            // },1000)
            
        },
        beforeMount() {
           console.log('beforeMount')
           console.log(document.getElementById('myp'))
           
        },
        mounted(){
            console.log('mounted')
           console.log(document.getElementById('myp'))

        },
        beforeUpdate() {
            console.log('beforeUpdate')
            console.log(document.querySelectorAll('#myul>li')[4])
        },
        updated() {
            console.log('updated')
            console.log(document.querySelectorAll('#myul>li')[4])
        },
        //销毁
        //移除全局事件
        beforeDestroy(){
            console.log('beforeDestroy')
        },
        destroyed(){
            console.log('destroyed')
        }
    }
</script>

<style scoped>
ul{
    list-style: none;
}
</style>