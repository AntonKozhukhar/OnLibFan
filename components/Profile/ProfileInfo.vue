<template>
  <v-row class='d-flex flex-column align-center pa-6'>
    <v-card class='d-flex flex-column pa-3' width='500'>
      <v-card-title class='mx-auto'>
        {{ userFirstName }} {{ userLastName }}
      </v-card-title>
      <v-avatar
        class='ma-auto'
        color='indigo'
        size='120'
      >
        <v-img v-if='profileFields.img' :src='url'></v-img>
        <v-icon v-else dark>
          mdi-account-circle
        </v-icon>
      </v-avatar>
      <v-form ref='profileForm'>
        <v-file-input
          v-model='profileFields.img'
          accept='image/png, image/jpeg, image/bmp'
          class='d-flex justify-center'
          hide-input
          label='Avatar'
          placeholder='Pick an avatar'
          prepend-icon='mdi-camera'
        >
        </v-file-input>
        <v-text-field v-model='profileFields.phone' full-width label='Phone'></v-text-field>
        <v-text-field v-model='profileFields.city' label='City'></v-text-field>
        <v-text-field v-model='profileFields.country' label='Country'></v-text-field>
        <v-text-field v-model='profileFields.first_name' label='First Name'></v-text-field>
        <v-text-field v-model='profileFields.last_name' label='Last Name'></v-text-field>
        <v-text-field v-model='profileFields.middle_name' label='Middle Name'></v-text-field>
        <v-text-field v-model='profileFields.zip' label='Zip'></v-text-field>
        <v-text-field v-model='profileFields.email' label='Email'></v-text-field>
        <v-text-field v-model='profileFields.birth_day' label='Birth Day'></v-text-field>
      </v-form>
      <v-btn color='green' plain @click='saveChanges($event, profileFields)'>
        Save Changes
      </v-btn>
    </v-card>
  </v-row>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'ProfileInfo',
  data: () => ({
    userFirstName: '',
    userRole: '',
    initials: '',
    userLastName: '',
    file: null,
    content: null,
    profileFields: {
      img: null,
      phone: '',
      city: '',
      country: '',
      first_name: '',
      last_name: '',
      middle_name: '',
      zip: '',
      email: '',
      birth_day: ''
    }
  }),
  computed: {
    url() {
      if (!this.profileFields.img) return
      return URL.createObjectURL(this.profileFields.img)
    }
  },
  created() {
    this.userFirstName = this.$auth.user.first_name
    this.userLastName = this.$auth.user.last_name
    this.userRole = this.$auth.user.profile
  },
  methods: {
    ...mapMutations('usersStore', ['SAVE_USER_AVATAR']),
    saveChanges(e, profile) {
      console.log(profile)
      // this.SAVE_USER_AVATAR(this.url)
    }
  }
}
</script>

<style scoped>
.v-application--is-ltr .v-input__prepend-outer {
  margin-right: 0 !important;
}
</style>