<template lang='pug' src='./suresmile-comparison.pug'></template>

<script>
import Loader from 'components/loader/loader'
import Header from 'components/header/header'
import Footer from 'components/footer/footer'

export default {
  name: 'suresmile-comparison',
  computed: {
    props () {
      return this.$store.state.pages['suresmile-comparison']
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
