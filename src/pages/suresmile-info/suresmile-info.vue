<template lang='pug' src='./suresmile-info.pug'></template>

<script>
import Loader from 'components/loader/loader'
import Header from 'components/header/header'
import Footer from 'components/footer/footer'

export default {
  name: 'suresmile-info',
  computed: {
    props () {
      return this.$store.state.pages['suresmile-info']
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
