<template lang="pug">
  .sectionTitle {{title}}
</template>

<script>
export default {
  name: 'ComponentSectionTitle',
  props: {
    title: {
      type: String,
      default: ()=>''
    }
  }
}
</script>

<style lang="sass">
.sectionTitle
  font-size: 20px
  line-height: 1.2
  color: #111
  font-weight: bold
  margin-top: 50px
  margin-bottom: 8px
</style>