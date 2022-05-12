<template>
  <v-app>
    <message-snackbar />
    <v-app-bar
      app
      fixed
      src='https://about.proquest.com/globalassets/proquest/media/images/decrotive/oldbooks.jpg'
    >
      <v-toolbar-title v-text='title' />
      <v-spacer></v-spacer>
      <v-btn
        color='white'
        icon
        to='/'
      >
        <v-icon>mdi-export</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container class='d-flex justify-center mt-10'>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>

</template>

<script>
import MessageSnackbar from '@/components/MessageSnackbar'

export default {
  name: 'AuthLayout',
  components: { MessageSnackbar },
  data: () => ({
    title: 'OneLibFans'
  })
}
</script>

<style scoped>

</style>