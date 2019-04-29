<template>
    <div class="nav-footer">
      <!-- 1.2 点击事件，点击的时候传入跳转的path的name的值，然后在函数中跳转就行了 -->
      <div class="nav-footer-item" :class="path=='/' ? 'active' : ''"  @click="GoTo('home')">
        <i class="van-icon van-icon-wap-home"><!----></i>
        <span>首页</span>
      </div>
      <div class="nav-footer-item" v-if="master == '2'" :class="path=='/Service' ? 'active' : ''" @click="GoTo('service')">
        <i class="van-icon van-icon-apps-o"><!----></i>
        <span>维修</span>
      </div>
      <div class="nav-footer-item" v-if="master == '1'" :class="path=='/Orders' ? 'active' : ''" @click="GoTo('orders')">
        <i class="van-icon van-icon-coupon-o"><!----></i>
        <span>工单</span>
        <!-- <span class="badge">2</span> -->
      </div>
      <div class="nav-footer-item" v-else-if="master == '2'" :class="path=='/SendOrders' ? 'active' : ''" @click="GoTo('sendOrders')">
        <i class="van-icon van-icon-coupon-o"></i>
        <span>派单</span>
      </div>
      <div class="nav-footer-item" v-if="master == '1'" :class="path=='/Problem' ? 'active' : ''" @click="GoTo('problem')">
        <i class="van-icon van-icon-chat-o"><!----></i>
        <span>消息</span>
        <!-- <span class="badge">2</span> -->
      </div>
      <div class="nav-footer-item" :class="path=='/User' ? 'active' : ''" @click="GoTo('user')">
        <i class="van-icon van-icon-manager-o"><!----></i>
        <span>我的</span>
      </div>
    </div>
</template>

<script>
export default {

  data () {
    return {
      path: this.$route.path,
      // master: '1',
      master: localStorage.getItem("master"),
      Orders:true,
    }
  },
  mounted() {
      // console.log(this.$route.path)
  },
  created () {
    // var master = localStorage.getItem("master")
    // if(master == '1'){  // 1 是师傅
    //   Orders:true
    // }else{                // 其他是用户
    //   Orders:false
    // }
  },
  methods: {
    GoTo (name) {
      this.$router.push({name: name})
    }
  }
}
</script>

<style>
.nav-footer{
  z-index: 99999999999999999999999999;
    position: fixed ;
    left: 0;
    bottom:  0;
    display: flex ;
    height: 90px;
    width: 100% ;
    background-color: #f7f7f7;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
}
.nav-footer .nav-footer-item{
   width: 25% ;
   display: flex;
    flex-direction: column; 
   align-items: center ;
   justify-content: center ;
}
.active{
    color: #0edc7a;
    /* background: #f8f8f8; */
    font-weight: 600; 
}
.van-icon, .van-icon::before{
    font-size: 36px ;
}
</style>
