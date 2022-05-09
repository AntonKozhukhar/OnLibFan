<template>
  <v-snackbar
    v-model='snackbarData.show'
    top
    right
    :color='snackbarData.color'
    class='white--text'
  >
    {{ snackbarData.message }}
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
        if (this.snackbarData.show) setTimeout(() => this.SHOW_MESSAGE({ show: false }), 4000)
      },
      deep: true
    }
  },
  methods: mapMutations('snackbar', ['SHOW_MESSAGE'])
}
</script>