<template lang="pug">
  .slidingCard
    component-section-title(:title="slidingCardTitle")
    component-horizontal-scroll(:parentHeight="slidingCardParentHeight" :childHeight="slidingCardChildHeight")
      ul.slidingCard-list
        li.slidingCard-item(v-for="slidingCard in slidingCards")
          .slidingCard-image(style="background-image: url('https://m.media-amazon.com/images/M/MV5BM2VlN2NhMTgtMjIzNi00MTRkLTgyZGQtMTEyNTM2ZmMxOWIzXkEyXkFqcGdeQXVyMjk3NTUyOTc@._V1_UY317_CR51,0,214,317_AL_.jpg');")
          h3.slidingCard-title {{slidingCard.title}}
          h4.slidingCard-subtitle {{slidingCard.subtitle}}
          
    
  
</template>

<script>
import ComponentSectionTitle from './sectionTitle'
import ComponentHorizontalScroll from './horizontalScroll'
export default {
  name: 'ComponentSlidingCards',
  components: {
    ComponentHorizontalScroll,
    ComponentSectionTitle
  },
  props: {
    slidingCardParentHeight: {
      type: Number,
      default: ()=> 265
    },
    slidingCardChildHeight: {
      type: Number,
      default: () => 265
    }
  },
  computed: {
    slidingCardTitle(){
      return this.$store.state.sectionTitles['slidingCards']
    },
    slidingCards(){
      return this.$store.state.slidingCards
    }
  }
}
</script>

<style lang="sass">
.slidingCard
  &-list
    margin-top: 6px
    display: flex
  &-item
    display: flex
    width: 200px
    height: auto
    position: relative
    flex-wrap: wrap
    margin-right: 8px
    &:last-child
      margin-right: 0 
  &-image
    display: block
    width: 223px
    height: 170px
    border-radius: 8px
    background-repeat: no-repeat
    background-size: cover
    background-position: center
  &-title
    overflow: hidden
    display: -webkit-box
    -webkit-line-clamp: 2
    -webkit-box-orient: vertical
    font-size: 16px
    font-weight: bold
    line-height: 21px
    height: 21px * 2
    width: 100%
    margin-bottom: 8px
  &-subtitle
    color: grey
    font-size: 12px
    line-height: 14px
    font-weight: normal

</style>