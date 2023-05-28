<template>
    
  <div class="box3">
    <h3>我是后代组件-----{{ name }}--{{ price }}</h3>
  </div>

</template>

<script>
import { inject, toRefs } from 'vue'
export default {
    name:'Son',
    setup(){
        // 接受传递的数据
        let car = inject('car')
        return {...toRefs(car)}
    }
}
</script>

<style>
    .box3{
        background-color: brown;
        width: 150px;
        height: 100px;
    }
</style>