<template lang='pug' src='./acceledent-aura.pug'></template>

<script>
import Loader from 'components/loader/loader'
import Header from 'components/header/header'
import Footer from 'components/footer/footer'

export default {
  name: 'acceledent-aura',
  computed: {
    props () {
      return this.$store.state.pages['acceledent-aura']
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
