<template>
  <div class="hello">
     9999 12212121
     helloworld
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  inject:['aaaa'],
  props: {
    msg: {
      type:Object,
      default:()=>({})
    }
  },
  mounted(){
    console.log(this.aaaa,3333333333);
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "@/assets/css/test";
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
