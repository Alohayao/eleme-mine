<template>
  <div class="star">
    <span
      v-for="(starClass, index) in starClasses"
      v-bind:key="index"
      v-bind:class="starClass"
    ></span>
  </div>
</template>

<script>
const Length = 5
const STAR_ON = 'on'
const STAR_HALF = 'half'
const STAR_OFF = 'off'

export default {
  name: 'star',
  props: ['score'],
  computed: {
    starClasses () {
      let result = []
      let integer = Math.floor(this.score)
      let hasDecimal = this.score % 1 !== 0
      for (let i = 0; i < integer; i++) {
        result.push(STAR_ON)
      }
      if (hasDecimal) {
        result.push(STAR_HALF)
      }
      while (result.length < Length) {
        result.push(STAR_OFF)
      }
      return result
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../common/stylus/mixin.stylus';
  span
    width 24px
    height 24px
    display inline-block
    background no-repeat
    &.on
      bg-image('star24_on')
    &.half
      bg-image('star24_half')
    &.off
      bg-image('star24_off')
</style>
