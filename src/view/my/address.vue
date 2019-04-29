<template>

    <div>
        <my-header mytitle="我的地址"></my-header>

        <div class="address">
            <van-address-list
            v-model="chosenAddressId"
            :list="list"
            :disabled-list="disabledList"
            disabled-text="以下地址超出配送范围"
            @add="onAdd"
            @edit="onEdit"
            />
        </div>

        <!-- <van-address-edit
            :area-list="areaList"
            show-postal
            show-delete
            show-set-default
            show-search-result
            :search-result="searchResult"
            @save="onSave"
            @delete="onDelete"
            @change-detail="onChangeDetail"
            /> -->
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
     data() {
    return {
      chosenAddressId: '1',
      list: [
        {
          id: '1',
          name: '张三',
          tel: '13000000000',
          address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室'
        },
        {
          id: '2',
          name: '李四',
          tel: '1310000000',
          address: '浙江省杭州市拱墅区莫干山路 50 号'
        }
      ],
      disabledList: [
        {
          id: '3',
          name: '王五',
          tel: '1320000000',
          address: '浙江省杭州市滨江区江南大道 15 号'
        }
      ]
    }
  },

  methods: {
    onAdd() {
    //   Toast('新增地址');
      this.$router.push({name: 'addAddress'})
    },

    onEdit(item, index) {
    //   Toast('编辑地址:' + index);
        this.$router.push({name: 'addAddress'})
    }
  }

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
