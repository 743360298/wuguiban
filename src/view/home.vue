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
    <div class="position" @click="addressDetail">
      <i class="van-icon van-icon-location"><!----></i>
      <span>广州</span>
    </div>
    <span>乌龟邦</span>
    <div class="Notice" @click="toNotice">
      <i class="van-icon van-icon-bell"><!----></i>
    </div>
  </header>
  

  <van-swipe :autoplay="3000">
    <van-swipe-item v-for="(img, index) in swipeImg" :key="index">
      <img :src="img"  alt=""/>
    </van-swipe-item>
  </van-swipe>

  <van-notice-bar
    text="乌龟邦维修品牌是一家线上线下大型综合维修公司，公司拥有APP、微信公众号、官网、软件开发团队9人，在线客服及行政管理人员五十多名，目前线上注册入驻各种维修师傅1万多名，线下注册入驻师傅4000多名。"
    left-icon="volume-o"
  />


  <!-- 维修服务 -->
  <div class="M-service">
    <div class="serviceTitle">
       <i class="van-icon van-icon-setting-o"><!----></i>
      <span>安装服务</span>
    </div>
      <div class="PullGoods" @click="ToInstallation">
      <div>
        <span>安装<i>拆卸</i></span>
        <span>上门安装服务到家</span>
      </div>
      <div>
        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555414298268&di=f1fa8bd090ced4de9a9c30340ec2b884&imgtype=0&src=http%3A%2F%2Fpic.cifnews.com%2Fupload%2F201706%2F27%2F201706271450051654.jpg" alt="">
        <button class="reservation" @click.stop="reservationBtn">立即预约</button>
      </div>
    </div>
    <!-- <ul class="serviceList">
      <li  v-for="item in serviceList" :key="index" @click="serviceType($event)">
        <img :src="item.serviceImg" alt="">
        <span>{{item.serviceTxt}}</span>
      </li>
    </ul> -->

    <div class="serviceTitle">
       <i class="van-icon van-icon-chart-trending-o"><!----></i>
      <span>维修服务</span>
    </div>
      <div class="PullGoods">
      <div @click="ToService">
        <span>维修<i>清洗</i></span>
        <span>维修服务到家</span>
      </div>
      <div>
        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555414298268&di=f1fa8bd090ced4de9a9c30340ec2b884&imgtype=0&src=http%3A%2F%2Fpic.cifnews.com%2Fupload%2F201706%2F27%2F201706271450051654.jpg" alt="">
        <button class="reservation" @click.stop="reservationBtn">立即预约</button>
      </div>
    </div>

    <div class="serviceTitle">
       <i class="van-icon van-icon-logistics"><!----></i>
      <span>拉货服务</span>
    </div>
    <div class="PullGoods">
      <div @click="ToDelivery">
        <span>运货<i>拉货</i></span>
        <span>送货拉货服务到家</span>
      </div>
      <div>
        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555414298268&di=f1fa8bd090ced4de9a9c30340ec2b884&imgtype=0&src=http%3A%2F%2Fpic.cifnews.com%2Fupload%2F201706%2F27%2F201706271450051654.jpg" alt="">
        <button class="reservation" @click.stop="reservationBtn">立即预约</button>
      </div>
    </div>

    <div class="serviceTitle">
       <i class="van-icon van-icon-smile-comment-o"><!----></i>
      <span>推荐师傅</span>
    </div>

    <div class="serviceTitle">
       <i class="van-icon van-icon-volume-o"><!----></i>
      <span>相关资讯</span>
    </div>

  </div>






<!-- tab -->




    <!-- 底部导航 -->
    <tab-bar></tab-bar>
   
  </div>
</template>

<script>
// 引入底部导航组件
import TabBar from '@/components/tab-bar'

import {MP} from '../assets/map.js'
import { ImagePreview } from 'vant';

import { SwipeCell } from 'vant';

import { Toast } from 'vant';
import { log } from 'util';

