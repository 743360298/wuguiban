<template>

    <div>
        <my-header mytitle="我的钱包"></my-header>

        <div class="base pt">
            <ul class="myList">
                <li>
                    <span>充值</span>
                    <i class="van-icon van-icon-arrow"><!----></i>
                </li>
                <li>
                    <span>余额</span>
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

}
</script>

<style lang="scss" scoped>
.myList li{
  padding: 0 20px  ;
  width: 100%;
  height: 80px ;
  background-color: #fff;
  margin-top: 15px;
  display: flex ;
  justify-content: space-between ;
  align-items: center ;
}
.myList li span{
    font-size: 26px ;
    color: #333 ;
 }
 .myList li div{
   display: flex ;
   align-items: center ;
 }
 .myList li  div span{
     margin-right: 10px ;
   }
</style>
