<template>
  <v-card width='400'>
    <v-card-title class='justify-center pb-0'>
      <span v-if="authAction === 'login'">Login</span>
      <span v-else>Registration</span>
    </v-card-title>
    <login-fields v-if="authAction==='login'"></login-fields>
    <register-fields v-else></register-fields>
  </v-card>
</template>

<script>
import { mapState } from 'vuex'
import RegisterFields from '~/components/Auth/RegisterFields'
import LoginFields from '~/components/Auth/LoginFields'

export default {
  name: 'LoginPage',
  components: { LoginFields, RegisterFields },
  layout: 'auth',
  middleware: 'auth',
  computed: {
    ...mapState('usersStore', ['authAction'])
  }
}
</script>

<style scoped>

</style>