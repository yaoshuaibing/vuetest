<template>
  <div class="about" id="qq">
    <h1>This is an about page121221</h1>
    <button @click="handleClick">tiaohzuan</button>
    <input type="text" v-focus id="aa">
    <button @click="fn">
      wqwwqwq
    </button>
  </div>
</template>
<script>
export default {
  created(){
    console.log(this.$route.query);
  },
  directives:{
     focus: {
        inserted: function (el) {
          el.focus()
        }
      }
  },
  methods:{
    handleClick(){
       window.history.go(-1)
    },
    fn(){
       $('#aa').focus();
    }
  },
  mounted(){
//     window.onpopstate = function(event) {
//       alert(1)
//       console.log('event',event)
//       debugger
//       return false
// };

  }
}
</script>
