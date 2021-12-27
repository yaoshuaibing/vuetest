<template>
  <div>
   <HelloWorld/>
  </div>
</template>
<script>
import  HelloWorld from '../components/HelloWorld.vue'

export default {
  components: {
    HelloWorld:()=>({
       component: new Promise((resolve)=>{
           setTimeout(()=>{
             resolve(HelloWorld)
           },4000)
       }).then(res=>{
             return HelloWorld
       })
    })
  },
  data() {
    return {
      
    }
  },
  computed: {
    ...mapGetters(['userPermissions','buttonType'])
  },
  watch: {},
  // 方法集合
  methods: {
  },
  created() {
  },
  mounted() {
    
  },
  beforeCreate() {}, 
  beforeMount() {}, 
  beforeUpdate() {},
  updated() {}, 
  beforeDestroy() {},
  destroyed() {}, 
  activated() {}, 
}
</script>

<style lang='stylus' scoped>
  
</style>