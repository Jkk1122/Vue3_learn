<!-- 
    主要讨论
    1、setup执行的时机
    2、setup的参数
 -->


<template>
    <div>
        <!-- 模板字符串不用进行.value操作 -->
        <h1>姓名: {{ person.name }}</h1>
        <h1>年龄: {{ person.age }}</h1>
        <button @click="test">点击</button>
        <slot></slot>
    </div>
</template>

<script>
import { reactive } from "vue";
export default {
    name: "Demo",
    props:['msg','song'],
    // 函数
    // setup可以接收到两个属性  props和 context
    setup(props, context) {
        // console.log("-------props", props);   传递props参数
        // console.log('--attrs---',context.attrs);  相当于vue2中的$attrs
        console.log('----context--',context);
        // console.log('---emit--',context.emit);  触发自定义事件
        // console.log('---slot--',context.slots);   插槽
        let person = reactive({
            name: "张三",
            age: 34,
        });
        //配置方法
        function test(){
            context.emit('hello',3333)
        }
        //返回数据和配置方法
        return {
            person,
            test
        };
    },
};
</script>
