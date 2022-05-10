<template>
    <div>
        <input v-if="isShow" type="text" ref="myInp" placeholder="这是一个输入框">
        <button v-else @click="btn">点我进行搜索</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                isShow: false
            }
        },
        methods: {
           async btn() {
                this.isShow = true
                // this.$refs.myInp.focus()
                // this.$nextTick(()=>{
                //     this.$refs.myInp.focus()
                // })
                //更新之后 真是DOM不能立马更新  所以需要使用$nextTick()
               await this.$nextTick()
               this.$refs.myInp.focus() 
            }
        },
    }
</script>

<style scoped>

</style>