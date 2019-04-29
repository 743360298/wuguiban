<template>
  <div>
    <!-- 面对角色 ==  企业用户 -->
    <my-header mytitle="异常订单"></my-header>


     <!-- 底部导航 -->
  </div>
</template>

<script>
// 引入头部标题组件
import MyHeader from '@/components/my-header'
// 引入底部导航组件
import TabBar from '@/components/tab-bar'
// import { Search } from 'vant';
// Vue.use(Search);
export default {
    components: {
        TabBar,
        MyHeader
    },
   data () {
    return {
    }
  },
 

}
</script>


<style lang="scss" scoped>
#app{
  text-align: left ;
}
</style>
