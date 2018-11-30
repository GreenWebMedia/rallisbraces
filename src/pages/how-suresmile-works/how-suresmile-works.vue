<template lang='pug' src='./how-suresmile-works.pug'></template>

<script>
import Loader from 'components/loader/loader'
import Header from 'components/header/header'
import Footer from 'components/footer/footer'

export default {
  name: 'how-suresmile-works',
  computed: {
    props () {
      return this.$store.state.pages['how-suresmile-works']
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
