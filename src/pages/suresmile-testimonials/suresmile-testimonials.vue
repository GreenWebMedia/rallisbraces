<template lang='pug' src='./suresmile-testimonials.pug'></template>

<script>
import Loader from 'components/loader/loader'
import Header from 'components/header/header'
import Footer from 'components/footer/footer'

export default {
  name: 'suresmile-testimonials',
  computed: {
    props () {
      return this.$store.state.pages['suresmile-testimonials']
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
