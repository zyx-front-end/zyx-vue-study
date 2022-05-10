<template>
    <div>
        <p ref="myp">{{count}}</p>
        <button @click="btn">点击count+1马上获取到p标签内容</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                count: 0
            }
        },
        methods: {
            btn() {
                this.count++;
                console.log(this.$refs.myp.innerHTML)
                //vue更新dom异步
                //解决this.$nextTick
                this.$nextTick(()=>{
                     console.log(this.$refs.myp.innerHTML)
                })
            }
        },
    }
</script>

<style scoped>

</style>