<template>
    <div>
        <h2>数字num:{{ num }}</h2>
        <button @click="num++">点击num++</button>
        <hr>
    </div>
</template>

<script>
import {onBeforeMount, onBeforeUpdate, onMounted, onUpdated, ref ,onBeforeUnmount,onUnmounted} from "vue";
export default {
    name: "Demo",
    setup() {
       let num = ref(0)
    //组合式生命周期钩子
        // onBeforeMount(()=>{
        //     console.log('-----onBeforeMount----');
        // })
        // onMounted(()=>{
        //     console.log('-----onMounted----');
        // })
        // onBeforeUpdate(()=>{
        //     console.log('-----onBeforeUpdate----');
        // })
        // onUpdated(()=>{
        //     console.log('-----onUpdated----');
        // })
        // onBeforeUnmount(() => {
        //     console.log('----onBeforeUnmount----');
        // })
        // onUnmounted(() => {
        //     console.log('----onUnmounted----');
        // })
       
        return {
            num,
        };
    },
    // 配置项生命周期钩子
    // beforeCreate(){
    //     console.log('----beforeCreate---');
    // },
    // created() {
    //     console.log('----created----');
    // },
    // beforeMount(){
    //     console.log('----beforeMount----');
    // },
    // mounted(){
    //     console.log('---mounted----');
    // },
    // beforeUpdate(){
    //     console.log('---beforeUpdate---');
    // },
    // updated() {
    //     console.log('----updated----');
    // },
    // beforeUnmount(){
    //     console.log('----beforeUnmount----');
    // },
    // unmounted(){
    //     console.log('---unmounted---');
    // }
};
</script>
