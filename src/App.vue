<template>
  <div id="app">
    <div id="nav">
      <div @click="click1">home</div>
      <div  @click="handleClick">About</div>
      <span>{{test.testa.a}}</span> 
      <div @click="fn">ceshi</div>
      <textarea v-model="aaa"></textarea>
       <div>{{aaa}}</div>
       <img src="https://image-demo.oss-cn-hangzhou.aliyuncs.com/example.jpg" alt="">
       {{ $data.$bb}}
    </div>
    <router-view/>
    <div >
      <button @click="move(index)">按钮</button>
      <ul>
        <li :key="item.id" v-for="item in list">
            {{item.text}} 
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import {fn} from './assets/utils/tools'
// let {fn,fn1}  = require('./assets/utils/tools')

export default {
  provide(){
    return {
      aaaa:this.foo,
      aaa:''
    }
  },
  data(){
    return {
      foo:'foooo',
      aaa:'',
      $bb:123111111,
      list:[{text:1,id:'1'},{text:2,id:'2'},{text:3,id:'3'},{text:4,id:'4'}]
    }
  },
  mounted(){
    this.a = 1
    const a  = (a)=>{
       return new Promise((resolve,reject)=>{
         setTimeout(()=>{
           resolve(a*2)
         },time)
       })
    }
    function *fn (){
     const res1 =  yield  a (1)
     const res2 =  yield  a (res1)
      const res3 = yield  a (res2)
      return res3
    }



    
    
  },
  methods:{
    move(index){
        this.list.unshift({ text: "林三心", id: "99" });
    },
    ///  a ,
    fn(){
      console.log(this.$aa)
      this.$aa =123
      
    },
    handleClick(){
      this.$router.push({
        path:'/about?aa=123&bb=123',
        query:{
          a:{ccc:1},
          b:'wwqwqwq'
        }
      })
    },
    click1(){
        this.$router.push({
        path:'/home',
      })
    }
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
.cc{
  background: url("./assets/img/icon_wexinpay.png");
}
</style>
