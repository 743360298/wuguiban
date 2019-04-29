<template>

    <div class="aboutAs">
        <my-header mytitle="关于乌龟邦"></my-header>

        <div class="base pt">
            <div class="logo"><img src="../../assets/logo.jpg" alt=""></div>
            <div class="aboutAsTitle">
                <span>平台简介</span>
            </div>
            <div class="Introduction">
                <p>乌龟帮维修网自2017年起由广州国春科技集团创办，正努力
                成为中国领先的上门维修众包平台，已获得Pre-A轮千万级，目
                前业务范围已涵盖家电维修、汽车维修、电子产品维修、衣服皮
                革养护、水电服务维修等，正成为我国较大的在线服务市场，是
                国家文化产业示范基地和国家级文化创意众创空间，也被外界评
                为行业的“黑马”</p><br>                
                <p>目前，乌龟邦维借网拥有万家维修服常提供商、数十万雇
                主，源源不断的为中国的维修行业注入新的活力</p>
            </div>
            <div class="aboutAsTitle">
                <span>联系我们</span>
            </div>
            <div class="Introduction2">
                <span>官方网址：<i>www.wgbservicel com</i></span>
                <span>客服热线：<i>020-82309121</i></span>
            </div>
            <div class="QRcode">
                <div><img src="../../assets/QRcode.jpg" alt=""></div>
                <span>扫一扫关注公众号</span>
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

}
</script>

<style lang="scss" scoped>
.aboutAs{
    .pt{
        background-color: #fff;
        padding: 90px 20px 0px;
        .logo{
            width: 200px;
            margin: 20px auto ;
            border-radius: 50px ;
            overflow: hidden;
            img{
                width: 100% ;
            }
        }
        .Introduction{
            margin: 30px 0;
            font-size: 28px;
            text-indent: 2em ;
            p{
                line-height: initial;
                text-align: start ;
            }
        }
        .Introduction2{
            font-size: 28px;
            display:flex ;
            flex-direction:column ;
            padding: 0 30px;
            span{
                margin-top: 20px;
                line-height: initial;
                text-align: start ;
                i{
                    font-style:normal;
                    color: #0edc7a ;
                }
            }
            span:last-child{
                i{
                    color: skyblue ;
                }
            }
        }
        .QRcode{
            margin: 30px  auto 0;
            display: flex ;
            flex-direction:column ;
            div{
                margin: 0  auto 10px;
                // width: 300px;
                width: 300px;
                border: 1px solid #ededed ;
                padding: 5px;
                img{
                    width: 100% ;
                }
            }
            span{
                margin-top: 10px;
            }
        }
    }
}
.aboutAsTitle{
    border-left: 3px solid #ededed;
    text-align: start;
    padding-left: 20px;
    span{
        text-indent: 2em ;
        color: #0edc7a ;
        font-size: 30px ;
        position: relative;
    }

}

</style>
