<template>
  <div class="moving-arrow" :style="arrowStyle">
  </div>
</template>
<script>
  export default {
    props: {
      moveY: {
        type: Number,
        default: 0
      }
    },
    computed: {
      /**
       * Styles to animate the arrow
       * @returns {{transform: string}}
       */
      arrowStyle () {
        return {
          transform: `translate3d(0px, ${this.moveY}px, 0px)`
        }
      }
    }
  }
</script>
<style lang="scss">
  $bg-nude: #f3f0e8 !default;
  
  .moving-arrow {
    border-right: 15px solid #f3f0e8;
    border-top: 15px solid transparent;
    border-bottom: 15px solid transparent;
    display: inline-block;
    position: absolute;
    left: 245px;
    top: 100px;
    transition: all 0.5s cubic-bezier(0.29, 1.42, 0.79, 1);
}
</style>