<template>
  <v-container>
    <v-form ref='regForm' lazy-validation>
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
        :append-icon="showPasswordEye ? 'mdi-eye' : 'mdi-eye-off'"
        :rules='passwordRules'
        :type="showPasswordEye ? 'text' : 'password'"
        counter
        hint='At least 8 characters'
        label='Password'
        @click:append='showPasswordEye = !showPasswordEye'
      ></v-text-field>
      <v-text-field
        v-model='confirmPassword'
        :append-icon="showConfirmEye ? 'mdi-eye' : 'mdi-eye-off'"
        :rules='confirmPasswordRules.concat(passwordConfirmationRule)'
        :type="showConfirmEye ? 'text' : 'password'"
        counter
        label='Confirm password'
        @click:append='showConfirmEye = !showConfirmEye'
      ></v-text-field>
      <v-row class='d-flex justify-space-between px-3 py-2'>
        <v-btn
          class='pa-0'
          color='primary'
          plain
          @click="CHANGE_AUTH_STATUS('login')"
        >
          HAVE ACCOUNT?
        </v-btn>
        <v-btn
          :loading='registerLoader'
          class='pa-0'
          color='green'
          plain
          @click='register'
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
  name: 'RegisterFields',
  data: () => ({
    showPasswordEye: false,
    showConfirmEye: false,
    registerData: {
      first_name: '',
      last_name: '',
      email: '',
      password: ''
    },
    haveAccount: true,
    registerLoader: false,
    nameRules: [
      v => !!v || 'Name is required'
    ],
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+/.test(v) || 'E-mail must be valid'
    ],
    passwordRules: [
      v => !!v || 'Password is required',
      v => v.length >= 8 || 'Password must be more than 8 characters'
    ],
    confirmPasswordRules: [v => !!v || 'Type confirm password'],
    confirmPassword: ''
  }),
  computed: {
    passwordConfirmationRule() {
      return () => this.registerData.password === this.confirmPassword || 'Password must match'
    }
  },
  methods: {
    ...mapActions('usersStore', ['registration']),
    ...mapMutations('usersStore', ['CHANGE_AUTH_STATUS']),
    async register() {
      if (this.confirmPassword === this.registerData.password && this.$refs.regForm.validate()) {
        this.registerLoader = true
        await this.registration(this.registerData)
        this.registerLoader = false
      }
    }
  }
}
</script>

<style scoped>

</style>