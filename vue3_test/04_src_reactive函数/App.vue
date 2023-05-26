<template>
  <div>
    <!-- 模板字符串不用进行.value操作 -->
    <h3>姓名{{ person.name }}</h3>
    <h3>年龄{{ person.age }}</h3>
    <h3>职位：{{ person.job.work }}</h3>
    <h3>俸禄：{{ person.job.salary }}</h3>
    <h3>测试数据: {{ person.a.b.c }}</h3>
    <h1>习惯:{{ person.habits }}</h1>
    <button @click="test1">贬</button>
  </div>
</template>

<script>
import { reactive, ref } from "vue";
export default {
  name: "App",

  // 函数
  setup() {
    // reactive 修改数据为响应式数据   修改对象类型数据   数组也可以
    let person = reactive({
      name: "张安",
      age: 34,
      job: {
        work: "将军",
        salary: "军粮三千石",
      },
      a: {
        b: {
          c: 11111,
        },
      },
      habits:['学习','打游戏','抖音']
    });
    //配置方法
    function test1() {
      person.name = "张三"
      person.age = 39;
      person.job.work = "士兵";
      person.job.salary = "军粮10口";
      person.a.b.c = 12212;
      person.habits[1] = '浇花'
    }

    //返回数据和配置方法
    return {
      person,
      test1,
    };
  },
};
</script>
