<template lang="pug">
  #app(:class="`${lang === '' ? '' : 'lang--' + lang}`")
    layout-home
    component-control-panel
</template>

<script>
import LayoutHome from './layouts/home'
import componentControlPanel from './components/controlPanel'
export default {
  name: 'App',
  components: {
    LayoutHome,
    componentControlPanel
  },
  computed: {
    lang(){
      return this.$store.state.lang
    }
  },
  created () {
    document.title = "LDSG - Typography Checker";
  }
}
</script>

<style lang="sass">
@import ./assets/sass/index

#app
  padding: 18px 18px 0 18px
  background-color: white
  position: relative
  @media screen and (min-width: 1060px)
    width: 375px
    height: 667px
    overflow-y: scroll
    border-radius: 8px
    display: block
    margin-left: 30vw
    box-shadow: 0 0 10px rgba(black, .1)
    

body
  @media screen and (min-width: 1060px)
    display: flex
    align-items: center
    height: 100vh
    background-color: #F2F3F4
    
    
.lang--kr
  font-family: 'Apple SD Gothic Neo'
  
.lang--en
  font-family: '-apple-system', 'BlinkMacSystemFont'
  
.lang--jp
  font-family: 'Hiragino Sans'

.lang--zh
  font-family: 'PingFang TC'
  
.lang--th
  font-family: 'Thonburi'
</style>
