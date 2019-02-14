<template>
  <header class="AppHeader">
    <div class="blurBg">
      <img v-bind:src="seller.avatar" alt="" width="100%" height="100%">
    </div>
    <div class="content-wrapper">
      <div class="avatar">
        <img v-bind:src="seller.avatar" class="avatar" width="64" height="64"/>
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <div class="name">{{seller.name}}</div>
        </div>
        <div class="description">
          {{seller.description}} / {{seller.deliveryTime}}分钟送达
        </div>
        <div class="supports" v-if="seller.supports">
          <span class="icon" v-bind:class="type[seller.supports[0].type]"></span>
          <span class="text">{{seller.supports[0].description}}</span>
        </div>
      </div>
      <div class="support-counts" v-if="seller.supports" v-on:click="showDetail">
        <span>
          {{seller.supports.length}}个
        </span>
        <i class="icon-keyboard_arrow_right"></i>
      </div>
    </div>
    <div class="bulletin-wrapper">
      <span class="icon"></span>
      <span class="text">{{seller.bulletin}}</span>
      <i class="icon-keyboard_arrow_right"></i>
    </div>
    <transition name="fade">
      <div class="detail" v-show="detaiShow">
        <div class="detail-wrapper">
          <div class="detail-main">
            <h1 class="name">{{seller.name}}</h1>
            <div class="star-wrapper">
              <star v-bind:score="seller.score" v-bind:size="48"></star>
            </div>
            <div class="sale-info">
              <div class="title">
                <div class="line"></div>
                <div class="text">优惠信息</div>
                <div class="line"></div>
              </div>
              <ul class="sale-detail" >
                <li class="sale-item" v-for="(item, index) in seller.supports" v-bind:key="index">
                  <span class="icon" v-bind:class="type[item.type]"></span>
                  <span class="text">{{item.description}}</span>
                </li>
              </ul>
            </div>
            <div class="seller-bulletin">
              <div class="title">
                <div class="line"></div>
                <div class="text">商家公告</div>
                <div class="line"></div>
              </div>
              <div class="description">{{seller.bulletin}}</div>
            </div>
          </div>
        </div>
        <div class="detail-close" v-on:click="closeDetail">
          <i class="icon-close"></i>
        </div>
      </div>
    </transition>
  </header>
</template>

<script>
import star from 'components/star/star.vue'

export default {
  name: 'AppHeader',
  components: {
    star
  },
  props: ['seller'],
  data() {
    return {
      type: [
        'decrease', 'discount', 'guarantee', 'invoice', 'special'
      ],
      detaiShow: false
    }
  },
  mounted () {
    console.log('header')
  },
  methods: {
    showDetail() {
      this.detaiShow = true
    },
    closeDetail() {
      this.detaiShow = false
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '../../common/stylus/mixin.stylus'
  .fade-enter-active, .fade-leave-active
    transition: transform .5s
  .fade-enter, .fade-leave-to
    transform translateX(100%)
  .AppHeader
    width 100%
    height 134px
    color #ffffff
    position relative
    background rgba(7, 17, 27, 0.5)
    overflow hidden
    .blurBg
      z-index -1
      position absolute
      top 0
      left 0
      width 100%
      height 100%
      img
        filter blur(10px)
    .content-wrapper
      display flex
      padding 24px 12px 18px 24px
      position relative
      .avatar
        border-radius 2px
        display block
      .content
        margin-left 16px
        .title
          margin 2px 0 8px 0
          display flex
          align-items center
          .brand
            width 30px
            height 18px
            bg-image('brand')
            background-size 30px 18px
            background-repeat no-repeat
          .name
            font-size 16px
            font-weight bold
            line-height 18px
            height 18px
            margin-left 7px
        .description
          margin-bottom 10px
          font-size 12px
          color rgb(255 255 255)
          font-weight 200
          line-height 12px
        .supports
            margin-bottom 2px
            display flex
            align-items center
          .icon
            width 12px
            height 12px
            background-size 12px 12px
            background-repeat no-repeat
            margin-right 4px
            &.decrease
              bg-image('decrease_1')
            &.discount
              bg-image('discount_1')
            &.guarantee
              bg-image('guarantee_1')
            &.invoice
              bg-image('invoice_1')
            &.special
              bg-image('special_1')
          .text
            font-size 10px
            color rgb(255, 255, 255)
            font-weight 200
            line-height 12px
      .support-counts
        position absolute
        right 12px
        bottom 16px
        height 24px
        font-size 10px
        line-height 24px
        background-color rgba(0, 0, 0, .2)
        padding 0 8px
        border-radius 12px
    .bulletin-wrapper
      height 28px
      padding 0 12px
      background-color rgba(7, 17, 27, .2)
      display flex
      align-items center
      justify-content space-between
      font-size 10px
      .icon
        flex-shrink 0
        width 23px
        height 13px
        background-size 23px 13px
        bg-image('bulletin')
      .text
        line-height 28px
        margin 0 4px
        overflow hidden
        text-overflow ellipsis
        white-space nowrap
    .detail
      z-index 100
      position fixed
      left 0
      top 0
      background rgba(7, 17, 27, .8)
      width 100%
      height 100%
      overflow auto
      .detail-wrapper
        min-height 100%
        .detail-main
          // margin-top 64px
          padding-top 64px
          padding-bottom 64px
          .name
            font-size 16px
            font-weight 700
            line-height 16px
            text-align center
          .star-wrapper
            margin-top 16px
            text-align center
          .sale-info
            padding-left 36px
            padding-right 36px
            .title
              margin-top 28px
              margin-bottom 24px
              display flex
              align-items center
              flex-shrink 0
              .line
                width 110px
                border-top 1px solid rgba(255, 255, 255, 0.2)
              .text
                font-size 14px
                font-weight 700
                margin-left 12px
                margin-right 12px
                text-align center
            .sale-detail
              padding-left 12px
              .sale-item
                margin-bottom 12px
                display flex
                align-items center
                .icon
                  width 16px
                  height 16px
                  background-size cover
                  background-repeat no-repeat
                  &.decrease
                    bg-image('decrease_1')
                  &.discount
                    bg-image('discount_1')
                  &.guarantee
                    bg-image('guarantee_1')
                  &.invoice
                    bg-image('invoice_1')
                  &.special
                    bg-image('special_1')
                .text
                  margin-left 12px
                  font-size 12px
                  line-height 12px
                  color rgb(255, 255, 255)
          .seller-bulletin
            padding-left 36px
            padding-right 36px
            .title
              margin-top 28px
              margin-bottom 24px
              display flex
              align-items center
              flex-shrink 0
              .line
                width 110px
                border-top 1px solid rgba(255, 255, 255, 0.2)
              .text
                font-size 14px
                font-weight 700
                margin-left 12px
                margin-right 12px
                text-align center
            .description
              padding-left 12px
              padding-right 12px
              font-size 12px
              line-height 24px
      .detail-close
        text-align center
        margin-top -64px
        font-size 32px
        line-height 32px
</style>
