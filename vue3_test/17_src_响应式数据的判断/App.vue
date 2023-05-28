<template>
  <div class="box1">
    <h1>我是父组件--{{name}}-{{ price }}</h1>
  </div>
  <h1>666</h1>
</template>

<script>
import { isReactive, isReadonly, isRef, reactive,readonly,ref,toRefs,isProxy } from 'vue'


export default {
  name:'App',
  setup(){
    let num = ref(0)
    let car = reactive({
      name:'奔驰',
      price:'45w'

    })
    let car1 = readonly(car)

    //判断是否为ref对象
    console.log(isRef(num));   //true
    // 检查是否是由reactive创建的响应式代理
    console.log(isReactive(car));   //true
    // 检擦是否使由readonly创建的只读代理
    console.log(isReadonly(car1));   //true
    // 检查一个对象是否是由 reactive 或者 readonly 方法创建的代理
    console.log(isProxy(car));   //true
    console.log(isProxy(car1));  //true
    console.log(isProxy(num));   //false

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