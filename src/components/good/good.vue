<template>
  <div class="goods">
    <div class="menu-wrapper">
      <ul class="menu">
        <li
          class="menu-item"
          v-for="(good, index) in goods"
          v-bind:key="index"
        ><span class="name">{{good.name}}</span></li>
      </ul>
    </div>
    <div class="foods-wrapper">
      <ul class="foods">
        <li
          class="foods-item"
          v-for="(good, index) in goods"
          v-bind:key="index"
        >
          <h2 class="type">{{good.name}}</h2>
          <ul class="food-wrapper">
            <li
              class="food"
              v-for="(food, index) in good.foods"
              v-bind:key="index"
            >
              <div class="icon-wrapper"><img v-bind:src="food.icon" class="icon"/></div>
              <div class="description">
                <h3 class="name">{{food.name}}</h3>
                <span>food.</span>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'goods',
  data () {
    return {
      goods: []
    }
  },
  mounted () {
    this.getGoods()
  },
  methods: {
    getGoods () {
      axios.get('/goods').then((resolve, reject) => {
        this.goods = resolve.data.data
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
  .goods
    flex 1
    overflow auto
    display flex
    .menu-wrapper
      width 80px
      background #f3f5f7
      overflow auto
      .menu
        .menu-item
          height 54px
          line-height 28px
          font-size 12px
          background #f3f5f7
          color #07111b
          padding 0 12px
          &.active
            background white
          .name
            box-sizing border-box
            display inline-block
            width 100%
            height 100%
            border-bottom 1px solid rgba(7, 17, 27, .1)
            display flex
            align-items center
    .foods-wrapper
      flex 1
      // background yellow
      overflow auto
      .foods
        .foods-item
          .type
            padding-left 14px
            height 26px
            line-height 26px
            background #f4f5f7
            border-left 3px solid rgba(7, 17, 27, 0.1)
            font-size 12px
            color rgb(147, 153, 159)
          .food-wrapper
            .food
              padding 18px
              border-bottom 1px solid rgba(7, 17, 27, .1)

              .icon
                width 57px
                height 57px
</style>
