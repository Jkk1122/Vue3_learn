<template>
  <div class="box1">
    <h1>我是父组件</h1>
    <Child/>
  </div>
</template>

<script>
import { provide, reactive,toRefs } from 'vue'
import Child from './components/Child.vue'

export default {
  name:'App',
  components:{Child},
  setup(){

  }
}
</script>

<style>
  .box1{
    background-color: gray;
    width: 500px;
    height: auto;
  }
</style>