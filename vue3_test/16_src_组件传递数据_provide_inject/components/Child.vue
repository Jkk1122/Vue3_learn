<template>

  <div class="box2">
    <h2>我是子组件--{{ name }}--{{ price }}</h2>
    <Son/>
  </div>
</template>

<script>
import { inject, toRefs } from 'vue'
import Son from './Son.vue'
export default {
    name:'Child',
    components:{Son},
    setup(){
        // 获取数据  都可以传递  后代组件都能得到
        let x = inject('car')
        return {...toRefs(x)}
    }
}
</script>

<style>
    .box2{
    background-color: blue;
    width: 300px;
    height: 200px;
  }
</style>