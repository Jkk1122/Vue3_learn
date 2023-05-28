<template>
    <div>
        <button @click="isShow = !isShow">点击弹窗</button>
        <!-- teltport组件，可以将组件的html结构移至页面的指定位置 -->
        <teleport to='body'>
            <div class="mask" v-if="isShow">
                <div class="dailog">
                    <h3>你好我是你爹地</h3>
                    <h3>你好我是你爹地</h3>
                    <h3>你好我是你爹地</h3>
                    <h3>你好我是你爹地</h3>
                    <button @click="isShow = !isShow">点击关闭弹窗</button>
                </div>
            </div>
        </teleport>
    </div>
</template>

<script>
import { ref } from 'vue'
export default {
    name: 'Dailog',
    setup() {
        let isShow = ref(false)
        return { isShow }
    }
}
</script>

<style>
.dailog {
    width: 200px;
    height: 200px;
    background-color: aquamarine;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    text-align: center;
}
.mask{
    position: absolute;
    top: 0;bottom: 0;left: 0;right: 0;
    background-color: rgb(0, 0, 0,0.5);
}
</style>