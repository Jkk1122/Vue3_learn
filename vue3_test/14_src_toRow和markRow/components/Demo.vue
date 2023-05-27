<template>
    <div>
        <h1>{{ person }}</h1>
        <h2>姓名:{{ name }}</h2>
        <h2>年龄：{{ age }}</h2>
        <h2>薪资：{{  job.j1.salary }}K</h2>
        <h2 v-show="person.car" >车辆:{{ person.car }}</h2>
        <hr/>
        
        <button @click="name += '~'">修改姓名</button>
        <button @click="age++">修改年龄</button>
        <button @click=" job.j1.salary++">涨薪</button>
        <button @click="showRowPerson">点击获取原始数据</button>
        <hr>
        <button @click="addCar">点击购置一辆车</button>
        <button @click="person.car.name +='!'">换车</button>
        <button @click="person.car.price ++">涨价</button>
    </div>
</template>

<script>
import { reactive,toRefs,toRaw,markRaw } from "vue";
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
        
        function showRowPerson(){
            // 获取有源数生成的响应式的数据
           let x = person
        //    x为响应式数据
            console.log(x);
            // 获取非响应式的源数据
            let p = toRaw(person)
            // p不是响应式数据
            console.log(p);
        }

        // 新增添一个属性
        function addCar(){
            let car = {name:'五菱宏光',price:5}
            // markRaw使数据永远不再是响应式
            // 复杂数据，外部库，使其不成为响应式数据，提高性能，否则会一层一层加上响应式
            person.car = markRaw(car)
            
            console.log(car);
        }

        return {
            addCar,
            showRowPerson,
            person  ,
            ...toRefs(person)
        };
    },
};
</script>
