<template>
  <svg class="svg-icon" :class="className" aria-hidden="true" :width="width" :height="height">
    <use :xlink:href="iconName" />
  </svg>
</template>
<script>
export default {
  name: 'SvgIcon',
  props: {
    iconClass: {
      type: String,
      required: true
    },
    className: {
      type: String,
      default: ''
    },
    width: {
      type:Number,
      default: 18
    },
    height: {
      default: 18
    }
  },
  computed: {
    iconName() {
      return `#icon-${this.iconClass}`
    }
  }
}
</script>
<style scoped>
.svg-icon {
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
  margin-right:6px
}
</style>
