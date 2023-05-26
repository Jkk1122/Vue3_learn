<template>
    <div>
        <h1>展示姓名</h1>
        姓: <input type="text" v-model="person.firstname"><br>
        名: <input type="text" v-model="person.lastname"><br>
        <span>全名：{{fullname}}</span><br>
        全名：<input type="text" v-model="fullname">
    </div>
</template>

<script>
import { computed, reactive } from "vue";
export default {
    name: "Demo",
    setup() {
       
        let person = reactive({
            firstname: '张',
            lastname: '三',
        });
        // 计算属性---简单写法【无法动态修改fullname的值】
        // let fullname = computed(()=>{
        //     return person.firstname + '-' + person.lastname
        // })

        // 计算属性---完整写法【可以修改fullname的值】
        let fullname = computed({
            get(){
                return person.firstname + '-' + person.lastname
            },
            set(value){
                const nameArr = value.split('-')
                person.firstname = nameArr[0]
                person.lastname = nameArr[1] 
            }
        })
        return {
            person,
            fullname
        };
    },
};
</script>
