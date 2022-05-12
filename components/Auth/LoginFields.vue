<template>
  <v-container>
    <v-form ref='loginForm' lazy-validation>
      <v-text-field
        v-model='loginData.email'
        :rules='emailRules'
        label='Email'
        required
      >
      </v-text-field>
      <v-text-field
        v-model='loginData.password'
        :append-icon="showPasswordEye ? 'mdi-eye' : 'mdi-eye-off'"
        :rules='passwordRules'
        :type="showPasswordEye ? 'text' : 'password'"
        counter
        hint='At least 8 characters'
        label='Password'
        @click:append='showPasswordEye = !showPasswordEye'
      ></v-text-field>
      <v-row class='justify-space-between px-3 py-2'>
        <v-btn
          class='pa-0'
          color='red'
          plain
          @click="CHANGE_AUTH_STATUS('registration')"
        >
          No account?
        </v-btn>
        <v-btn
          :loading='loginLoader'
          class='pa-0'
          color='green'
          plain
          @click='logIn'
        >
          Submit
        </v-btn>
      </v-row>
    </v-form>
  </v-container>
</template>

<script>
import { mapActions, mapMutations } from 'vuex'

export default {
  name: 'LoginFields',
  data: () => ({
    showPasswordEye: false,
    loginLoader: false,
    loginData: {
      email: 'anton.kozhukhar@gmail.com',
      password: '11111111'
    },
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+/.test(v) || 'E-mail must be valid'
    ],
    passwordRules: [
      v => !!v || 'Password is required',
      v => v.length >= 8 || 'Password must be more than 8 characters'
    ]
  }),
  methods: {
    ...mapActions('users', ['login']),
    ...mapMutations('users', ['CHANGE_AUTH_STATUS']),
    async logIn() {
      if (this.$refs.loginForm.validate()) {
        this.loginLoader = true
        await this.login(this.loginData)
        this.loginLoader = false
      }
    }
  }
}
</script>

<style scoped>

</style>