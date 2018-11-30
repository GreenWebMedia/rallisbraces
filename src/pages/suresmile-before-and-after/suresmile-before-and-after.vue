<template lang='pug' src='./suresmile-before-and-after.pug'></template>

<script>
import Loader from 'components/loader/loader'
import Header from 'components/header/header'
import Footer from 'components/footer/footer'

export default {
  name: 'suresmile-before-and-after',
  computed: {
    props () {
      return this.$store.state.pages['suresmile-before-and-after']
    },
    loading () {
      return this.$store.state.loading
    }
  },
  components: {
    Loader,
    Header,
    Footer
  }
}
</script>
