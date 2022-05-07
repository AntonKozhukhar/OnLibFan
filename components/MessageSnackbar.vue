<template>
  <v-snackbar
    v-model='show'
    top
    right
    :color='color'
    class='white--text'
  >
    {{ message }}
    <template #action={attrs}>
      <v-btn
        color='white'
        text
        v-bind='attrs'
        @click='show = false'
      >
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>

export default {
  name: 'MessageSnackbar',
  data: () => ({
    show:false,
    color: '',
    message: '',
  }),
  created() {
    this.$store.subscribe((mutation, state) => {
      if (mutation.type === 'snackbar/showMessage') {
        this.message = state.snackbar.message
        this.color = state.snackbar.color
        this.show = true
      }
    })
  },
}
</script>

<style scoped>

</style>