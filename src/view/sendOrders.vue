<template>
  <div>
    <!-- 面对角色 ==  企业用户 -->
    <my-header mytitle="派单"></my-header>

    <div class="pt pb">

        <div class="swipeBox">
          <van-swipe :autoplay="3000">
            <van-swipe-item v-for="(img, index) in swipeImg" :key="index">
              <img :src="img"  alt=""/>
            </van-swipe-item>
          </van-swipe>

          <ul class="options">
            <li @click="ToMyOrder">
              <i class="van-icon van-icon-coupon-o"><!----></i>
              <span>我的订单</span>
            </li>
            <li @click="ToWaitingSingle">
              <i class="van-icon van-icon-coupon-o"><!----></i>
              <span>待派单</span>          
            </li>
            <li @click="ToProcessing">
              <i class="van-icon van-icon-coupon-o"><!----></i>
              <span>进行中</span>
            </li>
            <li @click="ToAbnormal">
              <i class="van-icon van-icon-coupon-o"><!----></i>
              <span>异常中</span>          
            </li>
            <li @click="ToCompleted">
              <i class="van-icon van-icon-coupon-o"><!----></i>
              <span>已完工</span>          
            </li>
          </ul>
        </div>

        <div class="mapBox">
           <div id="container-map" style="width:100%; height:400px"></div>

           <div class="PlaceOrderBox">
              <div class="PlaceOrderTitle">
                <ul>
                  <li>智能锁</li>
                  <!-- <li>智能锁</li> -->
                </ul>
              </div>
              <div class="PlaceOrder">
                  <div class="PlaceOrderInfo">
                    <van-cell-group>
                      <van-field v-model="customerName" placeholder="客户姓名" />
                      <van-field v-model="customerPhone" placeholder="客户电话" />
                      <div class="customerAddress" @click="areaListShow=!areaListShow">{{customerAddress}}</div>
                    </van-cell-group>
                  </div>
                  <van-button type="primary" v-on:click="OrderBtn">下单</van-button>
              </div>
           </div>
        </div>

            <div class="addressPublic" v-if="areaListShow">
                <addressPublic ></addressPublic>
            </div>
    </div>



     <!-- 底部导航 -->
    <tab-bar></tab-bar>
  </div>
</template>

<script>
// 引入头部标题组件
import MyHeader from '@/components/header'
// 引入底部导航组件
import TabBar from '@/components/tab-bar'
 // 引入地址组件
import addressPublic from '@/components/addressPublic'
import  $ from 'jquery'
import { Toast } from 'vant';

