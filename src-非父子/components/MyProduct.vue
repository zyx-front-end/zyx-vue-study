<template>
    <div>
        MyProduct
        <button @click="subFn">传递数据</button>
    </div>
</template>

<script>
import eventBus from '../EventBus/index'
    export default {
        data() {
            return {
                num: 89
            }
        },
        methods: {
            subFn() {
                eventBus.$emit('send',this.num)
            }
        },
    }
</script>

<style scoped>

</style>