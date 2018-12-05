<template lang='pug' src='./home.pug'></template>

<script>
import Loader from 'components/loader/loader'
import Header from 'components/header/header'
import Footer from 'components/footer/footer'

export default {
  name: 'home',
  computed: {
    props () {
      return this.$store.state.pages.home
    },
    loading () {
      return this.$store.state.loading
    }
  },
  components: {
    Loader,
    Header,
    Footer
  },
  data () {
    return {
      swiperOption: {
        spaceBetween: 30,
        effect: 'fade',
        speed: 1000,
        autoheight: true,
        autoplay: {
          delay: 7000,
          disableOnInteraction: false
        }
      }
    }
  }
}
</script>
