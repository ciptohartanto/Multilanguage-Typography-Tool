<template lang="pug">
  .floatEditButton(@click='activateControlPanel' v-if='isPopup === false')
    .floatEditButton-icon
      include ./../assets/edit.svg
</template>

<script>
export default {
  name: "ComponentFloatEditButton",
  methods: {
    activateControlPanel() {
      this.$store.commit('setPopup', true)
    }
  },
  computed: {
    isPopup() {
     return this.$store.state.isPopup
    }
  }
}
</script>

<style lang="sass">
.floatEditButton
  position: fixed
  display: flex
  align-items: center
  justify-content: center
  right: 20px
  bottom: 50px
  width: 50px
  height: 50px
  border-radius: 100px
  background-color: black
  box-shadow: 0 0 4px rgba(black, .7)
  z-index: 3
  cursor: pointer
  @media screen and (min-width: 1060px)
    left: 590px
    top: 50%
    transform: translateY(-50%)
    &:before
      content: 'Edit Text'
      position: absolute
      font-size: 20px
      font-weight: bold
      right: -90px
  &-icon
    display: block
    width: 50%
    height: 50%
    fill: white
  
</style>