<template>
  <v-snackbar
    v-model='snackbarData.show'
    top
    right
    :color='snackbarData.color'
    class='white--text'
  >
    {{ snackbarData.message }}

    <template #action={attrs}>
      <v-btn
        color='white'
        text
        v-bind='attrs'
        @click='close'
      >
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'ErrorHandler',
  computed: {
    ...mapState(['snackbarData'])
  },
  watch: {
    snackbarData: {
      handler() {
        if (this.snackbarData.show) this.checkTimeout()
      },
      deep: true
    }
  },
  methods: {
    checkTimeout() {
      const time = this.snackbarData.timeout ? this.snackbarData.timeout : 4000
      setTimeout(() => this.hideSnackbar(), time)
    },
    hideSnackbar() {
      this.$store.dispatch('snackbar', {
        show: false,
        color: 'grey',
        message: ''
      })
    }
  }
}
</script>

<style scoped>

</style>