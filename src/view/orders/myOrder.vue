<template>
  <div>
    <!-- 面对角色 ==  企业用户 -->
    <my-header mytitle="我的订单"></my-header>

   





     <!-- 底部导航 -->
  </div>
</template>

<script>
// 引入头部标题组件
import MyHeader from '@/components/my-header'
// 引入底部导航组件
import TabBar from '@/components/tab-bar'
// import { Search } from 'vant';
// Vue.use(Search);
import { Toast } from 'vant';
import axios from 'axios'
import {  getList } from '@/api'
export default {
    components: {
        TabBar,
        MyHeader
    },
   data () {
    return {
    }
  },
    created(){
      getList({
          "businessNo": "string",
          "limit": 0,
          "page": 0
      })
      .then(res=>{
        console.log(res);
        if(res.data.code == '01'){
          Toast(res.data.message)
        }else{
          Toast(res.data.message)

        }
        
      })
    }
 

}
</script>


<style lang="scss" scoped>
#app{
  text-align: left ;
}
</style>
