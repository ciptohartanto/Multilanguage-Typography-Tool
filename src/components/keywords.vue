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
    padding: 9px 18px
    border: 1px solid #e8e8e8
    font-size: 13px
    border-radius: 18px
    margin-right: 12px
    margin-bottom: 10px
    color: #111
</style>