<template>
  <v-container>
    <v-text-field
      v-model='registerData.first_name'
      :rules='nameRules'
      label='First name'
      required
    ></v-text-field>
    <v-text-field
      v-model='registerData.last_name'
      :rules='nameRules'
      label='Last name'
      required
    ></v-text-field>
    <v-text-field
      v-model='registerData.email'
      :rules='emailRules'
      label='E-mail'
      required
    ></v-text-field>
    <v-text-field
      v-model='registerData.password'
      :rules='passwordRules'
      label='Password'
      required
    ></v-text-field>
    <v-text-field
      v-model='confirmPassword'
      :rules='passwordRules'
      label='Confirm password'
      required
    ></v-text-field>
    <v-row class='d-flex justify-space-between px-3 py-2'>
      <v-btn
        class='pa-0'
        color='primary'
        plain
        @click='changeAuthStatus'
      >
        HAVE ACCOUNT?
      </v-btn>
      <v-btn
        class='pa-0'
        color='green'
        plain
        :loading='registerLoader'
        @click='register'
      >
        Submit
      </v-btn>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapMutations } from 'vuex'

export default {
  name: 'RegisterFields',
  data: () => ({
    registerData: {
      first_name: '',
      last_name: '',
      email: '',
      password: ''
    },
    haveAccount: true,
    registerLoader: false,
    nameRules: [
      v => !!v || 'Name is required',
      v => v.length <= 10 || 'Name must be less than 10 characters'
    ],
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+/.test(v) || 'E-mail must be valid'
    ],
    passwordRules: [
      v => !!v || 'Password is required',
      v => v.length <= 10 || 'Password must be less than 10 characters'
    ],
    confirmPassword: ''
  }),
  methods: {
    ...mapActions('users', ['registration']),
    ...mapMutations('users', ['CHANGE_AUTH_STATUS']),
    async register() {
      this.registerLoader = true
      try {
        if (this.registerData.password === this.confirmPassword) {
          await this.registration(this.registerData)
          this.CHANGE_AUTH_STATUS('login')
        }
      } catch {
        this.registerLoader = false
      }
      this.registerLoader = false
    },
    changeAuthStatus() {
      this.CHANGE_AUTH_STATUS('login')
    }
  }
}
</script>

<style scoped>

</style>