<template>

    <div class="recharge">
        <my-header mytitle="充值中心"></my-header>
        <div class="base pt">
            <div class="myAvatar">
                <img src="../../assets/logo.jpg" alt="">
            </div>
            <div class="RechargeBox">
                <div class="RechargeAmount">
                    <span>充值数量：</span>
                    <div class="RechargeAmountList" :model="Recharge">
                        <ul class="AmountList integralBox">
                            <li :class="flag==index ? 'Amountactive' : ''"  :v-model="message" @click="changeItem(index,item.money)" v-for="(item,index) in AmountList" :key="index">{{item.integral}}</li>
                            <li :class="flag==index1 ? 'Amountactive' : ''"   @click="changeItem(index,item.money)"><input type="text" maxlength="4" v-model="message" placeholder="其他金额"></li>
                            <li :class="flag==index1 ? 'Amountactive' : ''"  v-if="!autoPrice"  @click="changeItem2"><input type="text" maxlength="4" v-model="message" placeholder="其他金额"></li>


                        </ul>
 
                    </div>
                </div>
                <div class="RechargeAmount" >
                    <span>应付金额：</span>
                    <div class="RechargeAmountList" style="max-width:50% ;font-size:20px"><i>{{message}}</i>元</div>
                </div>
                <div class="RechargeAmount">
                    <span>支付方式：</span>
                    <div class="RechargeAmountList methodList" style=" width: 100% ">
                       <ul class="AmountList ">
                            <li :class="flag1==index ? 'paymentMethod' : ''"  @click="changepaymentMethod(index)" v-for="(item,index) in paymentMethod" :key="index">{{item}}</li>
                           <!-- <li class="paymentMethod">微信支付</li>
                           <li>支付宝支付</li> -->
                       </ul>
                    </div>
                </div>
                <van-button type="primary" class="rechargeBtn" v-on:click="rechargeBtn">确认支付</van-button>
            </div>

            <div class="RechargeRules">
                <div class="RulesTitle">充值规则</div>
                <div class="RulesTitle2">1积分/元</div>
                <div class="RulesTitle3">
                    <p>1、积分可以用来确认报价金额以及使用急速联系获取到客户联系方式</p><br>
                    <p>2、1积分=1人民币</p><br>
                    <p>3、积分仅能用于兑换乌龟邦直接运营的产品和服务，
                    不能兑换现金，不能进行转账交易，不能兑换乌龟邦
                    公司体系外的产品和服务。</p>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
 // 引入头部标题组件
import MyHeader from '@/components/my-header'
import $ from 'jquery'
import qs from 'qs'
import axios from 'axios'
import { Toast } from 'vant';
import {  WeChatPayment } from '@/api'
// 线上
// import { jweixin } from 'http://res.wx.qq.com/open/js/jweixin-1.4.0.js'
// 引入外部 微信jssdk 
import wx from 'weixin-js-sdk'

export default {
    created(){
     let param = {
        debug:true,
        url:'http://localhost:8081/productgroups',
        jsApiList: [
          'chooseWXPay',
          'checkJsApi'
      ]};
      wechatlib.queryJsConfig(param,(err,obj)=>{
        if(err){
          return this.$toast(err);
        }

        console.log('jsconfig ',obj);

        wx.config(obj);

        wx.ready(()=>{
          console.log('wx.ready');
        });

        wx.error(function(res){

          console.log('wx err',res);

          //可以更新签名
        });
      });
    },
    queryJsConfig(param,callback){
    networklib.post('/wechat/jsconfig',param).then(obj=>{

      callback(null,obj);
    })
        .catch(err=>{callback(err)});
    },

    components: {
        MyHeader
    },
    data(){
        return{
            money:"10",
            Recharge:'',
            // checkIndex: 0,
            flag:0,
            flag1:0,
            index:'',
            index1:'',
            item:'',
            message:"10",
            autoPrice:true, //自动计算价格
            // 参数
            deviceInfo:'',
            openId:'',
            totalfee:'',

            AmountList:[
                { integral:'10积分',money:'10'},
                // { integral:'20积分',money:'20'},
                { integral:'50积分',money:'50'},
                { integral:'100积分',money:'100'}
                // '10积分',
                // '20积分',
                // '50积分',
                // '100积分',
            ],
            paymentMethod:[
                '微信支付',
                // '支付宝支付'
            ]
        }
    },
    created(){
        this.rechargeBtn()
    },
    methods:{
        // methods1: function(){
        //     jweixin()
        //   },
        changeItem(index,money) { 
            // item.forEach(function(AmountList,index){
            //     item.Amountactive = !item.Amountactive
            // })

            this.flag=index;
            // this.flag!=index1;
            this.message=money
            this.autoPrice=true
         },
        changeItem2(index,money) { 
            // item.forEach(function(AmountList,index){
            //     item.Amountactive = !item.Amountactive
            // })

            this.flag1=index1;
            // this.flag!=index;
            this.autoPrice=false

  
         },
        changepaymentMethod(index) { 
            // item.forEach(function(AmountList,index){
            //     item.Amountactive = !item.Amountactive
            // })
            this.flag1=index;

         },

        //  确认支付
         rechargeBtn(){
           WeChatPayment({
                "deviceInfo": "",            // 设备号 
                "openId": "021Xoi2r1oh5dl07DI1r14r02r1Xoi20&",          // 微信code 
                "totalfee": this.message     // 金额
           })
           .then(
                res => {
                    console.log(res);
                    if(res.data.code= '01'){
                        Toast(res.data.message)
                        onBridgeReady()
                    }else{
                        Toast(res.data.message)
                    }
                }
            )
            .catch(err => {
                console.log(err)
            })


            // var message = this.message
            // axios.post('/api/wechat/sendWechatBeforehandPay',JSON.stringify(message))
            // .then(res => {
            //     console.log(res)
            // })
            // .catch(err => {
            //     console.log(err)
            // })

         }
        

    },
    computed: {
        money() {
            var res = '';
            this.AmountList.forEach((v, i) => {
                if (this.flag == v.integral) {
                    console.log(this.flag);
                    res = v.money;
                    console.log(res);
                    // return res
                }
            })
            return res
        }
    }


}

