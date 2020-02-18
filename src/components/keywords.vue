<template lang="pug">
  .keywords
    component-section-title(:title="keywordTitle")
    ul.keywords-list
      li.keywords-item(v-for="(keyword, index) in keywords" :key="index") {{keyword}}
      
</template>

<script>
import ComponentSectionTitle from './sectionTitle'
export default {
  name: "ComponentKeywords",
  components: {
    ComponentSectionTitle
  },
  computed: {
    keywords() {
      return this.$store.state.keywords
    },
    keywordTitle() {
      return this.$store.state.sectionTitles['keywords']
    }
  }
}
</script>

<style lang="sass">
.keywords
  margin-bottom: -10px
  &-list
    display: flex
    flex-direction: flex-start
    flex-wrap: wrap
  &-item
    display: inline-flex
    padding: 2px 10px
    border: 2px solid rgba(grey,.4)
    font-size: 14px
    border-radius: 10px
    margin-right: 10px
    margin-bottom: 10px
</style>