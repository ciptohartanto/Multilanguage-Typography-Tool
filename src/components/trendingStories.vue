<template lang="pug">
  .trendingStories
    component-section-title(:title='trendingStoriesTitle')
    ul.trendingStories-list
      li.trendingStories-item(v-for="(trending, index) in trendings" :key="index") 
        .trendingStories-left
          .trendingStories-image(style="background-image: url('https://mediad.publicbroadcasting.net/p/shared/npr/styles/placed_wide/nprshared/201805/141157543.jpg');")
        .trendingStories-right
          h3.trendingStories-title {{trending.title}}
          h4.trendingStories-subtitle {{trending.subtitle}}
          
          
</template>

<script>
import ComponentSectionTitle from './sectionTitle'

export default {
  name: 'ComponentTrendingStories',
  components: {
    ComponentSectionTitle
  },
  computed: {
    trendingStoriesTitle() {
      return this.$store.state.sectionTitles['trendings']
    },
    trendings() {
      return this.$store.state.trendings
    }
  }
}
</script>

<style lang="sass">
.trendingStories
  &-list
    display: flex
    flex-wrap: wrap
  &-item
    display: flex
    width: 100%
    margin-bottom: 10px
    &:last-child
      margin-bottom: 0
  &-left
    margin-right: 10px
  &-right
    overflow: hidden
  &-image
    display: block
    width: 80px
    height: 60px
    border-radius: 8px
    background-size: cover
    background-position: center
    background-repeat: no-repeat
  &-title
    font-size: 16px
    line-height: 1.4
    font-weight: bold
    overflow: hidden
    display: -webkit-box
    -webkit-line-clamp: 2
    -webkit-box-orient: vertical
  &-subtitle
    font-size: 14px
    font-weight: normal
    color: grey
</style>