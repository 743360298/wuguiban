<template>

    <div class="base">
        <my-header mytitle="修改密码方式"></my-header>

        <div class="PasswordOption">

            <ul class="myList">
                <li @click="ToChangePassword">
                <span >知道密码</span>
                <div>
                    <i class="van-icon van-icon-arrow"><!----></i>
                </div>
                </li>
                <li @click="ToForgetPassword">
                <span>忘记密码</span>
                <i class="van-icon van-icon-arrow"><!----></i>
                </li>
                <li >
                <span>其他方式修改</span>
                <i class="van-icon van-icon-arrow"><!----></i>
                </li>
            </ul>
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
    methods: {
        ToChangePassword () {
            this.$router.push({name: 'changePassword'})
        },
        ToForgetPassword () {
            this.$router.push({name: 'forgetPassword'})
        },
    }

    // 

}
</script>

<style lang="scss" scoped>
.PasswordOption{
    // margin-top: 90px;
    // background: #ededed;
    padding: 80px 0 0 ;
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
</style>
