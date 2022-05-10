<template>
    <div>
        <button @click="eventAbc">出发自定义事件</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                num: 2
            }
        },
        methods: {
            eventAbc() {
                this.$emit('abcEvent',this.num)
            }
        },
    }
</script>

<style scoped>

</style>