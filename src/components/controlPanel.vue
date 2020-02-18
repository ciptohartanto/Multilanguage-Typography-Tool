<template lang="pug">
  .controlPanel(v-if="isPopup !== false")
    .controlPanel-body
      .controlPanel-head
        .controlPanel-headText Control Panel
        
      .controlPanel-section
        .controlPanel-title Article
        textarea.controlPanel-textarea(placeholder="Article Title" v-model="newTitle" @input="setNewTitle")
        
        textarea.controlPanel-textarea(placeholder="Article Headline Author" v-model="newHeadlineAuthor" @input="setNewHeadlineAuthor")
        
        textarea.controlPanel-textarea(placeholder="Article Headline Published Date" v-model="newHeadlinePublishedDate" @input="setNewHeadlinePublishedDate")
        
        textarea.controlPanel-textarea(placeholder="Article Image Caption" v-model="newImageCaption" @input="setNewImageCaption")
        
        textarea.controlPanel-textarea(placeholder="Article Body Text, format: <p>test</p>" v-model="newArticleText" @input="setNewArticleText" rows="6")
        
      .controlPanel-section
        .controlPanel-title Keywords
        input.controlPanel-textarea(placeholder="Module Name (Keywords)" v-model="newKeywordTitle" @input="setNewKeywordTitle")
        textarea.controlPanel-textarea(placeholder="Keywords List" v-model="newKeywords" @input="setNewKeywords")
        
        
      .controlPanel-section
        .controlPanel-title Sliding Cards
        input.controlPanel-textarea(placeholder="Module Name (Sliding Card)" v-model="newSlidingCardsTitle" @input="setSlidingCardsTitle")
        textarea.controlPanel-textarea(placeholder="Keywords List" v-model="newSlidingCards" @input="setNewSlidingCards" rows="6")
        
        
      .controlPanel-section
        .controlPanel-title Trending Now
        input.controlPanel-textarea(placeholder="Module Name (Sliding Card)" v-model="newTrendingArticlesTitle" @input="setTrendingArticlesTitle")
        textarea.controlPanel-textarea(placeholder="Keywords List" v-model="newTrendingArticles" @input="setNewTrendingArticles" rows="6")
        
        
      
    .controlPanel-button(@click="unsetPopup") Update
</template>

<script>
export default {
  name: "ComponentControlPanel",
  computed: {
    isPopup() {
      return this.$store.state.isPopup
    }
  },
  data() {
    return {
      newTitle: '',
      newHeadlineAuthor: '',
      newHeadlinePublishedDate: '',
      newImageCaption: '',
      newArticleText: JSON.stringify(this.$store.state.article.paragraphs),
      newKeywords: JSON.stringify(this.$store.state.keywords),
      newSlidingCards: JSON.stringify(this.$store.state.slidingCards),
      newTrendingArticles: JSON.stringify(this.$store.state.trendings),
      newKeywordTitle: this.$store.state.sectionTitles['keywords'],
      newSlidingCardsTitle: this.$store.state.sectionTitles['slidingCards'],
      newTrendingArticlesTitle: this.$store.state.sectionTitles['trendings']
    }
  },
  methods: {
    unsetPopup() {
      this.$store.commit('unsetPopup', false)
    },
    setNewTitle(){
      this.$store.commit('setNewTitle', this.newTitle)
    },
    setNewHeadlineAuthor(){
      this.$store.commit('setNewHeadlineAuthor', this.newHeadlineAuthor)
    },
    setNewHeadlinePublishedDate(){
      this.$store.commit('setNewHeadlinePublishedDate', this.newHeadlinePublishedDate)
    },
    setNewImageCaption() {
      this.$store.commit('setNewImageCaption', this.newImageCaption)
    },
    setNewArticleText(){
      this.$store.commit('setNewArticleText', JSON.parse(this.newArticleText))
    },
    setNewKeywords(){
      this.$store.commit('setNewKeywords', JSON.parse(this.newKeywords))
    },
    setNewSlidingCards(){
      this.$store.commit('setNewSlidingCards', JSON.parse(this.newSlidingCards))
    },
    setNewTrendingArticles(){
      this.$store.commit('setNewTrendingArticles', JSON.parse(this.newTrendingArticles))
    },
    setNewKeywordTitle(){
      this.$store.commit('setNewKeywordTitle', this.newKeywordTitle)
    },
    setSlidingCardsTitle(){
      this.$store.commit('setSlidingCardsTitle', this.newSlidingCardsTitle)
    },
    setTrendingArticlesTitle(){
      this.$store.commit('setTrendingArticlesTitle', this.newTrendingArticlesTitle)
    }
  }
}
</script>

<style lang="sass">
.controlPanel
  background-color: #faf8f6
  position: fixed
  top: 0
  right: 0
  bottom: 0
  left: 0
  z-index: 5
  height: 100vh
  overflow-y: scroll
  &-button
    position: fixed
    bottom: 0
    left: 0
    right: 0
    background-color: green
    height: 60px
    font-size: 18px
    font-weight: bold
    color: #fff
    display: flex
    align-items: center
    justify-content: center
    
  &-body
    padding-bottom: 100px
  &-section
    background-color: white
    padding: 18px
    display: flex
    flex-wrap: wrap
  &-head
    padding: 30px 18px
  &-headText
    font-size: 22px
    font-weight: bold
  &-title
    font-size: 18px
    font-weight: bold
    width: 100%
    margin-bottom: 20px
  &-textarea
    display: block
    width: 100%
    margin-bottom: 20px
    border: 1px solid #b5b1af
    border-radius: 10px
    padding: 8px
    line-height: 1.6
</style>