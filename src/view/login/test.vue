<template>
  <div class="noticebox">
    <my-header mytitle="测试"></my-header>

    <button class="btn" v-on:click="ObtainCode()">测试</button>
  </div>
</template>

<script>
// 引入头部标题组件
import MyHeader from '@/components/my-header'
import { ImagePreview } from 'vant';

import { SwipeCell } from 'vant';
import { log } from 'util';

import { Toast } from 'vant';

import { submitRegister , verificationCode  } from '@/api'

// Vue.use(Toast);

// Vue.use(SwipeCell);
export default {
  name: 'HelloWorld',
  components: {
    MyHeader
  },
  data () {
    
    return {
          registerform: {
                userCellphone: '18102577976',
                smsType: 'register',
            },

     

    }
  },
   mounted() {
            // 获取验证码
        ObtainCode(){

            Toast('验证码已发到您手机')
            axios.get('/sys/sendSms', {
                params:{
                    userCellphone: this.registerform.userCellphone,
                    smsType: 'register',
                },
            })
            .then(function (res) {
                console.log(res);
                this.smsCode=res.smsCode
            })
            .catch(function (error) {
                // console.log(error);
            });

        }

    
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
