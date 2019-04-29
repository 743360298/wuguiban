<template>
  <div class="noticebox">

    <my-header mytitle="公告信息"></my-header>

    <ul class="notice">
        <li @click="system">
            <div>
                  <i class="van-icon van-icon-bullhorn-o"><!----></i>
                  <span>系统公告</span>
            </div>
             <i class="van-icon van-icon-arrow"><!----></i>
        </li>
        <li  @click="system">
            <div>
                  <i class="van-icon van-icon-comment-o"><!----></i>
                  <span>个人通知</span>
            </div>
             <i class="van-icon van-icon-arrow"><!----></i>
        </li>
        <li  @click="system">
            <div>
                  <i class="van-icon van-icon-point-gift-o"><!----></i>
                  <span>活动通知</span>
            </div>
             <i class="van-icon van-icon-arrow"><!----></i>
        </li>
    </ul>





   
  </div>
</template>

<script>
// 引入头部标题组件
import MyHeader from '@/components/my-header'
import { ImagePreview } from 'vant';

import { SwipeCell } from 'vant';
import { log } from 'util';

import { Toast } from 'vant';

// Vue.use(Toast);

// Vue.use(SwipeCell);
export default {
  name: 'HelloWorld',
  components: {
    MyHeader
  },
  data () {
    
    return {
     

    }
  },
   mounted() {
    // this.$dialog.alert({
    //   message: '敬请期待'
    // });

    
  },
  methods: {
      system:function(){
        Toast('敬情期待');
      },
      goBack () {
        this.$router.go(-1)
      },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.noticebox{
  background-color: #ededed ;
  height: 100vh;
  padding: 90px 0 0 ;
  box-sizing: border-box ;
}
.notice{
    // margin-top: 90px ;
    li{
        background-color: #fff;
        padding:  0 20px;
        height: 80px;
        display: flex ;
        justify-content: space-between ;
        border-bottom: 1px solid #f7f7f7 ;
        font-size: 30px ;
        display: flex;
        align-items: center ;
        margin-bottom: 10px ;
        div{
            display: flex ; 
            align-items: center ;
            font-size: 30px ;
            span{
                margin-left: 10px ;
            }     
            i{
                color: #0edc7a ;
                font-weight: 600 ;
            }
        }
    }
}
</style>
