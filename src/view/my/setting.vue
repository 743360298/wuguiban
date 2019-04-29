<template>
    <div class="settingBox">
        <my-header mytitle="设置"></my-header>

        <div class="setting">
            <ul class="settingList">
                <li @click="ToOpinion">
                    <span>意见反馈</span>
                    <i class="van-icon van-icon-arrow"><!----></i>
                </li>
                <li>
                    <span>分享</span>
                    <i class="van-icon van-icon-arrow"><!----></i>
                </li>
                <li>
                    <span>加入乌龟邦</span>
                    <i class="van-icon van-icon-arrow"><!----></i>
                </li>
                <li @click="ToAboutUs">
                    <span>关于乌龟邦</span>
                    <i class="van-icon van-icon-arrow"><!----></i>
                </li>
            </ul>
            <van-button type="primary">退出登录</van-button>
        </div>
    </div>
</template>

<script>
 // 引入头部标题组件
import MyHeader from '@/components/my-header'
export default {
    components: {
        MyHeader
    },
    data(){
        return{

        }
    },
    methods:{
        ToAboutUs () {
            this.$router.push({name: 'aboutUs'})
        },
        ToOpinion () {
            this.$router.push({name: 'opinion'})
        },
    }

}
</script>

<style lang="scss" scoped>
.setting{
    width: 100% ;
    height: 100vh;
    background-color: #ededed;
}
*{
    box-sizing: border-box ;
}
.settingList{
  padding-top: 75px ;
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
   .van-icon{
      font-size: 26px ;
      color: #333 ;

   }
  }
}
.van-button{
    width: 80%;
    margin-top: 50px;
    .van-button__text{
        letter-spacing:2px ;
    }
}
</style>
