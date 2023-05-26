<template>
    <div>
        <h2>数字num:{{ num }}</h2>
        <button @click="num++">点击num++</button>
        <hr>
        <h2>姓名：{{ name }}</h2>
        <button @click="name +='~'">修改姓名</button>
        <hr>
        <h2>员工:{{ person.name }}</h2>
        <button @click="person.name += '~'">修改姓名</button>
        <h2>薪资:{{ person.job.j1.salary }}k</h2>
        <button @click="person.job.j1.salary++">修改薪资</button>
    </div>
</template>

<script>
import { computed, reactive,ref,watchEffect } from "vue";
export default {
    name: "Demo",
    setup() {
       let num = ref(0)
       let name = ref('里斯')
       let person = reactive({
            name:'张三',
            age:12,
            job:{
                j1:{
                    salary:90
                }
            }
       })
       watchEffect(()=>{
        const x1 = name.value
        const x2 = num.value
        console.log('数据被修改了');
       })
        return {
            num,
            name,
            person
        };
    },
};
</script>
