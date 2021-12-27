<template>
  <div id="main" style="width:400px;height:400px" class="home"  >
     <SVGICON :width="100" height="100" iconClass="ali"></SVGICON>
     <SVGICON :width="100" height="100" iconClass="China2DMap"></SVGICON>
     <SVGICON :width="100" height="100" iconClass="Bar"></SVGICON>
     <SVGICON :width="100" height="100" iconClass="weixin"></SVGICON>
     <SVGICON :width="100" height="100" iconClass="plusactive"></SVGICON>
     <span class="aa">123</span>
     <HelloWorld :msg="{a:123}"></HelloWorld>
     <!-- <countDowm  :template="aa" remainTime="2000"/> -->
     <button @click="fn">
       sadasd
     </button>
  </div>

</template>
<script>
import SVGICON from '../components/SvgIcon.vue'
import countDowm from '../components/time'
import HelloWorld from '../components/HelloWorld.vue'
export default {

  name: 'Home',
  data() {
    this.aa = "请在((hourString))：((minuteString))：((secondString))支付"
    return {
   
    }
  },
  computed: {},
   created(){
  },
  mounted(){
    
  },
  components:{
    SVGICON,
    countDowm,
    HelloWorld:()=>({
       component: new Promise((resolve)=>{
           setTimeout(()=>{
             resolve(HelloWorld)
           },4000)
       })
    })
  },
  methods: {
     fn(){
       this.$router.push('./about')
     }
  }
}


var str = '/#/webviewShare/'
str.replace(/^(\/#\/)(?:[a-zA-Z]*)\?([^"]*)/g,($1,$2)=>{
  return $1+'/#/home'+'?'+$2
})


</script>
<style lang="scss">
@import "@/assets/css/test";
.home {
  display: flex;
  border-radius: 2px;
  transform: rotateX(12deg);
  .aa{
    color:red
  }
}
.time{
  background:#ccc;
  font-size: 20px;
}
</style>
