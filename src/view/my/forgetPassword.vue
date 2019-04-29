<template>

    <div class="base">
        <my-header mytitle="验证码修改"></my-header>


        <div class="pt">
                <div class="ChangePassword">
                <p>请输入绑定的手机号</p>
                   <van-field
                    v-model="phone"
                    type='text'
                    placeholder="请输入手机号"
                    required
                 />
            </div>
            <div class="ChangePassword">
                <p>新密码</p>
                  <van-field
                    v-model="password2"
                    :type="checked?'text':'password'"
                    placeholder="请输入新密码"
                    required
                 />
            </div>
            <div class="ChangePassword">
                <p>确认密码</p>
                  <van-field
                    v-model="password3"
                    :type="checked?'text':'password'"
                    placeholder="请再次输入新密码"
                    required
                 />
            </div>
            <van-cell-group>
                <van-field
                    v-model="sms"
                    center
                    clearable
                    label="短信验证码"
                    placeholder="请输入短信验证码"
                >
                    <van-button slot="button" size="small" type="primary">发送验证码</van-button>
                </van-field>
            </van-cell-group>

            <div class="showPassword">
                <van-checkbox v-model="checked" @click="fn">显示密码</van-checkbox>
            </div>

            <van-button type="primary" class="submitPassword">确&nbsp;定</van-button>
        </div>

        </div>

</template>

<script>
 // 引入头部标题组件
import MyHeader from '@/components/my-header'
import { Field } from 'vant';
import { Toast } from 'vant';
export default {
    components: {
        MyHeader
    },
    data(){
        return{
            checked: false,
            sms:"",
            password1:"",
            password2:"",
            password3:""

        }
    },
    methods:{
       fn:function(){
         
       }
    },
    mounted(){

    }
        
    


}
</script>

<style lang="scss" scoped>
.ChangePassword{
    
    margin-top: 10px;
    // background-color: #fff;
    p{
        margin: 0;
        padding: 0;
        font-size: 32px ;
        text-align: start ;
        padding: 10px 20px ;
    }

}
.submitPassword{
    width: 80% ;
    margin-top: 50px;
}
.showPassword{
    padding: 0 20px ;
    margin-top: 20px ;
    float: left;
}
</style>
