<template>
    <div>
        <h2>数字num:{{ num }}</h2>
        <button @click="num++">点击num++</button>
        <hr>
        <h1>点击的坐标x:{{ point.x }},y:{{ point.y }}</h1>
    </div>
</template>

<script>
import {ref} from "vue";
// 引入打点函数
import usePoint from '../hooks/usePoint'
export default {
    name: "Demo",
    setup() {
        let num = ref(0)
        // 获取打点信息
        let point = usePoint()
        return {
            num,
            point
        };
    },
};
</script>
