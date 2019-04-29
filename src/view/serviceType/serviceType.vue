<template>
    <div class="serviceType">
        <my-header mytitle="维修"></my-header>

        <div class="HomeAppliance">
            <p>家电</p>
           <div class="radioList">
                <van-radio-group v-model="radio" v-for="(item, index) in HomeAppliance" :key="index">
                    <van-radio  checked-color="#07c160" :name="item.id">{{item.name}}</van-radio>
                </van-radio-group>
           </div>
        </div>

        <div class="HomeAppliance">
            <p>维修项目</p>
           <div class="radioList">
                <van-radio-group v-model="radio2" v-for="(item, index) in problem" :key="index">
                    <van-radio  checked-color="#07c160" :name="item.id">{{item.name}}</van-radio>
                </van-radio-group>
           </div>
        </div>
    </div>
</template>

<script>
 // 引入头部标题组件
import MyHeader from '@/components/my-header'
export default {
    components: {
        MyHeader
    },
    data() {
        return {
          radio: '',
          radio2:"",
          radioIndex:[],
          HomeAppliance:[
             {name:'电视机',id:1},
             {name:'洗衣机',id:2},
             {name:'冰箱',id:3},
             {name:'空调',id:4},
             {name:'电脑',id:5},
             {name:'笔记本',id:6},

             
          ],
          problem:[
             {name:'维修1',id:7},
             {name:'维修1',id:8},
             {name:'维修1',id:9},
             {name:'维修1',id:10},
             {name:'维修1',id:11},
             {name:'维修1',id:12},
          ]

        }
    },
    methods:{
        // HomeAppliance () {
        //     console.log();
        // },
    },
    //  mounted() {

    // },

}
</script>


<style lang="scss" scoped>
*{
  // margin: 0;
  // padding: 0;
  box-sizing: border-box ;
}
.serviceType{
  background-color: #ededed ;
  // background-color: #f7f7f7;
//   height: 100vh;
  padding: 90px 0 50px ;
}
.HomeAppliance{
    background-color: #fff;
    padding: 10px 20px;
    margin-top: 10px;
    p{
        font-size: 40px ;
        text-align: start ;
        padding: 0 ;
        margin: 0;
    }
}
.radioList{
    display: flex ;
    flex-wrap: wrap ;
    .van-radio-group{
        width: 33.33%;
        padding: 10px 0 ;
    }
}
</style>
