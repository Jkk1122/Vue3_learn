<template>
  <div class="box1">
    <h1>我是父组件</h1>
    <!-- 异步加载组件的时候使用 -->
    <Suspense>
      <!-- 显示引入组件的位置  default -->
      <template v-slot:default>
        <Child/>
      </template>
      <!-- 引入组件未加载好的位置 fallback  -->
      <template v-slot:fallback>
        <h3>加载中.....</h3>
      </template>
    </Suspense>
  </div>
</template>

<script>
import { provide, reactive,ref,toRefs } from 'vue'
// import Child from './components/Child.vue'     //静态引入组件
import { defineAsyncComponent } from 'vue';
const Child = defineAsyncComponent(()=>import('./components/Child.vue'))    //异步引入或者叫做动态引入

export default {
  name:'App',
  components:{Child},
}
</script>

<style>
  .box1{
    background-color: gray;
    width: 500px;
    height: auto;
  }
</style>