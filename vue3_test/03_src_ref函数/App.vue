<template>
  <div>
    <!-- 模板字符串不用进行.value操作 -->
    <h3>姓名{{ name }}</h3>
    <h3>年龄{{age}}</h3>
    <h3>职位：{{ job.work }}</h3>
    <h3>俸禄：{{ job.salary }}</h3>
    <button @click="test1">贬</button>
  </div>
</template>

<script>
import {ref} from 'vue'
export default {
  name: 'App',

  // 函数
  setup(){
    // ref()函数实现响应式数据, name,age,job 为RefImgl对象 : 引用实现的实例对象[引用对象]
    // ref函数基本数据类型和对象数据类型都可以处理
    let name = ref('张安')
    let age = ref(34)
    let job = ref({
      work:'将军',
      salary:'军粮三千石'
    })
    
    //配置方法
    function test1(){
      // 简单的数据  通过get | set 来修改数据  ObjectdefineProperty
      name.value = '张三',
      age.value = 39

      // 对象等复杂数据，通过Proxy来修改   reactive 函数实现
      //value进行响应式数据的修改
      job.value.work = '士兵'
      job.value.salary = '军粮10口'
    }

    //返回数据和配置方法
    return{
      name,
      age,
      job,
      test1
    }
  }
}
</script>
