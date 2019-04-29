<template>
     <mt-header :title="mytitle" fixed>
        <span slot="left">
          <mt-button  v-if="$route.path=='/Orders'||'/Service'||'/User'?true:false"  icon="back" @click="$router.go(-1)"></mt-button>
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

}
</script>

<style>
   .mint-header{
       box-shadow:  0 3px 3px #ededed ;
       background-color: #fff ;
       color: #333 ;
       /* border-bottom: 2px solid #f1f1f1; */
   }
</style>
