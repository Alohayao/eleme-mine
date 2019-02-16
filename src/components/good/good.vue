<template>
  <div class="goods">
    <div class="menu-wrapper">
      <ul class="menu">
        <li
          class="menu-item"
          v-for="(good, index) in goods"
          v-bind:key="index"
          v-on:click="selectCator(index)"
          v-bind:class="{active: good.active}"
        ><span class="name">{{good.name}}</span></li>
      </ul>
    </div>
    <div class="foods-wrapper" ref="foods-wrapper">
      <ul class="foods" ref="foods">
        <li
          class="foods-item"
          v-for="(good, index) in goods"
          v-bind:key="index"
          ref="foods-item"
        >
          <h2 class="catorgary">{{good.name}}</h2>
          <ul class="food-wrapper">
            <li
              class="food"
              v-for="(food, index) in good.foods"
              v-bind:key="index"
              v-on:click="showDetail(food)"
            >
              <div class="icon-wrapper"><img v-bind:src="food.icon" class="icon"/></div>
              <div class="description">
                <h3 class="name">{{food.name}}</h3>
                <p v-if="food.description" class="detail">{{food.description}}</p>
                <p class="sale">
                  <span class="count">月售{{food.sellCount}}份</span>
                  <span class="rating">好评率{{food.rating}}</span>
                </p>
                <p class="price">
                  <span class="now">￥{{food.price}}</span>
                  <span class="old" v-if="food.oldPrice">￥{{food.oldPrice}}</span>
                </p>
              </div>
              <food v-bind:food="food" v-show="detailShow" v-on:closeDetail="closeDetail"></food>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Vue from 'vue'
import food from 'components/food/food.vue'
export default {
  name: 'goods',
  components: {
    food
  },
  data () {
    return {
      goods: [],
      activeIndex: 0,
      itemArr: [],
      detailShow: false
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
    },
    selectCator (index) {
      Vue.set(this.goods[this.activeIndex], 'active', false)
      Vue.set(this.goods[index], 'active', true)
      this.activeIndex = index
      this.itemArr = this.$refs['foods-item']
      this.scrollTo()
    },
    scrollTo () {
      this.$refs['foods-wrapper'].scrollTop = this.topArr[this.activeIndex]
    },
    showDetail () {
      this.detailShow = true
    },
    closeDetail (flag) {
      console.log(flag)
      this.detailShow = false
      console.log(this.detailShow)
    }
  },
  computed: {
    topArr () {
      return this.itemArr.map((v, i) => {
        return v.offsetTop
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
        position relative
        .foods-item
          .catorgary
            padding-left 14px
            height 26px
            line-height 26px
            background #f4f5f7
            border-left 3px solid rgba(7, 17, 27, 0.1)
            font-size 12px
            color rgb(147, 153, 159)
          .food-wrapper
            .food
              display flex
              padding 18px
              border-bottom 1px solid rgba(7, 17, 27, .1)
              &:last-child
                border-bottom 0
              .icon
                width 57px
                height 57px
              .description
                margin-left 10px
                padding-top 2px
                color rgb(147, 153, 159)
                font-size 10px
                .name
                  font-size 14px
                  color rgb(7, 17, 27)
                .detail
                  margin-top 8px
                  font-size 10px
                  color rgb(147, 153, 159)
                  line-height 10x
                .sale
                  margin-top 8px
                  display flex
                  color rgb(147, 153, 159)
                  font-size 10px
                  .rating
                    margin-left 12px
                .price
                  display flex
                  margin-top 8px
                  .now
                    color rgb(240, 20, 20)
                    font-size 14px
                    font-weight 700
                  .old
                    margin-left 8px
                    color rgb(147, 153, 159)
                    text-decoration line-through
</style>
