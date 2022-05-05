<template>
  <v-card
    width='400'
  >
    <v-card-title class='justify-center pb-0'>
      <span v-if='haveAccount'>Login</span>
      <span v-else>Registered</span>
    </v-card-title>
    <v-form v-model='valid'>
      <v-container v-if='haveAccount'>
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
            @click='haveAccount = false'
          >
            No account?
          </v-btn>
          <v-btn
            class='pa-0'
            color='green'
            plain
            :loading='btnLoader'
            @click='logIn'
          >
            Submit
          </v-btn>
        </v-row>
      </v-container>
      <v-container v-else>
        <v-text-field
          v-model='registerData.firstname'
          :rules='nameRules'
          label='First name'
          required
        ></v-text-field>
        <v-text-field
          v-model='registerData.lastname'
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
        <v-btn
          class='pa-0'
          color='green'
          plain
          :loading='btnLoader'
          @click='register'
        >
          Submit
        </v-btn>
      </v-container>
    </v-form>
  </v-card>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'LoginPage',
  layout: 'auth',
  data: () => ({
    valid: false,
    btnLoader: false,
    loginData: {
      email: '',
      password: ''
    },
    registerData: {
      firstname: '',
      lastname: '',
      email: '',
      password: ''
    },
    confirmPassword: '',
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
    haveAccount: true
  }),
  methods: {
    ...mapActions({
      registration: 'users/registration',
      login: 'users/login',
    }),
    async register() {
      this.btnLoader = true
      try {
        if (this.registerData.password === this.confirmPassword) {
          await this.registration(this.registerData)
        }
      } catch (e) {
        this.btnLoader = false
      }
      this.btnLoader = false
    },
    async logIn() {
      this.btnLoader = true
      try {
        await this.login(this.registerData)
      } catch (e) {
        this.btnLoader = false
      }
      this.btnLoader = false
    }
  }
}
</script>

<style scoped>

</style>