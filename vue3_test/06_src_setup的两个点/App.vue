<template>
  <!-- 传递数据 -->
    <Demo @hello="sayHello" msg="太酷啦" song="雪Distance">
      <!-- v-slot:wew可以显示名称，slot=“”不能显示 -->
      <template slot="wew">
        <span >祝福</span>
      </template>
    </Demo>
</template>

<script>
import Demo from './components/Demo.vue'
export default {
  name: "App",
  components:{Demo},
  setup(){
    function sayHello(value){
      alert(`我是app ，接受到了${value}`)
    }

    return{
      sayHello
    }
  }
};
</script>
