<template>
  <v-card
    width='400'
  >
    <v-card-title class='justify-center pb-0'>Login</v-card-title>
    <v-form v-model='valid'>
      <v-container>
        <v-text-field
          v-model='loginData.firstname'
          :rules='nameRules'
          label='First name'
          required
        ></v-text-field>
        <v-text-field
          v-model='loginData.lastname'
          :rules='nameRules'
          label='Last name'
          required
        ></v-text-field>
        <v-text-field
          v-model='loginData.email'
          :rules='emailRules'
          label='E-mail'
          required
        ></v-text-field>
        <v-text-field
          v-model='loginData.password'
          :rules='passwordRules'
          label='Password'
          required
        ></v-text-field>
        <v-text-field
          v-model='loginData.confirmPassword'
          :rules='passwordRules'
          label='Confirm password'
          required
        ></v-text-field>
        <v-btn class='mt-4'>Submit</v-btn>
      </v-container>
    </v-form>
  </v-card>
</template>

<script>
export default {
  name: 'LoginPage',
  layout: 'auth',
  data: () => ({
    valid: false,
    loginData: {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      confirmPassword: ''
    },
    nameRules: [
      v => !!v || 'Name is required',
      v => v.length <= 10 || 'Name must be less than 10 characters',
    ],
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+/.test(v) || 'E-mail must be valid',
    ],
    passwordRules: [
      v => !!v || 'Password is required',
      v => v.length <= 10 || 'Password must be less than 10 characters',
    ]
  }),
}
</script>

<style scoped>

</style>