<template lang="pug">
  .article
    h1.article-title {{articleTitle}}
    h4.article-headline
      span.bold By 
      span.bold {{articleHeadlineAuthor}} 
      span.article-date {{articleHeadlinePublishedDate}}
    figure.article-figure
      .article-figBg
        .article-lang {{jumbotronTitles[this.$store.state.lang]}}
      figcaption.article-figcaption {{articleImageCaption}}
      
    article.article-content
      p.article-paragraph(v-for="(paragraph,index) in articleParagraphs" :key='index') {{paragraph}}

</template>

<script>
export default {
  name: "ComponentArticle",
  computed: {
    articleTitle() {
      return this.$store.state.article.title
    },
    articleHeadlineAuthor() {
      return this.$store.state.article.headline_author
    },
    articleHeadlinePublishedDate(){
      return this.$store.state.article.headline_published_date
    },
    articleImageCaption(){
      return this.$store.state.article.image_caption
    },
    articleParagraphs(){
      return this.$store.state.article.paragraphs
    },
    jumbotronTitles(){
      return this.$store.state.jumbotronTitles
    }
  }
}
</script>

<style lang="sass">
.bold
  font-weight: bold

.article
  &-title
    font-size: 30px
    line-height: 1.2
    margin-bottom: 8px
  
  &-headline
    font-size: 12px
    margin-bottom: 16px

  &-date
    color: grey
    
  &-figure
    display: flex
    flex-wrap: wrap
    margin-left: -18px
    margin-right: -18px
    margin-bottom: 24px
    
  &-figBg
    display: flex
    width: 100%
    height: 150px
    background-color: black
    position: relative
    
  &-figcaption
    margin-top: 8px
    padding-left: 18px
    padding-right: 18px
    font-size: 12px
    color: grey
    
  &-paragraph,
  p
    margin-bottom: 12px
    font-size: 16px
    &:last-child
      margin-bottom: 0
      
  &-lang
    color: white
    font-size: 30px
    font-weight: bold
    position: absolute
    transform: translateY(-50%)
    top: 50%    
    right: 0
    left: 0
    text-align: center
      

    
</style>