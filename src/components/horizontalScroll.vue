<template lang="pug">
.horizontalScroll-parent(:style="{height: parentHeight + 'px'}")
  .horizontalScroll-child(:style="{height: 'auto'}")
    slot
</template>
<script>
export default {
  name: 'HorizontalScroll',
  props: {

    parentHeight: {
      type: Number,
      default: () => '100'
    }
  }
}
</script>
<style lang="sass" scoped>
.horizontalScroll
  &-parent
    overflow: hidden
    margin-left: -18px
    margin-right: -18px
    -webkit-overflow-scroll: touch
    
  &-child
    display: flex
    position: relative
    width: 100%
    overflow-x: scroll
    white-space: nowrap
    padding-left: 18px
    -webkit-overflow-scroll: touch

    > *
      white-space: normal //to cancel the white-space to all decendants
      &:last-child
        padding-right: 18px // to add the padding-right: 18px effect
</style>