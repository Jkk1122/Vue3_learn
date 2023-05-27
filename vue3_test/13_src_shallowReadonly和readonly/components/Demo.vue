<template>
    <div>
        <h1>{{ person }}</h1>
        <h2>姓名:{{ name }}</h2>
        <h2>年龄：{{ age }}</h2>
        <h2>薪资：{{  job.j1.salary }}K</h2>
        
        <hr />
        
        <button @click="name += '~'">修改姓名</button>
        <button @click="age++">修改年龄</button>
        <button @click=" job.j1.salary++">涨薪</button>
        <hr>
    </div>
</template>

<script>
import { reactive, ref, toRef, toRefs,shallowReadonly,readonly } from "vue";
export default {
    name: "Demo",
    setup() {
        let person = reactive({
            name: "张三",
            age: 12,
            job: {
                j1: {
                    salary: 90,
                },
            },
        });
        // 浅层只读属性，shallowReaonly  person数据中的saraly数据是可以进行修改的
        // person = shallowReadonly(person)

        // 深层只读属性，  person数据中的所有值都不可以修改
        person = readonly(person)
        
        return {
            person  ,
            ...toRefs(person)
        };
    },
};
</script>
