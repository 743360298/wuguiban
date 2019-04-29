<template>
  <div>
    <!-- 面对角色 师傅 -->
    <my-header mytitle="问题"></my-header>

    <div class="pt ">
        <!-- <div class="optionsBox">
            <div class="optionsTitle">服务流程</div>
            <ul class="options">
            <li>
                <i class="van-icon van-icon-coupon-o"></i>
                <span>发布</span>
                <span>订单任务</span>
            </li>
            <li>
                <i class="van-icon van-icon-coupon-o"></i>
                <span>师傅</span>          
                <span>抢单/报价</span>          
            </li>
            <li>
                <i class="van-icon van-icon-coupon-o"></i>
                <span>付款</span>
                <span>至平台</span>
            </li>
            <li>
                <i class="van-icon van-icon-coupon-o"></i>
                <span>师傅</span>          
                <span>上门服务</span>          
            </li>
            <li>
                <i class="van-icon van-icon-coupon-o"></i>
                <span>服务</span>          
                <span>验收与评价</span>          
            </li>
            </ul>
        </div> -->
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
.optionsBox{
  box-shadow:  0 0 10px 10px rgba(0,0,0,0.1);
  margin: 20px auto 20px ;
  width: 96%;
  .optionsTitle{
    font-size: 30px ;
    position: relative;
  }
  .optionsTitle::after{
    position: absolute;
    content: "";
    clear: both;
    height: 1px;
    width: 10%;
    background-color: #0edc7a;
    bottom: 0;
    left: 50%;
    -webkit-transform: translate(-50%);
    transform: translate(-50%);
  }
}
.options{
  padding: 10px 0 10px ;
  display: flex ;
  justify-content: space-between ;
  li{
    width: 20%;
    display: flex ;
    flex-direction: column ;
    i{
      color: #0edc7a ;
    }
  }
}
</style>
