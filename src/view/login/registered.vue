<template>
   <div class="loginBox">
        <!-- <my-header mytitle="登录"></my-header> -->


        <div class="login "  >
            <div ref="form" :model="registerform" :rules="myrules" >
                <!-- <img src="../../assets/logo.jpg" alt=""> -->
                <div class="PasswordFree" @click="PasswordFreeLogin">已注册 去登录</div>
                <h2>首次注册</h2>
                <div class="y-left">手机号</div>
                <div prop="userCellphone">
                    <mt-field v-model="registerform.userCellphone"  placeholder="请输入手机号" type="tel" ></mt-field>
                </div>    
                <div class="y-left">密码</div>
                <div prop="smsType">
                    <mt-field v-model="registerform.smsType" placeholder="至少六位" type="password"></mt-field>
                </div>

                <div class="y-left">验证码</div>
                <van-cell-group prop="code">
                        <!-- v-model="sms" -->
                    <van-field
                        v-model="smsCode"
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

                <!-- <div class="forgetPassword">忘记密码?</div> -->
                <!-- <van-button disabled type="primary" size="large" @click="submitRegister('form')" id="loginBtn">注&nbsp;册</van-button> -->
                <mt-button  type="primary" size="large" v-on:click="RegisterBtn()" id="loginBtn">注&nbsp;册</mt-button>
                <!-- <div class="logging">注册</div> -->
                <div class="protocol">登录即代表同意乌龟邦<span @click="ToUserAgreement">用户协议</span>和<span @click="Toprivacy">隐私协议</span></div>
            </div>

            
        </div>
   </div>


</template>

<script>
// 引入头部标题组件
// import MyHeader from '@/components/my-header'
import axios from 'axios'
import  $ from 'jquery'
import { Field } from 'mint-ui';
import { Toast } from 'vant';
// import { log } from 'util';
import { submitRegister , verificationCode  } from '@/api'

// let serverUrl = 'http://192.168.0.104:8060'  //本地调试时 
// let serverUrl = 'http://f.apiplus.cn/'  //打包部署上线时 
export default {
    // components: {
    //     MyHeader
    // },
    data(){
        return{
            sms:"",
            content: '发送验证码',  // 按钮里显示的内容
            total: 60 ,     //记录具体倒计时时间
            // userPhone:"",
            // password:"",
            smsCode:"",
            registerform: {
                userCellphone: '15118675502',
                // userCellphone: '18102577976',
                // password: '123456',
                // public final static String SMS_REGISTER_TYPE="register";  
                smsType: 'register',
                // code:"",
            },
            tempLogin:{ //定义一个临时对象
                canGet: true,
                timer: null,
                waitTime: 60
            },
            myrules: {
                userCellphone: [
                    { required: true, Toast: '请输入手机号', trigger: 'blur' }
                ],
                smsType: [
                    { required: true, Toast: '请输入密码', trigger: 'blur' }
                ],
                smsCode: [
                    { required: true, Toast: '请输入验证码', trigger: 'blur' }
                ]
            }
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
        // 去登录
        PasswordFreeLogin () {
            this.$router.push({name: 'login'})
        },
        // 去个人中心
        // ToUserType () {
        //     this.$router.push({name: 'userType'})
        // },
        // 去免密码登录
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
                    userCellphone: this.registerform.userCellphone,
                    smsType: 'register',
                },
            })
            .then(res=> {
                if(res.data.code=="01"){
                }else{
                    Toast(res.data.message)
                    code = res.data.code
                }
                console.log(res);
                this.smsCode=res.smsCode
            })
            .catch(function (error) {
                console.log(error);
            });

        },
        // 注册 验证验证码
        RegisterBtn (form,formName) {
            // verificationCode()
            // .then(res => {
            //     // this.registerform = res.data
            //     console.log(res)
            //     if(res.data.code == '01') {
            //         Toast('验证成功，请完善信息');
            //         this.$router.push({name: 'userType'})
            //     } else {
            //         Toast('验证码错误');
            //         return false
            //     }
            // })


            axios.get('/sys/inspectSms',{
                params:{
                    userCellphone: this.registerform.userCellphone,
                    smsCode:this.smsCode,
                    smsType: 'register',
                },
            })
            .then(res=>{
                console.log(res);
                console.log(res.data.code);
                if(res.data.code == '01') {
                    Toast('验证成功，请完善信息');
                    this.$router.push({name: '/'})
                    localStorage.setItem('userCellphone', this.registerform.userCellphone)
                    localStorage.setItem('smsCode', this.smsCode)
                    localStorage.setItem('smsType', 'register')
                    // localStorage.setItem('username', res.data.username)
                } else {
                    Toast('验证码错误');
                    return false
                }
                // this.$router.push({name: 'userType'})
            })
            .catch(res=> {
                // res=JSON.stringify('{ "sender": "wgb-system-service", "code": "01", "message": "操作成功", "body": null }');
                console.log(res);
            });

            // axios.get('/sys/inspectSms', {
            //         userCellphone: this.registerform.userCellphone,
            //         smsCode:this.smsCode,
            //         smsType: 'register',
            // })
            // .then(function (response) {
            //     console.log(response);
            // })
            // .catch(function (error) {
            //     console.log(error);
            // });
    
            // axios.get('/sys/inspectSms', {
            //      params:{
            //         userCellphone: this.registerform.userCellphone,
            //         smsCode:this.smsCode,
            //         smsType: 'register',
            //     },
            // })
            // .then((res) => {  //res为undefined
            // debugger
            // console.log(res)
            // if(res.code === '01') {
            //         Toast('验证成功，请完善信息');
            //         this.$router.push({name: 'userType'})
            //     } else {
            //         Toast('验证码错误');
            //         return false
            //     }
            // })
            // .catch((error) => {
            // console.log(error)
            // })
            

        }
    },
    mounted () {
        
    }
}


