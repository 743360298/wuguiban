<template>

    <div>
        <my-header mytitle="意见反馈"></my-header>

        <div class="base pt">
            <textarea id="opinionTxt"  placeholder="期待您为我们提出宝贵的意见或建议"></textarea>
            <van-button type="primary" class="opinionBtn">提交反馈</van-button>
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
#opinionTxt{
    outline: none;
    resize: none;
    line-height: 21px;
    width: 100%;
    height: 300px;
    margin-bottom: 0;
    padding: 20px;
    -webkit-user-select: text;
    border: 1px solid transparent;
    border-radius: 3px;
    outline: 0;
    background-color: #fff;
    -webkit-appearance: none;
    font-size: 30px;
}
.opinionBtn{
    width: 80%;
    margin: 30px auto 0;
}
</style>
