<template>
  <v-row class='d-flex flex-column align-center pa-6'>
    <v-card class='d-flex flex-column pa-3' width='500'>
      <v-card-title class='mx-auto'>
        {{ $auth.user.first_name }} {{ $auth.user.last_name }}
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
        <v-text-field v-model='profileFields.phone' :value="$auth.user.phone || ''" full-width label='Phone'></v-text-field>
        <v-text-field v-model='profileFields.city' :value="$auth.user.city || ''" label='City'></v-text-field>
        <v-text-field v-model='profileFields.country' :value="$auth.user.country || ''" label='Country'></v-text-field>
        <v-text-field v-model='profileFields.first_name' :value="$auth.user.first_name || ''" label='First Name'></v-text-field>
        <v-text-field v-model='profileFields.last_name' :value="$auth.user.last_name || ''" label='Last Name'></v-text-field>
        <v-text-field v-model='profileFields.middle_name' :value="$auth.user.middle_name || ''" label='Middle Name'></v-text-field>
        <v-text-field v-model='profileFields.zip' :value="$auth.user.zip || ''" label='Zip'></v-text-field>
        <v-text-field v-model='profileFields.email' :value="$auth.user.email || ''" label='Email'></v-text-field>
        <v-text-field v-model='profileFields.birth_day' :value="$auth.user.birth_day || ''" label='Birth Day'></v-text-field>
      </v-form>
      <v-btn color='green' plain :loading='profileLoader' @click='saveChanges($event, profileFields)'>
        Save Changes
      </v-btn>
    </v-card>
  </v-row>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'ProfileInfo',
  data: () => ({
    initials: '',
    profileLoader: false,
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
  watch: {
    '$auth.user': {
      handler() {
        if (this.initials) {
          this.initials = this.$auth.user.first_name.split('')[0] + this.$auth.user.last_name.split('')[0]
        }
      }
    },
    deep: true,
  },
  mounted() {
    this.profileFields = {
      img: this.$auth.user.img || null,
      phone: this.$auth.user.phone || '',
      city: this.$auth.user.city || '',
      country: this.$auth.user.country || '',
      first_name: this.$auth.user.first_name || '',
      last_name: this.$auth.user.last_name || '',
      middle_name: this.$auth.user.middle_name || '',
      zip: this.$auth.user.zip || '',
      email: this.$auth.user.email || '',
      birth_day: this.$auth.user.birth_day || ''
    }
  },
  methods: {
    ...mapActions('usersStore', ['updateProfile']),
     async saveChanges(e, profile) {
      this.profileLoader = true
      await this.updateProfile(profile)
      this.profileLoader = false
    }
  }
}
</script>

<style scoped>
.v-application--is-ltr .v-input__prepend-outer {
  margin-right: 0 !important;
}
</style>