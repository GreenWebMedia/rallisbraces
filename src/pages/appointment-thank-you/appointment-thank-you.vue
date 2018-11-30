<template lang='pug' src='./appointment-thank-you.pug'></template>

<script>
import Loader from 'components/loader/loader'
import Header from 'components/header/header'
import Footer from 'components/footer/footer'

export default {
  name: 'appointment-thank-you',
  computed: {
    props () {
      return this.$store.state.pages['appointment-thank-you']
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