import axios from 'axios'
import {  saveOrUpdate } from '@/api'
// import { Search } from 'vant';
// Vue.use(Search);
export default {
    components: {
        TabBar,
        MyHeader,
        addressPublic
    },
   data () {
    return {
      areaListShow:false,
      customerName:'石花',
      customerPhone:'15118675502',
      customerAddress:"客户地址",
      swipeImg: [
        'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3210417269,807141201&fm=26&gp=0.jpg',
        'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3210417269,807141201&fm=26&gp=0.jpg',
      ],
           map: null,
      /* 当前位置 */
      thisPosition: {
        location: '',
        lng: '',
        lat: ''
      },
      /* 选取的位置 */
      chosePosition: {
        location: '',
        lng: '',
        lat: ''
      },
      /* 范围圆的数据 */
      myCircle: {},
      /* 签到圆对象 */
      circle: {},
      /* 编辑器对象 */
      circleEditor: null,
      /* 拖拽对象 */
      positionPickerObj: {},
      /* 当前城市编码 */
      citycode: '020'

    }
  },
  created(){

    // var swipeBoxHeight = $(".swipeBox").outerHeight();
    // console.log(swipeBoxHeight);
    //   $("#container-map").style.height=swipeBoxHeight+ "px";
  },
   methods: {
    ToMyOrder(){
      this.$router.push({name: 'myOrder'})
    },
    ToWaitingSingle(){
      this.$router.push({name: 'waitingSingle'})
    },
    ToProcessing(){
      this.$router.push({name: 'processing'})
    },
    ToAbnormal(){
      this.$router.push({name: 'abnormal'})
    },
    ToCompleted(){
      this.$router.push({name: 'completed'})
    },
    OrderBtn(){

      saveOrUpdate({
          "address": "string",
          "businessNo": "string",                       // 企业
          "businessType": 0,
          "categoryId": 0,
          "city": 0,
          "createTime": "2019-04-29T09:18:24.253Z",    // 创建时间
          "evidenceImages": "string",
          "id": 0,
          "maintainType": 0,
          "maintenancePrice": 0,
          "maintenanceState": 0,
          "maintenanceType": 0,
          "marketPrice": "string",
          "openHolePrice": 0,
          "openHoleType": 0,
          "payType": "string",
          "provinceId": 0,
          "regionId": 0,
          "remarks": "string",
          "repairId": 0,
          "reservationEndTime": "string",
          "reservationStartTime": "string",
          "retailPrice": "string",
          "updateTime": "2019-04-29T09:18:24.253Z",   
          "userCellphone": "string",
          "userName": "string"
      })
        .then(res=>{
          console.log(res);
          if(res.data.code == '01'){
            Toast(res.data.message)
          }else{
            Toast(res.data.message)

          }
        })
    },
        // 确定选择地区
        changeArea:function(value){
            value.map((e,i)=>{
                // console.log(i)
                // console.log(e);
            })
            // areaListShow:false;
            let address=""
            value.forEach(function(el,index){
                address+=el.name
            })
            this.area=address
            this.areaListShow=false
        },
        shutDown:function(){
            this.areaListShow=false
        },



    /* 添加工具条 */
    addTool () {
      AMap.plugin(['AMap.ToolBar', 'AMap.Driving'], () => {
        let toolbar = new AMap.ToolBar()
        this.map.addControl(toolbar)
      })
    },
    /* 定位具体位置 */
    thisLocation () {
      this.map.plugin('AMap.Geolocation', () => {
        let geolocation = new AMap.Geolocation({
          // 是否使用高精度定位，默认：true
          enableHighAccuracy: true,
          // 设置定位超时时间，默认：无穷大
          timeout: 10000,
          // 定位按钮的停靠位置的偏移量，默认：Pixel(10, 20)
          buttonOffset: new AMap.Pixel(10, 20),
          //  定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
          zoomToAccuracy: false,
          //  定位按钮的排放位置,  RB表示右下
          buttonPosition: 'RB'
        })
        this.map.addControl(geolocation)
        geolocation.getCurrentPosition()
        AMap.event.addListener(geolocation, 'complete', (data) => {
          console.log(data)
          this.citycode = data.addressComponent.cityCode
          this.thisPosition = data.position
          this.thisPosition.message = data.formattedAddress
          this.chosePosition = this.thisPosition
          /* 画圆 */
          this.cancelLocation()
          this.addCircle()
          /* 拖拽选址 */
          this.positionPicker()
        })
        AMap.event.addListener(geolocation, 'error', function (data) {
          // alert('定位失败')
           Toast('定位失败');
        })
      })
    },
    /* 画图 */
    addCircle () {
      this.myCircle = {
        center: [this.chosePosition.lng, this.chosePosition.lat], // 圆心位置
        radius: 300, // 半径
        strokeColor: '#FFFF00', // 线颜色
        strokeOpacity: 0.2, // 线透明度
        strokeWeight: 1, // 线粗细度
        fillColor: '#222222', // 填充颜色
        fillOpacity: 0.2// 填充透明度
      }
      this.circle = new AMap.Circle(this.myCircle)
      this.circle.setMap(this.map)
      // 引入多边形编辑器插件
      this.map.plugin(['AMap.CircleEditor'], () => {
        // 实例化多边形编辑器，传入地图实例和要进行编辑的多边形实例
        this.circleEditor = new AMap.CircleEditor(this.map, this.circle)
        // 开启编辑模式
        this.circleEditor.open()
        this.myCircle.radius = this.circle.Mg.radius
        this.circleEditor.on('adjust', (data) => {
          this.myCircle.radius = data.radius
        })
        this.circleEditor.on('move', (data) => {
          console.log('移动')
          this.chosePosition.lng = data.lnglat.lng
          this.chosePosition.lat = data.lnglat.lat
        })
      })
    },
    /* 取消圆 */
    cancelLocation () {
      this.map.remove(this.circle)
      if (this.circleEditor) {
        this.circleEditor.close()
      }
    },
    /* 搜索 */
    search () {
      let vm = this
      AMap.plugin(['AMap.PlaceSearch', 'AMap.Autocomplete'], () => {
        var autoOptions = {
          city: this.citycode,
          input: 'input_id'
        }
        // eslint-disable-next-line no-unused-vars
        let autoComplete = new AMap.Autocomplete(autoOptions)
        // eslint-disable-next-line no-unused-vars
        let placeSearch = new AMap.PlaceSearch({
          city: this.citycode,
          map: vm.map
        })
        AMap.event.addListener(autoComplete, 'select', e => {
          // TODO 针对选中的poi实现自己的功能
          placeSearch.setCity(e.poi.adcode)
          // placeSearch.search(e.poi.name)
          this.chosePosition = e.poi.location
          if (this.chosePosition) {
            /* 画圆 */
            this.cancelLocation()
            this.addCircle()
            /* 拖拽选址 */
            this.positionPickerObj.stop()
            this.positionPicker()
            this.createWindow()
          }
        })
      })
    },
    /* 获取覆盖物信息 */
    getMaker () {
      var overlaysList = this.map.getAllOverlays('circle')
      console.log(overlaysList)
      // 可选参数有:‘marker’、‘circle’、‘polyline’、‘polygon
    },
    /* 拖拽选址 */
    positionPicker () {
      AMapUI.loadUI(['misc/PositionPicker'], (PositionPicker) => {
        this.positionPickerObj = new PositionPicker({
          mode: 'dragMarker', // 设定为拖拽地图模式，可选'dragMap'、'dragMarker'，默认为'dragMap'
          map: this.map // 依赖地图对象
        })
        this.positionPickerObj.on('success', (positionResult) => {
          this.chosePosition = positionResult.position
          /* 画圆 */
          this.cancelLocation()
          this.addCircle()
        })
        this.positionPickerObj.start([this.chosePosition.lng, this.chosePosition.lat])
      })
    },
    /* 创建信息窗体 */
    createWindow () {
      // 信息窗体的内容
      var content = [
        '<div style="width: 100%;>',
        '<div class="fs-16">范围: 200米</div>',
        '<div class="fs-14">位置不准确？试试拖拽鼠标或者输入地点</div></div>'
      ]
      // 创建 infoWindow 实例
      var infoWindow = new AMap.InfoWindow({
        content: content.join('<br>'),  // 传入 dom 对象，或者 html 字符串
        offset: new AMap.Pixel(0, -50)
      })
      // 打开信息窗体
      infoWindow.open(this.map, this.chosePosition)
    }
  },
  activated () {
  },
  mounted () {
    this.map = new AMap.Map('container-map', {
      resizeEnable: true,
      zoom: 15,
      viewMode: '2D',
      zooms: [4, 18]
    })
    /* 添加工具条 */
    this.addTool()
    /* 获取当前位置 */
    this.thisLocation()
    /* 添加搜索功能 */
    this.search()
  }
}

