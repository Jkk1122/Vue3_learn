<template>
    <div>
        <h1>{{ person }}</h1>
        <h2>姓名:{{ name }}</h2>
        <h2>年龄：{{ age }}</h2>
        <h2>薪资：{{  job.j1.salary }}K</h2>
        <h2>num的值:{{ num.y }}</h2>
        <hr />
        <button @click="num.y++">点击num+1</button>
        <button @click="name += '~'">修改姓名</button>
        <button @click="age++">修改年龄</button>
        <button @click=" job.j1.salary++">涨薪</button>
        <hr>
    </div>
</template>

<script>
// shallowReactive和shalloweRef
import { reactive, ref, toRef, toRefs,shallowReactive,shallowRef } from "vue";
export default {
    name: "Demo",
    setup() {
        let person = reactive({
            // let person = shallowReactive({
                // shallowReactive  只支持修改第一层数据,salary深层数据不支持修改
            name: "张三",
            age: 12,
            job: {
                j1: {
                    salary: 90,
                },
            },
        });
        // let num = ref(0)
        // shallowRef也是只支持浅层次,即第一层的修改
        // let num = shallowRef(0)
        // let num = ref({  //可以修改
            let num = shallowRef({     //无法修改y的值
            y:0
        })

        
        return {
            num,
            person  ,
            ...toRefs(person)
        };
    },
};
</script>
