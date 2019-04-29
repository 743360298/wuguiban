<template>

    <div class="base">
        <my-header mytitle="修改密码"></my-header>
<!-- <van-cell-group>
  <van-field
    v-model="username"
    required
    clearable
    label="用户名"
    right-icon="question-o"
    placeholder="请输入用户名"
    @click-right-icon="$toast('question')"
</van-cell-group>
  /> -->


        <div class="pt">
                <div class="ChangePassword">
                <p>旧密码</p>
                   <van-field
                    v-model="password1"
                    :type="checked?'text':'password'"
                    placeholder="请输入旧密码"
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
