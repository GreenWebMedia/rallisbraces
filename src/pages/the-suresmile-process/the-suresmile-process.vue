<template lang='pug' src='./the-suresmile-process.pug'></template>

<script>
import Loader from 'components/loader/loader'
import Header from 'components/header/header'
import Footer from 'components/footer/footer'

export default {
  name: 'the-suresmile-process',
  computed: {
    props () {
      return this.$store.state.pages['the-suresmile-process']
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
