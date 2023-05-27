// 封装组合API方法
// 引入所需的函数和生命周期钩子
import {reactive,onMounted,onBeforeUnmount} from 'vue'

// 打点函数
function usePoint() {
    // reactive初始化响应式数据point
  let point = reactive({
    x: 0,
    y: 0,
  });
    //打点函数赋值   
  function usePoint(event) {
    point.x = event.pageX;
    point.y = event.pageY;
    console.log(event.pageX, event.pageY);
  }
    //打点生命周期钩子   
  onMounted(() => {
    // 设置监听点击事件，调用打点函数
    window.addEventListener("click", usePoint);
  });

  onBeforeUnmount(() => {
    // 移除监听事件
    window.removeEventListener("click", usePoint);
  });
    //返回打点值   
  return point
}
// 暴露函数
export default usePoint
