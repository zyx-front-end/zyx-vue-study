<template>
  <div>
    <move></move>
    <hr>
    <tick></tick>
  </div>
</template>

<script>
import Move from './components/Move.vue';
import Tick from './components/Tick.vue';


export default {
  components: { Move, Tick },
  
};
</script>

<style scoped>
</style>