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
  padding: 18px


</style>
