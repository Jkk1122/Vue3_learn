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
import { computed, reactive,ref,watch } from "vue";
export default {
    name: "Demo",
    setup() {
       let num = ref(0)
       let name = ref('里斯')
       let person = reactive({
            name:'张三',
            age:'12',
            job:{
                j1:{
                    salary:90
                }
            }
       })
        
        // 监视属性  No.1  watch第一种情况  监视ref所定义的一个响应式数据
        // watch(num,(newvalue,oldvalue)=>{
        //     console.log('num的值变了',newvalue,oldvalue);
        // })

        // 监视属性  No.2 watch第二种情况  监视ref所定义的多个i响应式数据
        // watch([num,name],(newvalue,oldvalue)=>{
        //     console.log('num或name改变了',newvalue,oldvalue);
        // })

        // 监视属性  No.3  监视reactive所定义的一个响应式数据的全部属性
        /*
            1、注意：此处无法正确读取oldvalue
            2、注意：强制开启了深度监视（deep配置无效）
        */
        // watch(person,(newvalue,oldvalue)=>{
        //     console.log('person数据改变了',newvalue,oldvalue);
        // },{deep:true}) //此处的deep配置无效

            // 上述3的person如果为ref定义的数据 监视由两种方案  1、deep配置是有效的 2、person.value   

        //No.4  监视reactive所定义的一个响应式数据的某个属性
        // watch(()=>person.name,(newvalue,oldvalue)=>{
        //     console.log('person.name属性变了',newvalue,oldvalue);
        // })

        //No.5 监视reactive所定义的一个响应式数据的多个属性
        // watch([()=>person.name,()=>person.job.j1.salary],(newvalue,oldvalue)=>{
        //     console.log('person某个属性修改了',newvalue,oldvalue);
        // },{immediate:true})

        //特殊情况    此处无法正确读取oldvalue
        // watch(person.job,(newvalue,oldvalue)=>{
        //     console.log('数据改变了',newvalue,oldvalue);
        // })

        // 特殊情况    
        // watch(()=>person.job,(newvalue,oldvalue)=>{
        //     console.log('数据改变了',newvalue,oldvalue);
        // },{deep:true})   //此处由于监视的是reactive所定义的对象中的某个属性，所以deep的配置有效

        return {
            num,
            name,
            person
        };
    },
};
</script>
