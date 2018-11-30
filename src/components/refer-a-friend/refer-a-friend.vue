<template lang='pug' src='./refer-a-friend.pug'></template>

<script>
export default {
  components: {
  },
  data: () => {
    return {
      formSubmitted: false
    }
  },
  methods: {
    validateBeforeSubmit () {
      this.$validator.validateAll()
      .then(result => {
        if (result) {
          this.$el.children[0].submit()
        } else {
        }
      })
      .catch((e) => {
        console.log(e)
      })
    }
  }
}
</script>
