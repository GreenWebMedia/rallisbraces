<template lang='pug' src='./appointment-request.pug'></template>

<script>
import Loader from 'components/loader/loader'
import Header from 'components/header/header'
import Footer from 'components/footer/footer'

export default {
  name: 'appointment-request',
  computed: {
    props () {
      return this.$store.state.pages['appointment-request']
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
