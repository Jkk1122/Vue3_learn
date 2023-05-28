<template>

  <div class="box2">
    <h2>我是子组件</h2>
    <Son/>
  </div>
</template>

<script>
import { inject, toRefs } from 'vue'
import Son from './Son.vue'
export default {
    name:'Child',
    components:{Son},
}
</script>

<style>
    .box2{
    background-color: blue;
    width: 480px;
    height: auto;
  }
</style>