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
        @click='SET_SNACKBAR_DATA({show: false})'
      >
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
  name: 'MessageSnackbar',
  computed: mapState('snackbar', ['snackbarData']),
  watch: {
    snackbarData: {
      handler() {
        if (this.snackbarData.show) setTimeout(() => this.SET_SNACKBAR_DATA({ show: false }), 4000)
      },
      deep: true
    }
  },
  methods: mapMutations('snackbar', ['SET_SNACKBAR_DATA'])
}
</script>