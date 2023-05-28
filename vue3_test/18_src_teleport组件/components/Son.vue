<template>
    
  <div class="box3">
    <h3>我是后代组件</h3>
    <Dailog/>
  </div>

</template>

<script>
import Dailog from './Dailog.vue';
export default {
    name:'Son',
    components:{Dailog}
}
</script>

<style>
    .box3{
        background-color: brown;
        width: 460px;
        height: auto;
    }
</style>