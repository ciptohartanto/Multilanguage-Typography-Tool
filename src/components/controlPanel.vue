<template lang="pug">
  .controlPanel(v-if="isPopup !== false")
    .controlPanel-body
      .controlPanel-head
        .controlPanel-headText Control Panel
        
      .controlPanel-section
        .controlPanel-title {{languageSettingsTranslation[this.$store.state.lang]}}
        .controlPanel-selectGroup
          select.controlPanel-select(v-model="langSelector" @change="setLang")
            option(value="" selected disabled hidden) select your UI language
            option(value="en") default Global (EN)
            option(value="kr") Korean
            option(value="zh") Mandarin
            option(value="th") Thai
            option(value='jp') Japanese
          .controlPanel-arrow
            include ./../assets/arrow.svg
          
          
      .controlPanel-section
        .controlPanel-title Article
        input.controlPanel-textarea(type="text" placeholder="Article Title" v-model="newTitle" @input="setNewTitle")
        
        input.controlPanel-textarea(type="text" placeholder="Article Headline Author" v-model="newHeadlineAuthor" @input="setNewHeadlineAuthor")
        
        input.controlPanel-textarea(type="text" placeholder="Article Headline Published Date" v-model="newHeadlinePublishedDate" @input="setNewHeadlinePublishedDate")
        
        input.controlPanel-textarea(type="text" placeholder="Article Image Caption" v-model="newImageCaption" @input="setNewImageCaption")
        
        textarea.controlPanel-textarea(placeholder="Article Body Text, format: <p>test</p>" v-model="newArticleText" @input="setNewArticleText" rows="6")
        
      .controlPanel-section
        .controlPanel-title Keywords
        input.controlPanel-textarea(placeholder="Section Title (Keywords)" v-model="newKeywordTitle" @input="setNewKeywordTitle")
        textarea.controlPanel-textarea(placeholder="Keywords List" v-model="newKeywords" @input="setNewKeywords")
        
        
      .controlPanel-section
        .controlPanel-title Sliding Cards
        input.controlPanel-textarea(placeholder="Section Title (More in 'Soccer')" v-model="newSlidingCardsTitle" @input="setSlidingCardsTitle")
        textarea.controlPanel-textarea(placeholder="Keywords List" v-model="newSlidingCards" @input="setNewSlidingCards" rows="6")
        
        
      .controlPanel-section
        .controlPanel-title Trending Now
        input.controlPanel-textarea(placeholder="Section Title (Trending Now)" v-model="newTrendingArticlesTitle" @input="setTrendingArticlesTitle")
        textarea.controlPanel-textarea(placeholder="Keywords List" v-model="newTrendingArticles" @input="setNewTrendingArticles" rows="6")
        
        
      
    .controlPanel-button(@click="unsetPopup")
</template>

<script>
export default {
  name: "ComponentControlPanel",
  computed: {
    isPopup() {
      return this.$store.state.isPopup
    },
    languageSettingsTranslation(){
      return this.$store.state.langTitles
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
      newKeywordTitle: '',
      newSlidingCardsTitle: '',
      newTrendingArticlesTitle: '',
      langSelector: ''
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
    },
    setLang(){
      this.$store.commit('setLang', this.langSelector)
    }
  }
}
</script>

<style lang="sass">
.controlPanel
  background-color: #f0f0f0
  position: fixed
  top: 0
  right: 0
  bottom: 0
  left: 0
  z-index: 5
  height: 100vh
  overflow-y: scroll
  -webkit-overflow-scroll: touch
  @media screen and (min-width: 1060px)
    background-color: white
    position: fixed
    width: 375px
    right: 0
    left: auto
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
    &:before
      content: 'Confirm'
      position: absolute
      
    @media screen and (min-width: 1060px)
      position: fixed
      width: 375px
      right: 0
      left: auto
      &:before
        content: 'Close This Window'
    
  &-body
    padding-bottom: 100px
  &-section
    background-color: white
    padding: 18px
    display: flex
    flex-wrap: wrap
    margin-left: 18px
    margin-right: 18px
    border-radius: 18px
    margin-bottom: 18px
    &:last-child
      margin-bottom: 0
  &-head
    padding: 30px 36px
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
    background-color: #f8f8f8
    border: none
    border-radius: 10px
    font-size: 16px
    padding: 12px
    line-height: 1.6
    
  &-select
    appearance: none
    border: none
    padding: 12px
    width: 100%
    position: relative
    display: flex
      
  &-selectGroup
    position: relative
    width: 100%
    display: flex
    align-items: center
    justify-content: center

  &-arrow
    width: 20px
    height: 20px
    display: flex
    position: absolute
    right: 20px
    top: auto
    align-items: center
    justify-content: center
    fill: grey
</style>