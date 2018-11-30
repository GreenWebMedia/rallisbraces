<template lang='pug' src='./refer-a-friend.pug'></template>

<script>
import Loader from 'components/loader/loader'
import Header from 'components/header/header'
import Footer from 'components/footer/footer'

export default {
  name: 'refer-a-friend',
  computed: {
    props () {
      return this.$store.state.pages['refer-a-friend']
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
