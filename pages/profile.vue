<template>
  <v-container>
    <v-card class='pa-6'>
      <profile-info></profile-info>
      <v-divider></v-divider>
      <profile-books-list></profile-books-list>
    </v-card>
  </v-container>
</template>

<script>
import ProfileInfo from '~/components/Profile/ProfileInfo'
import ProfileBooksList from '~/components/Profile/ProfileBooksList'

export default {
  name: 'ProfilePage',
  components: { ProfileBooksList, ProfileInfo },
  middleware: ['auth']
}
</script>

<style scoped>

</style>