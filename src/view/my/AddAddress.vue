<template>

    <div>
        <my-header mytitle="新增地址"></my-header>

        <div class="address AddAddress">
            
        <van-address-edit
            :area-list="areaList"
            show-postal
            show-delete
            show-set-default
            show-search-result
            :search-result="searchResult"
            @save="onSave"
            @delete="onDelete"
            @change-detail="onChangeDetail"
            />
        </div>

    </div>

</template>

<script>
 // 引入头部标题组件
import MyHeader from '@/components/my-header'
import { Toast } from 'vant';
export default {
    components: {
        MyHeader
    },
}
</script>

<style lang="scss" scoped>
*{
  // margin: 0;
  // padding: 0;
  box-sizing: border-box ;
}
.address{
  background-color: #ededed ;
  // background-color: #f7f7f7;
  height: 100vh;
  padding: 90px 0 0 ;
}

</style>
