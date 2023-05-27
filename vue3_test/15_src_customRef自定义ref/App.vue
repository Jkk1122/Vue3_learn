<template>
  <div>
    请输入：<input type="text" v-model="keyword">
    <h3>输入的内容：{{ keyword }}</h3>
  </div>
</template>

<script>

import { ref, customRef } from 'vue'
export default {
  name: "App",
  setup() {
    // let keyword = ref('hello') //使用vue提供的ref
    let keyword = myRef('hello',599)
    // 自定义一个ref
    function myRef(value,delay) {
      // 防抖
      let timer
      // customRef  传递两个参数   track 和trigger   前者通知vue追踪依赖的变化   后者通知vue重新渲染模板
      return customRef((track,trigger) => {
        return { 
          get() {
            console.log(`有人从这儿读取了${value}`);
            track()  //通知vue追踪value的变化
            return value
          },
          set(newvalue) {
            value = newvalue
            console.log(`有人修改了把数据修改成了${newvalue}`);
            clearTimeout(timer)
            timer = setTimeout(()=>{
              trigger()   // 通知vue重新渲染模板
            },delay)
          }
        }
      })
    }

    return {
      keyword
    }
  }

};
</script>
