<template>
  <v-snackbar
    v-model='snackbarData.show'
    :color='snackbarData.color'
    bottom
    class='white--text'
    right
    shaped
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
  computed: mapState('snackbarStore', ['snackbarData']),
  watch: {
    'snackbarData.show'() {
      if (this.snackbarData.show) setTimeout(() => this.SET_SNACKBAR_DATA({ show: false }), 4000)
    }
  },
  methods: mapMutations('snackbarStore', ['SET_SNACKBAR_DATA'])
}
</script>