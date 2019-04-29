<template>
  <div class="userBox">
    <my-header mytitle="个人中心"></my-header>

    <div class="user">
      <div class="userInfo" @click="ToUserInfo">
        <div class="myImg"  >
          <img  src="../assets/logo.jpg" alt="">
        </div>
        <div class="myInfo">
          <div>
            <span class="myName">乌龟</span>
            <span class="myWallet">充钱你会变强</span>
          </div>
          <i class="van-icon van-icon-arrow"><!----></i>
        <!-- <span class="loginBtn" @click="ToLogin">登录</span> -->
        </div>
      </div>
    </div>

       <ul class="myList">
         <li >
           <span >已绑定手机号</span>
           <span v-if="false">未绑定手机号</span>
           <div>
             <span id="myPhone" v-if="true">13800138000</span>
             <i class="van-icon van-icon-arrow"><!----></i>
           </div>
         </li>
         <li @click="ToMyWallet">
           <span>钱包</span>
           <i class="van-icon van-icon-arrow"><!----></i>
         </li>
         <li @click="ToRecharge">
           <span>充值</span>
           <i class="van-icon van-icon-arrow"><!----></i>
         </li>
         <li @click="ToEnterprise">
           <span>档案认证</span>
           <i class="van-icon van-icon-arrow"><!----></i>
         </li>
         <li  @click="ToMyAddress">
           <span>我的地址</span>
           <i class="van-icon van-icon-arrow"><!----></i>
         </li>
         <li  @click="ToPasswordOption">
           <span>修改密码</span>
           <i class="van-icon van-icon-arrow"><!----></i>
         </li>
       </ul>





     <!-- 底部导航 -->
    <tab-bar></tab-bar>
  </div>
</template>

<script>
// 引入头部标题组件
import MyHeader from '@/components/header'
// 引入底部导航组件

import TabBar from '@/components/tab-bar'
import axios from 'axios'
import { userInfo } from '@/api';
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
    methods: {
        ToLogin () {
            this.$router.push({name: 'login'})
        },
        ToUserInfo () {
            this.$router.push({name: 'userInfo'})
        },
        ToRecharge () {
            this.$router.push({name: 'recharge'})
        },
        ToMyWallet () {
            this.$router.push({name: 'myWallet'})
        },
        ToMyAddress () {
            this.$router.push({name: 'address'})
        },
        ToPasswordOption () {
            this.$router.push({name: 'passwordOption'})
        },
        ToEnterprise () {
            this.$router.push({name: 'enterprise'})
        },

        
    },
    beforeUpdate(){
      userInfo()
      .then(res=>{
        console.log(res);
        
      })
    },
    mouted(){
      
    }
 

}
</script>


<style lang="scss" scoped>
*{
  // margin: 0;
  // padding: 0;
  box-sizing: border-box ;
}
.userBox{
  background-color: #ededed ;
  // background-color: #f7f7f7;
  height: 100vh;
  padding: 90px 0 0 ;
}
.van-goods-action{
  bottom: 50px;
}
.van-number-keyboard{
   bottom: 50px;
}
.user{
  // margin-top: 90px ;
  padding: 0 20px  ;
  background-color: #fff ;
  .userInfo{
    // background-color: skyblue ;
    display: flex ;
    padding: 20px 0;
    .myImg{
      width: 150px;
      border-radius: 30px ;
      overflow: hidden;
      img{
        width: 100% ;
      }
    }
    .myInfo{
      margin-left: 20px ;
      width: 100% ;
      display: flex ;
      justify-content: space-between ;
      align-items: center ;
        padding: 10px 0;
        div{
        display: flex ;
        flex-direction: column ;
        justify-content: space-around;
        height: 100%;
          span{
          text-align: start ;
          line-height: initial ;
        }
        .myName{
          font-size: 30px ;
        }
      }
      // .myWallet{}
    }
  }
}
.myList{
  width: 100% ;
  li{
    padding: 0 20px  ;
    width: 100%;
    height: 80px ;
    background-color: #fff;
    margin-top: 15px;
    display: flex ;
    justify-content: space-between ;
    align-items: center ;
   span{
      font-size: 26px ;
      color: #333 ;
   }
   div{
     display: flex ;
     align-items: center ;
     span{
       margin-right: 10px ;
     }
   }
  }
}
/* .passwordBox{
  display: none ;
} */
</style>