// function RegisterBtn(){
//     console.log('231321')
//     let dataItem = {
//                 'userCellphone': this.registerform.userCellphone,
//                 'smsType': 'register',
//                 'smsCode':this.smsCode
//             }
//             ajaxPostRequest('http://192.168.0.104:8060/access/register',dataItem)  
// }
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

function ajaxPostRequest(url,data){
        var result;
        $.ajax({
            url:url,
            data:JSON.stringify(data),
            contentType:'application/json;charset=UTF-8',//关键是要加上这行
            traditional:true,//这使json格式的字符不会被转码
            type:"POST",
            async:false,
            dataType:"json",
            success:function (obj) {
                result= obj;
            }
        });
        if (result.code=='01'){
            if (id!=undefined){
                layui.table.reload(id);
            }
            return result.body;
        }else{
            layer.alert(result.message, {
                icon: 2,
                skin: 'layer-ext-moon'
            });
            return false;
        }
}

function ajaxGetRequest(url,data){
    var result;
    $.ajax({
        url:url,
        data:data,
        type:"GET",
        async:false,
        dataType:"json",
        success:function (obj) {
            result= obj;
        }
    });
    if (result.code=='01'){
        if (id!=undefined){
            layui.table.reload(id);
        }
        return result.body;
    }else{
        layer.alert(result.message, {
            icon: 2,
            skin: 'layer-ext-moon'
        });
    }
}
</script>

<style lang="scss" scoped>
input{
    background-color: #55505f !important;
}

*{
 
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
        margin: 50px auto 0;
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

.mint-field-clear .mintui,.mintui-field-error:before{
    color: #c8c8c8 !important;
}
.mint-field-clear{
    opacity: 1 !important;
    color: #c8c8c8 !important;
}

.van-cell-group{
    position: relative;
}
.van-cell-group::after{
    border:  0 ;
    // border-bottom: 2px solid #c8c8c8 !important;
    //  position: absolute;
    //  content: "";
    //  clear: both;
    //  height: 1px ;
    //  width: 100% ;
    //  background-color: #c8c8c8; 
    //  top: 100%  ;
    //  left: 50%  ;
    //  transform: translate(-50% );
}

</style>
