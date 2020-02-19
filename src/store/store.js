import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    article: {
      title: "Training Gallery Jose's First Session",
      headline_author: "Alex Greenberg",
      headline_published_date: "February 28, 2020",
      image_caption: "Feb 11, 2020. Photographer: Paul Yeung/Bloomberg",
      paragraphs: {
        paragraph1: "---Edit Here--- ",
        paragraph2: "Jose was named our new Head Coach this morning. One fo the most successful managers of all time. 25 senior throphies including three Premier League titles and two Champions Asked about his excitement at working with our squad, Jose told us: It's a priviledge when a manager goes to a club and feels that happiness in relation to squad he is going to have.",
        paragraph3: "This is the third Paragraph. Thanks for reading through! :)"
      }
      
    },
    keywords: {
      keyword1: 'Drogba',
      keyword2: 'Manchester United'
    },
    slidingCards:[
      {
        title: "Drogba comes banck to Manchester United. Manchester United fans are so excited!",
        subtitle: "SUN"
      },
      {
        title: "Dummy text",
        subtitle: "ABC News"
      },
      {
        title: "Dummy text",
        subtitle: "ABC News"
      }
    ],
    trendings: [
      {
        title: "Son Heung-min returns but Seth MacFarlane loves all people and is so funny!",
        subtitle: "ABC News"
      },
      {
        title: "Dummy Text",
        subtitle: "Fox News"
      },
      {
        title: "International tourists love to visit Jeju Island",
        subtitle: "Klook"
      }
    ],
    isPopup: false,
    sectionTitles: {
      keywords: 'Keywords',
      slidingCards: "More in 'Soccer'",
      trendings: 'Trending Now'
    },
    lang: 'en',
    langTitles: {
      en: 'UI Language',
      zh: 'UI 語言',
      kr: 'UI 언어',
      th: 'ภาษา UI',
      jp: 'UI言語'
    }
  },
  mutations: {
    setPopup(state, val) {
      return state.isPopup = val
    },
    unsetPopup(state, val) {
      return state.isPopup = val
    },
    setNewTitle(state, val) {
      return state.article.title = val
    },
    setNewHeadlineAuthor(state, val) {
      return state.article.headline_author = val
    },
    setNewHeadlinePublishedDate(state, val) {
      return state.article.headline_published_date = val
    },
    setNewImageCaption(state, val) {
      return state.article.image_caption = val
    },
    setNewArticleText(state, val) {
      return state.article.paragraph = val
    },
    setNewKeywords(state, val){
      return state.keywords = val
    },
    setNewSlidingCards(state, val){
      return state.slidingCards = val
    },
    setNewTrendingArticles(state,val){
      return state.trendings = val
    },
    setNewKeywordTitle(state, val){
      return state.sectionTitles['keywords'] = val
    },
    setSlidingCardsTitle(state, val){
      return state.sectionTitles['slidingCards'] = val
    },
    setTrendingArticlesTitle(state, val){
      return state.sectionTitles['trendings'] = val
    },
    setLang(state, val){
      return state.lang = val
    }
  }
})