<template>
    <div>
      <button @click="isShow = !isShow">点击隐藏/显示</button>
      <Demo v-if="isShow"/>
    </div>
</template>

<script>
import { ref } from 'vue';
import Demo from './components/Demo.vue'
export default {
  name: "App",
  components:{Demo},
  setup(){
    let isShow = ref(true)
    return{
      isShow
    }
  }
};
</script>
