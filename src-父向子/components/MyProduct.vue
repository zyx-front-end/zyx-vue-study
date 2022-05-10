<template>
    <div>
        子组件
        <hr>
        {{zyx}}{{s}}
        <ul>
            <li v-for="(item,i) in arr" :key='i'>
                {{item}}----{{i}}
            </li>
            
        </ul>
        {{obj.name}}---{{obj}}
        <hr>
        <button @click="zyx++">zyx++</button>
        <button @click="obj.name='ls'">修改父组件传过来对象的属性</button>
        <button @click="updateArr">更改数组</button>
    </div>
 
</template>

<script>
    export default {
        //接收数据
        // props:['zyx','s','arr','obj']
        props:{
            zyx:Number,
            s:[String,Number],
            arr:{
                type:Array,
                required:true
            },
            obj:{
                type:Object,
                default:function(){
                    return {}
                }
            }
        },
        methods: {
            updateArr() {
                this.arr.push('eee')
            }
        },
    }
</script>

<style scoped>

</style>