<template>
  <div>
    <!-- 面对角色 师傅 -->
    <my-header mytitle="工单"></my-header>

    <div class="pt ">
      <div class="orders">
        <ul class="ordersBusiness">
          <li>指纹锁</li>
          <li>厨房家电</li>
          <li>智能晾衣架</li>
          <li>卫浴维修</li>
        </ul>
      </div>


      
    </div>




    <!-- <div class="orderForm">
      <van-card
      num="1"
      price="100.00"
      desc="加雪种"  
      title="空调维修"
      thumb="http://tg.wgbservice.com/comdata/73879/201901/201901101534072e10cc.jpg"
    </div>
    /> -->



     <!-- 底部导航 -->
    <tab-bar></tab-bar>
  </div>
</template>

<script>
// 引入头部标题组件
import MyHeader from '@/components/header'
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
