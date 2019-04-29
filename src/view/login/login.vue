<template>
   <div class="loginBox">
        <!-- <my-header mytitle="登录"></my-header> -->


        <div class="login" >

            <!-- <img src="../../assets/logo.jpg" alt=""> -->
            <div class="PasswordFree" @click="PasswordFreeLogin">免密码登录</div>
            <h2>密码登录</h2>
            <div class="y-left">手机号</div>
            <mt-field  placeholder="请输入手机号" v-model="userPhone" type="tel" ></mt-field>
            <div class="y-left">密码</div>
            <mt-field  placeholder="至少六位"  v-model="password" type="password"></mt-field>
            <div class="forgetPassword">忘记密码?</div>
            <mt-button type="primary" size="large" id="loginBtn" @click="loginBtn">登&nbsp;录</mt-button>
            <div class="logging" @click="Toregistered">注册</div>
            <div class="protocol">登录即代表同意乌龟邦<span @click="ToUserAgreement">用户协议</span>和<span @click="Toprivacy">隐私协议</span></div>
        </div>
   </div>


</template>

<script>
// 引入头部标题组件
// import MyHeader from '@/components/my-header'
import { Field } from 'mint-ui';

import axios from 'axios'
import {  login } from '@/api'

import { Toast } from 'vant';

export default {
    // components: {
    //     MyHeader
    // },
    data(){
        return{
            userPhone:'15118675502',
            password:'123456',
            smsType: "register",
            code: '',
        }
    },

    methods: {
        PasswordFreeLogin () {
            this.$router.push({name: 'passwordFreeLogin'})
        },
        ToUserAgreement () {
            this.$router.push({name: 'userAgreement'})
        },
        Toprivacy () {
            this.$router.push({name: 'privacy'})
        },
        Toregistered () {
            this.$router.push({name: 'registered'})
        },

        // 登录按钮、
        loginBtn(){
            login({
                "code": '',
                "password": this.password,
                "smsType": "register",
                "userPhone": this.userPhone
            })
            .then(res=>{
                if(res.data.code == '01'){
                    Toast(res.data.message)
                    // localStorage.setItem('password', this.password)
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
</script>

<style lang="scss" scoped>
input{
    background-color: #55505f !important;
}
.mint-field-core{
    background-color: #55505f !important;

}
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box ;
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
        margin: 0 auto ;
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
            // margin: 200px auto ;
            position: fixed; 
            bottom: 100px ;
            font-size: 28px ;
            line-height: initial;
            letter-spacing:2px ;
            span{
                text-decoration:underline  ;
                line-height: initial;
            }
        }
.logging{
    font-size: 30px ;
    margin-top: 30px ;
    color: #fff ;
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
.mint-cell-wrapper .mint-cell-value .mint-field-core{
    background-color: #55505f  !important;
    color: #c8c8c8 !important;
}
.mint-cell-value{
    background-color: #55505f  !important;
    color: #c8c8c8 !important;
}
.mint-field-core{
    background-color: #55505f  !important;
    color: #c8c8c8 !important;
}
.mint-field-clear .mintui,.mintui-field-error:before{
    color: #c8c8c8 !important;
}
.mint-field-clear{
    opacity: 1 !important;
    color: #c8c8c8 !important;
}

}


</style>
