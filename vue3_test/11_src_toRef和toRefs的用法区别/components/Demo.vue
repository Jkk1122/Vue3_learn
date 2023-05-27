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
        <h2>姓名:{{ name }}</h2>
        <h2>年龄：{{ age }}</h2>
        <h2>薪资：{{ job.j1.salary }}K</h2>
    </div>
</template>

<script>
import { reactive, ref, toRef, toRefs } from "vue";
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

        // toRefs写法
        // 返回一个对象,RefImpl
        const x = toRefs(person)
        // console.log({...x});

        /*
            误区:  会误解toRef和ref的区别,它们两个都会生成一个对象,
            但是,如果return源数据对象的某个属性生成的ref对象,这个对象是基于这个属性的,
            就相当于把这个数据和源数据分开了,当数据修改的时候只会修改当前的ref数据,源数据并没有发生变化

            如果返回的是toRef生成的源数据某个属性生成的对象时,其生成的对象的value是指向源数据的,数据修改的时候,是同时发生改变的
        */ 


        // 简化模板字符串的书写
        // toRef 和 toRefs
        return {
            person,
            // toRef写法
            // name: toRef(person, "name"),
            // age: toRef(person, "age"),
            // salary: toRef(person.job.j1, "salary"),


            // toRefs写法
            // ...x将toRefs创建的对象,全部解析到return的对象中
            ...x
        };
    },
};
</script>
