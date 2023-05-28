<template>

  <div class="box2">
    <h3>大家哈皮</h3>
    <h1>{{ num }}</h1>
  </div>
</template>

<script>
import {ref} from 'vue'
export default {
    name:'Child',
    async setup(){
    let num = ref(0)
    let p = new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve({num})
      },1000)
    })
    return await p
  }
}
</script>

<style>
    .box2{
    background-color: rgb(34, 175, 67);
    width: 480px;
    height: 200px;
  }
</style>