<template>
  <div class="food" v-on:click.stop="closeDetail">
    返回
  </div>
</template>

<script>
export default {
  name: 'detail',
  props: ['food'],
  data () {
    return {
      foodDetail: this.food
    }
  },
  methods: {
    closeDetail () {
      this.$emit('closeDetail', false)
    }
  }
}
</script>

<style lang="stylus" scoped>
  .food
    position fixed
    top 0
    left 0
    width 100%
    height 100%
    background green
</style>
