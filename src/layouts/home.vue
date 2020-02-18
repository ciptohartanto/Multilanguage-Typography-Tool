<template lang='pug'>
  .home
    component-article
    component-keywords
    component-sliding-cards
    component-trending-stories
    component-button
    component-float-edit-button

</template>

<script>
import componentArticle from './../components/article'
import componentKeywords from './../components/keywords'
import componentSlidingCards from './../components/slidingCards'
import componentTrendingStories from './../components/trendingStories'
import componentButton from './../components/button'
import componentFloatEditButton from './../components/floatEditButton'

export default {
  name: 'LayoutUi',
  components: {
    componentArticle,
    componentKeywords,
    componentSlidingCards,
    componentTrendingStories,
    componentButton,
    componentFloatEditButton
  }
}
</script>

<style lang='sass'>

</style>
