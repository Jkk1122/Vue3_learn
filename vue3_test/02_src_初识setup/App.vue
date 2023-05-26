<template>
  <div>
    <h3>姓名{{ name }}</h3>
    <h3>年龄{{age}}</h3>
    <button @click="sayHello">点击我显示信息</button>
    <br>
    <button @click="test1">vue2调用vue3setup中的属性方法</button>
  </div>
</template>

<script>
// 当setup返回渲染函数的时候需要引入h
// import {h} from 'vue'
export default {
  name: 'App',
  // 配置vue2的写法
  // vue3兼容vue2数据等的写法
  // vue2中可以使用setup中的数据和方法
  // 但是vue3不能使用vue2写法中的数据
  data() {
    return {
      // 当vue3和vue2的数据出现命名冲突的时候，优先展现setup【vue3】的数据
      name:'里斯',
      age:13
    }
  },
  methods:{
    test1(){
      console.log(this.sayHello);
    }
  },

  // 函数
  setup(){
    // 配置数据
    // 测试setup数据为非响应式
    let name = '张安'
    let age = 19

    // 配置方法
    function sayHello(){
      alert(`我是${name},我今年${age}岁了,欢迎来到西安邮电大学`)
    }

    //返回数据和配置方法
    return{
      name,
      age,
      sayHello
    }

    // 还可以返回渲染函数
    // 当setup返回渲染函数的时候需要引入h
    //return () =>h('h1','加薪啦')
  }
}
</script>