import axios from 'axios'
import {  getUserInfo } from '@/api'
// Vue.use(SwipeCell);
export default {
  name: 'HelloWorld',
  components: {
    TabBar
  },
  data () {
    return {

      swipeImg: [
        'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3210417269,807141201&fm=26&gp=0.jpg',
        'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3210417269,807141201&fm=26&gp=0.jpg',
      ],

      serviceList:[
        {
          serviceImg: "http://wgb-1254198288.cosgz.myqcloud.com/wgbgw/images/15139286316141299",
          serviceTxt: "家电维修"
        },
        {
          serviceImg: "http://wgb-1254198288.cosgz.myqcloud.com/wgbgw/images/15139291637135555",
          serviceTxt: "手机电脑"
        },
        {
          serviceImg: "http://wgb-1254198288.cosgz.myqcloud.com/wgbgw/images/15139291947611761",
          serviceTxt: "汽车维修"
        },
        {
          serviceImg: "http://wgb-1254198288.cosgz.myqcloud.com/wgbgw/images/15139293176072064",
          serviceTxt: "皮革维修"
        },
        {
          serviceImg: "http://wgb-1254198288.cosgz.myqcloud.com/wgbgw/images/15139294347566521",
          serviceTxt: "水电维修"
        },
        {
          serviceImg: "http://wgb-1254198288.cosgz.myqcloud.com/wgbgw/images/15139294647012445",
          serviceTxt: "机械维修"
        },
        {
          serviceImg: "http://wgb-1254198288.cosgz.myqcloud.com/wgbgw/images/15139295313546002",
          serviceTxt: "电子数码"
        },
        {
          serviceImg: "http://wgb-1254198288.cosgz.myqcloud.com/wgbgw/images/15151394844513723",
          serviceTxt: "办公用品"
        },
 
      ]
     

    }
  },
  methods: {
    toNotice () {
      this.$router.push({name: 'notice'})
    },
    addressDetail(){
      this.$router.push({name: 'mapNotice'})
    },
    ToInstallation(){
      this.$router.push({name: 'installation'})
    },
    ToService(){
      this.$router.push({name: 'service'})
    },
    ToDelivery(){
      this.$router.push({name: 'delivery'})
    },
    serviceType(e){
      // e.target 是你当前点击的元素
      // e.currentTarget 是你绑定事件的元素
      console.log(e.currentTarget);
      this.$router.push({name: 'serviceType'})

    },
    reservationBtn:function(){
      Toast('敬情期待');
    },


  },
  beforeUpdate(){

  },
  created(){
    // 获取用户信息
    getUserInfo({
      'code':'021Xoi2r1oh5dl07DI1r14r02r1Xoi20'
    })
    .then(res=>{
      console.log(res);
    })

  }
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box ;
}
  #app{
      margin-bottom: 90px;
      margin-top: 90px;
  }
  .hello{
      margin-bottom: 90px;
  }
  header{
    box-shadow:  0 3px 3px #f7f7f7 ;
    position: fixed ;
    left:  0 ;
    top:  0 ;
    width: 100% ;
    z-index: 999999;
    background-color: #fff ;
    height: 70px;
    // background-color: pink ;
    padding: 0 0.2rem ;
    display: flex ;
    justify-content: space-between; 
    align-items: center ;
    h1{
      font-size: 0.32rem  ;
    }
    .position{
      color: #0edc7a ;
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
    .Notice{
      color: #0edc7a ;
      font-size: 32px; 
    }
  }

  .van-swipe{
    margin-top: 90px ;
  }
  .van-swipe-item{
    width: 100% ;
    img{
      width: 100% ;
    }
  }

  .M-service{
    padding: 0 20px ;
    background-color: #f8f8f8 ;
    .serviceTitle{
      padding: 20px 0;
      display: flex ;
      align-items: center ;
      span{
        margin-left:  10px ;
        font-size: 30px ;
      }
      i{
        color: #0edc7a ;
      }
    }
    .serviceList{
      display: flex ;
      flex-wrap: wrap ;
      li{
        width: 33.33% ;
        height: 150px;
        display: flex ;
        align-items: center ;
        justify-content: center ;
        outline: 3px solid #f0f0f0;
        background-color: #fff;
        img{
          width: 50px ;
        }
        span{
          font-size: 30px ;
          margin-left: 10px ;
        }
      }
    }
    .PullGoods{
      border: 3px solid #dfdfdf ;
      display: flex;
      align-items: center;
      padding:10px  20px ;
      div{
        position: relative;
        width: 50% ;
        span{
          display: flex ;
          font-size: 40px ;
          i{
            font-style:normal;
            color: #7ccc55 ;
          }
          // flex-direction: column ;
        }
        >span:first-child{
           font-size: 50px ;
        }
        img{
          width: 100%;
        }
        .reservation{
          position: absolute;
          top: 50% ;
          right: 0 ;
          transform: translate(0 ,-50%  );
          font-size: 30px ;
           white-space: nowrap;
          border: 3px solid #dfdfdf ;
          color: #afafaf ;
          background-color: #fff;
          padding:10px  20px ;
          // border-radius:  50px;
        }
      }
    }
  }
  .van-notice-bar{
    padding: 0 10px ;
    // width: 50% ;
    // border-radius: 50px 0 0  50px ;
    // border: #099f58 solid 1px ;
    // border-right: 0 ;
  }
  .van-swipe__indicator--active{
    background-color: #0edc7a !important;
  }
</style>
