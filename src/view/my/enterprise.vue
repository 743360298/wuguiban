<template>

    <div>
        <my-header mytitle="档案认证"></my-header>

        <div class="  pt enterprise">
            <van-cell-group>
                <van-field
                    v-model="companyName"
                    type="text"
                    placeholder="公司名称"
                    label="企业名称"
                />
                <van-field
                    v-model="date"
                    type="text"
                    placeholder="2016-1-1"
                    label="成立日期"
                />
                <van-field
                    v-model="city"
                    type="text"
                    placeholder="选择城市"
                    label="所在城市"
                    @click="areaListShow=!areaListShow"
                />
                <van-field
                    v-model="Address"
                    type="text"
                    placeholder="详细地址"
                    label="经营地址"
                />
    
                <van-field
                    v-model="product"
                    type="text"
                    placeholder="经营产品"
                    label="经营产品"
                />
            </van-cell-group>

            <div class="enterpriseTxt">
                <span>主营简介(选填)</span>
                <textarea id="Main" name="" v-model="IntroductionTxt"></textarea>
            </div>

            <div class="enterpriseTxt">
                <span>上传营业执照</span>
                <van-uploader name="uploader" :after-read="onRead">
                    <van-icon name="photograph" />
                </van-uploader>
            </div>
            <van-button type="primary" id="enterpriseBtn" @click="enterpriseBtn">提交</van-button>
            
            <!-- 省市区三级联动 组件 -->
            <div class="addressPublic" v-if="areaListShow">
                <addressPublic ></addressPublic>
            </div>
        </div>
    </div>

</template>

<script>
 // 引入头部标题组件
import MyHeader from '@/components/my-header'
import axios from 'axios'
import {  saveLicence } from '@/api'
import { Toast } from 'vant';
 // 引入地址组件
import addressPublic from '@/components/addressPublic'
export default {
    components: {
        MyHeader,
        addressPublic
    },
    data(){
        return{
            companyName:'',
            date:'',
            city:'',
            Address:'',
            product:'',
            IntroductionTxt:'',
            areaListShow:false,
        }
    },
    methods: {
        onRead(file, detail) {
            this.$toast(detail.name);
        },

            // 提交企业用户信息
            enterpriseBtn(){
                saveLicence({
                    "address": "string",            // 地址 
                    "areaId": 0,                    // 区域 
                    "cityId": 0,                    // 城市
                    "createTime": "string",         // 创建时间
                    "id": 0,
                    "idCard": "string",
                    "master": 0,
                    "name": this.companyName,
                    "openid": "",                      
                    "password": localStorage.getItem("password"),
                    "portraitImg": "string",
                    "provinceId": 0,                   //省
                    "remarks": this.IntroductionTxt,               //备注
                    "servicesAreaId": "string",        //服务区域
                    "state": 0,        
                    "team": 0,                          // 团队
                    "teamNumber": 0,                    // 团队人数
                    "updateTime": "string",             // 更新时间 
                    "userCellphone": "string",          //手机号
                    "userNo": "string"                  // 
                })
                .then(res=>{
                    console.log(res);
                    if(res.data.code=='01'){
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

    }

}
</script>

<style lang="scss" scoped>
.addressPublic{
    box-shadow: 0px 0px 20px 10px rgba(0,0,0,.1);
    width: 90%;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
}
.enterprise{
    width: 100%;
    background-color: #ededed;
}
.enterpriseTxt{
    // margin-top: 20px;
    padding: 20px;
    display: flex ;
    flex-direction: column;
    width: 100% ;
    span{
        font-size: 30px;
        text-align: start ;
        line-height: initial;
        margin-bottom: 10px;
    }
    .van-uploader__input{
        height: 200px;
        width: 100%;
        background-color: #fff;
    }
}
#Main{
    margin-top: 10px;
    outline: none;
    resize: none;
    line-height: 21px;
    width: 100%;
    height: 300px;
    margin-bottom: 0;
    margin: 0 auto;
    padding: 20px;
    -webkit-user-select: text;
    border: 1px solid transparent;
    border-radius: 3px;
    outline: 0;
    background-color: #fff;
    -webkit-appearance: none;
    font-size: 30px;
}
#enterpriseBtn{
    width: 80% ;
    margin: 20px auto 30px;
}
</style>
