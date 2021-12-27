
<template>
  <div v-html="timeHtml" class="aa">
  </div>
</template>

<script>
  export default {
    data () {
      return {
        hour: '',
        minute: '',
        second: '',
        promiseTimer: ''
      }
    },
    props: {
      remainTime: {    // 倒计时间总秒数
        default: ''
      },
      template:{
        default: ''
      },
      filtertext:{
        default: ''
      }
    },
    mounted () {
      if (this.remainTime > 0) {
        this.hour = Math.floor((this.remainTime / 3600) % 24)
        this.minute = Math.floor((this.remainTime / 60) % 60)
        this.second = Math.floor(this.remainTime % 60)
        this.countDowm()
      }
    },
    methods: {
      renderTime(template, data) {
        const reg = /\(\((\w+)\)\)/; 
        if (reg.test(template)) { 
          const name = reg.exec(template)[1]; 
          if(this.hour === 0){
            template = template.replace(this.filtertext,'')
          }
          template = template.replace(reg, data[name]); 
          return this.renderTime(template, data); 
        }
        return template
      },
      countDowm () {
        clearInterval(this.promiseTimer)
        this.promiseTimer = setInterval( ()=> {
          if (this.hour === 0) {
            if (this.minute !== 0 && this.second === 0) {
              this.second = 59
              this.minute -= 1
            } else if (this.minute === 0 && this.second === 0) {
              this.second = 0
              this.$emit('countDowmEnd', true)
              clearInterval(this.promiseTimer)
            } else {
              this.second -= 1
            }
          } else {
            if (this.minute !== 0 && this.second === 0) {
              this.second = 59
              this.minute -= 1
            } else if (this.minute === 0 && this.second === 0) {
              this.hour -= 1
              this.minute = 59
              this.second = 59
            } else {
              this.second -= 1
            }
          }
        }, 1000)
      },
      formatNum (num) {
        return num < 10 ? '0' + num : '' + num
      }
    },
    computed: {
      hourString () {
        return this.formatNum(this.hour)
      },
      minuteString () {
        return this.formatNum(this.minute)
      },
      secondString () {
        return this.formatNum(this.second)
      },
      timeHtml({template,hourString,minuteString,secondString}){
        return this.renderTime(template,{hourString,minuteString,secondString})
      }
    }
  }
</script>
<style scoped>
  .aa{
    width:100%
  }
</style>