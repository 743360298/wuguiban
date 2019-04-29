<template>
   <div class="loginBox">
        <!-- <my-header mytitle="登录"></my-header> -->


        <div class="login passwordFreeLogin">

            <!-- <img src="../../assets/logo.jpg" alt=""> -->
            <div class="PasswordFree" @click="PasswordLogin">密码登录</div>
            <h2>免密码登录</h2>
            <div class="y-left">手机号</div>
            <mt-field  placeholder="请输入手机号" v-model="userCellphone" type="tel"></mt-field>
            <!-- <div class="y-left">验证码</div> -->
            <!-- <mt-field  placeholder="请输入验证码" type="tel"></mt-field> -->
            <!-- <mt-button type="primary" size="large" id="loginBtn">获取验证码</mt-button> -->
            
            <div class="y-left">验证码</div>
                <van-cell-group prop="code">
                        <!-- v-model="sms" -->
                    <van-field
                        v-model="code"
                        center
                        clearable
                        placeholder="请输入短信验证码"
                    >
                        <van-button slot="button" v-on:click="ObtainCode('form')" :disabled="!login.canGet"  size="small" type="primary">
                            <span v-show="!login.canGet">{{login.waitTime+"s后重新获取"}}</span>
                            <span v-show="login.canGet">获取手机验证码</span>
                        </van-button>
                    </van-field>
            </van-cell-group>
            <mt-button type="primary" size="large" id="loginBtn" @click="loginBtn">登录</mt-button>
            <div class="logging">未注册手机验证后自动登录</div>
            <div class="protocol">登录即代表同意乌龟邦<span @click="ToUserAgreement">用户协议</span>和<span @click="Toprivacy">隐私协议</span></div>
        </div>
   </div>


</template>

<script>
// 引入头部标题组件
// import MyHeader from '@/components/my-header'
import { Field } from 'mint-ui';

import axios from 'axios'
import {  login,submitRegister } from '@/api'

import { Toast } from 'vant';

export default {
    // components: {
    //     MyHeader
    // },
    data(){
        return{
            userCellphone:'15118675502',
            password:'123456',
            code:'684197',
            smsType: "register",
            tempLogin:{ //定义一个临时对象
                canGet: true,
                timer: null,
                waitTime: 60
            },

        }
    },
    computed:{
        login(){ //最终对象
        if(!this.tempLogin.canGet){
            return timeCountdown(this.tempLogin);
        }else{
            return this.tempLogin;
        }
        }
    },

    methods: {
        PasswordLogin () {
            this.$router.push({name: 'login'})
        },
        ToUserAgreement () {
            this.$router.push({name: 'userAgreement'})
        },
        Toprivacy () {
            this.$router.push({name: 'privacy'})
        },
        // 获取验证码
        ObtainCode(registerform){
            timeCountdown(this.login);  //参数为最终对象
            Toast('验证码已发到您手机')
            axios.get('/sys/sendSms', {
                params:{
                    userCellphone: this.userCellphone,
                    smsType: 'register',
                },
            })
            .then(res=> {
                if(res.data.code=="01"){
                }else{
                    Toast(res.data.message)
                }
                console.log(res);
                this.smsCode=res.smsCode
            })
            .catch(function (error) {
                console.log(error);
            });

        },
        // 登录按钮、
        loginBtn(){
            login({
                "code": this.code,
                "password": this.password,
                "smsType": "register",
                "userPhone": this.userCellphone
            })
            .then(res=>{
                if(res.data.code == '01'){
                    Toast(res.data.message)
                    // localStorage.setItem('mytoken', res.data.token)
                    // this.$store.commit('setName', res.data.userCellphone)
                    this.$router.push({name: 'home'})
                }else if(res.data.code == '07'){
                    Toast(res.data.message)
                }else{
                    Toast(res.data.message)
                    return false 
                }

            })
        }
    }
}
function timeCountdown(obj) { //obj包括timer、waitTime 、canGet 
    const TIME_COUNT = 60; //默认倒计时秒数

    if (!obj.timer) {
        obj.waitTime = TIME_COUNT;
        obj.canGet = false;
        obj.timer = setInterval(() => {
            if (obj.waitTime>0 && obj.waitTime<=TIME_COUNT) {
                obj.waitTime--;
            }else{
                obj.canGet = true;
                clearInterval(obj.timer); //清空定时器
                obj.timer = null;
            }
        }, 1000)
    }
    return {
        timer: obj.timer,
        canGet: obj.canGet,
        waitTime: obj.waitTime
    }
}
</script>

<style lang="scss" scoped>
body,html{
    background-color: #55505f ;
    margin: 0;
    padding: 0;
    height: 100%;
}
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box ;
}
#app{
    background: #55505f ;
    width: 100%;
    
}
.y-left{
        width: 100% ;
        // padding: 10px ;
        margin: 10px auto ;
        display: flex ;
        justify-content: flex-start ;
        color: #f7f3fc ;
        font-size: 36px ;
}
.loginBox{
    width: 100%;
    height: 100vh;
     background-color: #55505f ;
}
.login{
    padding-top: 100px ;
     width: 80%;
    margin: 0  auto;
    h2{
        margin: 40px 0;
        font-size: 45px ;
        text-align: start ;
        color: #f7f3fc ;
    }
    #loginBtn{
        width: 100% ;
        margin: 50px  auto ;
        background-color: #538977 ;
        border-radius: 50px ;
    }

    .PasswordFree{
        font-size: 40px ;
        color: #f7f3fc ;
        display: flex ;
        justify-content: flex-end ;
    }
    .forgetPassword{
        // margin: 10px auto ;
        font-size: 40px ;
        color: #f7f3fc ;
        position: relative;
        margin: 50px auto;
        width: 40% ;
    }
        .forgetPassword::after{
            position: absolute;
            content: "";
            clear: both;
            height: 2px ;
            width: 80% ;
            background-color: #c8c8c8; 
            bottom: 0 ;
            left: 50%  ;
            transform: translate(-50% );
        }
        .protocol{
            color: #f7f3fc ;
            font-size: 28px ;
              position: fixed; 
            bottom: 100px ;
            line-height: initial;
            letter-spacing:2px ;
            span{
                text-decoration:underline  ;
                line-height: initial;
            }
        }
        .logging{
            margin-top: 50px ;
            color: #b3afb8 ;
            font-size: 30px ;
        }

}
.is-nolabel,.mint-cell-wrapper ,.mint-field-core{
    background-color: #55505f ;
}
.mint-field .mint-cell-value{
    background-color: #55505f  !important;
}
.is-nolabel::after{
     position: absolute;
     content: "";
     clear: both;
     height: 1px ;
     width: 100% ;
     background-color: #c8c8c8; 
     bottom: 0 ;
     left: 50%  ;
     transform: translate(-50% );
}
.mint-field-clear .mintui{
    color: #c8c8c8 ;
}
.mintui-field-error:before{
    color: #c8c8c8 ;
    font-size: 30px ;
}
.van-hairline--top-bottom::after{
     border-width: 0px 0; 
}
</style>
