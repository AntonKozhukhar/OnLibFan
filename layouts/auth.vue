<template>
  <v-app>
    <v-app-bar fixed app>
      <v-toolbar-title v-text='title' />
      <v-spacer></v-spacer>
      <v-btn
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
export default {
  name: 'AuthLayout',
  data: () => ({
    title: 'OnLibFan'
  }),
}
</script>

<style scoped>

</style>