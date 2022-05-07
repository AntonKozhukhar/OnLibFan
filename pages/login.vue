<template>
  <v-card width='400'>
    <v-card-title class='justify-center pb-0'>
      <span v-if="authStatus === 'login'">Login</span>
      <span v-else>Registration</span>
    </v-card-title>
    <v-form ref='form' v-model='valid'>
      <login-fields v-if="authStatus==='login'"></login-fields>
      <register-fields v-else></register-fields>
    </v-form>
  </v-card>
</template>

<script>
import { mapState } from 'vuex'
import RegisterFields from '~/components/Auth/RegisterFields'
import LoginFields from '~/components/Auth/LoginFields'

export default {
  name: 'LoginPage',
  components: {LoginFields, RegisterFields},
  layout: 'auth',
  data: () => ({
    valid: false,
  }),
  computed: {
    ...mapState('users', ['authStatus'])
  }
}
</script>

<style scoped>

</style>