</script>


<style lang="scss" scoped>
.amap-geolocation-con{
      bottom: 152px !important;
}
#app{
  text-align: left ;
}
.swipeBox{
  position: relative; 
}
  .van-swipe-item{
    width: 100% ;
    img{
      width: 100% ;
    }
  }
.orderForm{
  margin-top: 10px ;
}
.options{
  border-radius: 10px ;
  z-index: 9999999999999;
  background-color: #fff;
  position: absolute;
  bottom: -10%;
  left: 50% ;
  transform: translate(-50% );
  box-shadow:  0 0 10px 10px rgba(0,0,0,0.1);
  width: 96%;
  margin: 20px auto 20px ;
  padding: 20px 0 10px ;
  display: flex ;
  justify-content: space-between ;
  li{
    width: 20%;
    display: flex ;
    flex-direction: column ;
    i{
      color: #0edc7a ;
    }
  }
}
.mapBox{
  position: relative;
  height: 100% ;
}
.PlaceOrderBox{
  padding: 0 20px;
  border-radius: 10px ;
  box-shadow:  0 0 10px 10px rgba(0,0,0,0.1);
  z-index: 999999999999;
  width: 75%;
  background-color: #fff;
  position: absolute;
  bottom: 5%;
  left: 50%;
  transform: translate(-50% );
  .PlaceOrderTitle{
    font-size: 28px;
    color: #333 ;
    padding: 10px 0px 0;
    // text-align: start ;
    ul{
      display: flex ;
      justify-content: space-around ;
    }
  }
  .PlaceOrder{
    display: flex ;
    align-items: center ;
    justify-content: space-between ;

  }
  .customerAddress{
    font-size: 28px ;
    padding: 10px 25px;
    text-align: start ;
  }
}
.PlaceOrder .PlaceOrderInfo .van-button--primary{
    background-color:  rgba(14, 220, 122,0.1) !important;
    color: #07c160 !important;
  }
</style>
