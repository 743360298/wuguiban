<template>
  <div class="hello">
    <!-- <h1>{{ msg }}</h1> -->
    <!-- <van-button round type="danger">圆形按钮</van-button> -->

    <!-- 导航 -->
    <!-- <van-nav-bar
  title="标题"
  left-text="返回"
  right-text="按钮"
  left-arrow
  @click-left="onClickLeft"
  @click-right="onClickRight"
/> -->
  <header>
    <div class="position">
      <i class="van-icon van-icon-location"><!----></i>
      <span>广州</span>
    </div>
    <span>乌龟邦</span>
    <div class="info">
      <i class="van-icon van-icon-bell"><!----></i>
    </div>
  </header>





<!-- tab -->




    <!-- 底部导航 -->
    <tab-bar></tab-bar>
   
  </div>
</template>

<script>
// 引入底部导航组件
import TabBar from '@/components/tab-bar'

import { ImagePreview } from 'vant';

import { SwipeCell } from 'vant';

// Vue.use(SwipeCell);
export default {
  name: 'HelloWorld',
  components: {
    TabBar
  },
  data () {
    
    return {
     

    }
  },
  methods: {

 

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

  header{
    height: 90px;
    // background-color: pink ;
    padding: 0 0.2rem ;
    display: flex ;
    justify-content: space-between; 
    align-items: center ;
    h1{
      font-size: 0.32rem  ;
    }
    .position{
      color: #099f58 ;
      display: flex ;
      align-items: center ;
      span{
        font-size:  30px;
        // margin-left: 10px ;
      }
      .van-icon{
        font-size: 32px; 
        // margin-right: 10px;
      }
    }
    .info{
      color: #099f58 ;
      font-size: 32px; 
    }
  }
</style>
