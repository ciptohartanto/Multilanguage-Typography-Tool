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
  font-size: 22px
  font-weight: bold
  margin-top: 24px
  margin-bottom: 8px
</style>