<template>
     <mt-header :title="mytitle" fixed>
        <span slot="right">
          <mt-button  v-if="$route.path=='/User'?true:false"  class="van-icon van-icon-setting-o setting" @click="setting"></mt-button>
        </span>
    </mt-header>
</template>

<script>
export default {
  props: ['mytitle'],
  data () {
    return {
      // hasBack:false
    }
  },
  mounted() {
      // console.log(this.$route.path)
  },
methods: {
    setting () {
      this.$router.push({name: 'setting'})
    },
  }
}
</script>

<style lang="scss" scoped>
   .mint-header{
       box-shadow:  0 3px 3px #ededed ;
       background-color: #fff ;
       color: #333 ;
       border-bottom: 2px solid #f1f1f1;
   }

   .setting,.van-icon-setting-o{
       color: #0edc7a !important ;
       font-weight: 500 ;
   }
</style>
