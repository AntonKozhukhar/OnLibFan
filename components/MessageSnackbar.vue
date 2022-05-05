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
        @click='hideSnackbar'
      >
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'MessageSnackbar',
  computed: {
    ...mapState('global', ['snackbarData'])
  },
  watch: {
    snackbarData: {
      handler() {
        console.log('test')
        if (this.snackbarData.show) this.checkTimeout()
      },
      deep: true
    }
  },
  methods: {
    ...mapMutations('global', ['SET_SNACKBAR_DATA']),
    checkTimeout() {
      const time = this.snackbarData.timeout ? this.snackbarData.timeout : 4000
      setTimeout(() => this.hideSnackbar(), time)
    },
    hideSnackbar() {
      this.SET_SNACKBAR_DATA({
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