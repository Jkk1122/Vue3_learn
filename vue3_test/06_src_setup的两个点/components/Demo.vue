<!-- 
    主要讨论
    1、setup执行的时机 在生命周期钩子beforeCreate之前，this的值为undefined。 在组合式API生命周期钩子中，没有beforeCreate和created 或者说 setup就是这两个钩子
    2、setup的参数：两个参数，props和context   其中props相当于vue2中的；context中的有attrs，emit，slot
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
