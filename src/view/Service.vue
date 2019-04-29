<template>
  <div>
    <my-header mytitle="维修类型"></my-header>

    <div class="service">
      <ul class="serviceList">
        <li  v-for="item in serviceList" :key="index" @click="serviceType($event)">
          <img :src="item.serviceImg" alt="">
          <span>{{item.serviceTxt}}</span>
        </li>
      </ul>
    </div>

    <!-- 底部导航 -->
    <tab-bar></tab-bar>
  </div>
</template>

<script>
// 引入头部标题组件
import MyHeader from '@/components/header'
// 引入底部导航组件
import TabBar from "@/components/tab-bar"
// import { Search } from 'vant'
// Vue.use(Search);
import { Toast } from 'vant';
export default {
  components: {
    TabBar,
    MyHeader
  },
  methods: {
      serviceType () {
          // this.$router.push({name: 'serviceType'})
           Toast('敬请期待');
      }
  },
  data() {
    return {
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
        }
      ]
    }
  }
};
</script>

<style lang="scss" scoped>
.service{
  margin-top: 90px ;
  padding: 0 20px ;
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
</style>
