<template>
  <div id="app">
    <AppHeader v-bind:seller="seller"></AppHeader>
    <nav class="tab border-1px">
      <router-link class="tab-item" to="/good">商品</router-link>
      <router-link class="tab-item" to="/ratings">评论</router-link>
      <router-link class="tab-item" to="/seller">商家</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader/AppHeader.vue'
import axios from 'axios'

const ERR_OK = 0

export default {
  name: 'App',
  data() {
    return {
      seller: {}
    }
  },
  components: {
    AppHeader
  },
  methods: {
    getData() {
      axios.get('/seller').then((response) => {
        if (response.data.errno === ERR_OK) {
          this.seller = response.data.data
        }
        console.log(response.data.data)
      })
    }
  },
  mounted() {
    this.getData()
  }
}
</script>

<style lang="stylus" scoped>
  @import './common/stylus/mixin.stylus'
  #app
    width 100%
    height 100%
    .tab
      width 100%
      display flex
      height 40px
      align-items center
      // border-bottom 1px solid rgba(7, 17, 27, 0.1)
      border-1px(rgba(7, 17, 27, 0.1))
      .tab-item
        flex 1
        line-height 40px
        text-align center
        color #4e555b
        font-size 14px
        &.router-link-active
          color #ed2122
</style>