// 微信内H5调起支付
function onBridgeReady(){
   WeixinJSBridge.invoke(
      'getBrandWCPayRequest', {
         "appId":"wx2421b1c4370ec43b",     //公众号名称，由商户传入     
         "timeStamp":"1395712654",         //时间戳，自1970年以来的秒数     
         "nonceStr":"e61463f8efa94090b1f366cccfbbb444", //随机串     
         "package":"prepay_id=u802345jgfjsdfgsdg888",     
         "signType":"MD5",         //微信签名方式：     
         "paySign":"70EA570631E4BB79628FBCA90534C63FF7FADD89" //微信签名 
      },
      function(res){
      if(res.err_msg == "get_brand_wcpay_request:ok" ){
      // 使用以上方式判断前端返回,微信团队郑重提示：
            //res.err_msg将在用户支付成功后返回ok，但并不保证它绝对可靠。
      } 
   }); 
}
if (typeof WeixinJSBridge == "undefined"){
   if( document.addEventListener ){
       document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
   }else if (document.attachEvent){
       document.attachEvent('WeixinJSBridgeReady', onBridgeReady); 
       document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
   }
}else{
   onBridgeReady();
}


</script>

<style lang="scss" scoped>
.recharge{
    .pt{
        background-color: #fff;
    }
}
.myAvatar{
    padding: 30px 0;
    border-bottom: 1px solid #ededed;
}
.RechargeBox{
    padding: 30px 20px;
    .RechargeAmount{
        padding: 10px 0;
        display: flex ;
        align-items: center;
        >span{
            min-width: 2rem;
            font-size: 30px;
            font-weight: 500 ;
            line-height: initial;
        }
        .AmountList{
            display: flex ;
            align-items: center;
            li{
                width: 25%;
                border: 1px solid #ededed ; 
                white-space:nowrap; 
                overflow: hidden;
                text-overflow:ellipsis;
                margin-right: 15px;
                padding: 10px; 
                    input{
                        width: 100%;
                        border: 0 ;
                        text-align: center;
                    }
                }
                .paymentMethod{
                     border:  1px solid #0edc7a ;
                    background-color:  rgba(14, 220, 122,0.1) ;
                    padding: 10px; 
                }
            .Amountactive{
                border:  1px solid #0edc7a ;
                background-color:  rgba(14, 220, 122,0.1) ;
                input{
                    background: transparent;
                }
            }
        }

        .paymentMethod{
            border:  1px solid #0edc7a ;
            background-color:  rgba(14, 220, 122,0.1) ;
            padding: 10px; 
        }
        .RechargeAmountList{
            margin-left: 20px;
            // width: 100%;

        }
    }
    .rechargeBtn{
        width: 80%;
        margin: 20px auto;
    }
}
.RechargeRules{
    padding:0  0 30px;
    background-color: #f6f6f6;
    box-shadow: 3px 3px 10px 5px #e5e5e5 ;
    // box-shadow: 0 -3px 3px #e5e5e5 ;
    position: relative;
    ::after{
            position: absolute;
            content: "";
            clear: both;
            height: 1px ;
            width: 100% ;
            background-color: #e5e5e5; 
            top: 100%  ;
            left: 50%  ;
            transform: translate(-50% );
    }
    .RulesTitle{
        font-size: 30px;
        font-weight: 500 ;
        padding: 30px 20px;
        // border-bottom: 1px solid #e5e5e5;
        position: relative;
    }
    .RulesTitle::after{
            position: absolute;
            content: "";
            clear: both;
            height: 1px ;
            width: 100% ;
            background-color: #e5e5e5; 
            top: 100%  ;
            left: 50%  ;
            transform: translate(-50% );
        }
    .RulesTitle2{
         padding: 30px 20px;
         font-size: 28px;
    }
    .RulesTitle3{
        padding: 0 20px;
        p{
            text-align: start;
        }
    }
}
.RechargeAmountList  .methodList{
    width: 100% !important;
    li{
        width: 33% !important;
        background-color: pink;
    }
}
</style>
