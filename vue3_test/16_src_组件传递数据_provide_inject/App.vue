<template>
  <div class="box1">
    <h1>我是父组件--{{name}}-{{ price }}</h1>
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
    let car = reactive({
      name:'奔驰',
      price:'45w'

    })

    // 向后代组件发送数据  参数为(设置参数名，需要传递的数据)
    provide('car',car)

    return {...toRefs(car)}
  }
}
</script>

<style>
  .box1{
    background-color: gray;
    width: 500px;
    height: 300px;
  }
</style>