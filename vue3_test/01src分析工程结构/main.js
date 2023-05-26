// 引入的不是vue构造函数 【creatApp】 工厂函数

// 不兼容vue2的写法
import { createApp } from 'vue'
import App from './App.vue'

// 创建应用实例对象 app （类似于vue2中的vm，但是比vm更‘轻’）
const app = createApp(App)
// 挂载 
app.mount('#app')
setTimeout(()=>{
    // 卸载
    app.unmount('#app')
},2000)
