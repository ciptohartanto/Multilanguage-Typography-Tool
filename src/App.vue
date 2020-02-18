<template lang="pug">
  #app
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
    margin-left: 170px
    margin-top: 170px
    box-shadow: 0 0 10px rgba(black, .1)
    

body
  @media screen and (min-width: 1060px)
    background-color: #f0f0f0
</style>
