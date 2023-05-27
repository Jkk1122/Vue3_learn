<template>
    <div>
      <button @click="isShow = !isShow">点击隐藏/显示</button>
      <Demo v-if="isShow"/>
      <hr>
      <Test></Test>
    </div>
</template>

<script>
import { ref } from 'vue';
import Demo from './components/Demo.vue'
import Test from './components/Test.vue'
export default {
  name: "App",
  components:{Demo,Test},
  setup(){
    let isShow = ref(true)
    return{
      isShow
    }
  }
};
</script>
