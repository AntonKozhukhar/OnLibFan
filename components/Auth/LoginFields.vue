<template>
  <v-container>
  <v-text-field
    v-model='loginData.email'
    required
    :rules='emailRules'
    label='Email'
  >
  </v-text-field>
  <v-text-field
    v-model='loginData.password'
    required
    :rules='passwordRules'
    label='Password'
  >
  </v-text-field>
  <v-row class='justify-space-between px-3 py-2'>
    <v-btn
      class='pa-0'
      color='red'
      plain
      @click='changeAuthStatus'
    >
      No account?
    </v-btn>
    <v-btn
      class='pa-0'
      color='green'
      plain
      :loading='loginLoader'
      @click='logIn'
    >
      Submit
    </v-btn>
  </v-row>
  </v-container>
</template>

<script>
import {mapActions, mapMutations} from 'vuex'

export default {
  name: 'LoginFields',
  data: () => ({
    loginLoader: false,
    loginData: {
      email: '',
      password: ''
    },
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+/.test(v) || 'E-mail must be valid'
    ],
    passwordRules: [
      v => !!v || 'Password is required',
      v => v.length <= 10 || 'Password must be less than 10 characters'
    ],
  }),
  methods: {
    ...mapActions('users', ['login']),
    ...mapMutations('users',['CHANGE_AUTH_STATUS']),
    async logIn() {
      this.loginLoader = true
      try {
        await this.login(this.loginData)
        await this.$router.push({path: '/'})
      } catch { this.loginLoader = false }
      this.loginLoader = false
    },
    changeAuthStatus() {
      this.CHANGE_AUTH_STATUS('registration')
    }
  },
}
</script>

<style scoped>

</style>