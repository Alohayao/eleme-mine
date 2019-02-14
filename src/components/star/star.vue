<template>
  <div class="star" v-bind:class="starType">
    <span
      v-for="(starClass, index) in starClasses"
      v-bind:key="index"
      v-bind:class="starClass"
      class="star-item"
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
  props: ['score', 'size'],

  computed: {
    starClasses () {
      let result = []
      let integer = Math.floor(this.score)
      let hasDecimal = this.score % 1 !== 0 && this.score % 1 >= 0.5
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
    },
    starType () {
      return 'star' + this.size
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../common/stylus/mixin.stylus'
  .star
    display flex
    justify-content center
    .star-item
      background no-repeat
    &.star48
      .star-item
        width 20px
        height 20px
        background-size 20px 20px
        &.on
          bg-image('star48_on')
        &.half
          bg-image('star48_half')
        &.off
          bg-image('star48_off')
    &.star36
      .star-item
        width 36px
        height 36px
        &.on
          bg-image('star36_on')
        &.half
          bg-image('star36_half')
        &.off
          bg-image('star36_off')
    &.star24
      .star-item
        width 24px
        height 24px
        &.on
          bg-image('star24_on')
        &.half
          bg-image('star24_half')
        &.off
          bg-image('star24_off')
</style>
