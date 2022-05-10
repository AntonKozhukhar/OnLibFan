<template>
  <v-row class='d-flex flex-column pa-6'>
    <v-card class='d-flex flex-column align-center'>
      <v-avatar
        color='indigo'
        size='120'
      >
        <v-img v-if='user.avatar' :src='user.avatar'></v-img>
        <v-img v-else-if='file' :src='url'></v-img>
        <v-icon v-else dark>
          mdi-account-circle
        </v-icon>
      </v-avatar>
      <v-row>
      <v-file-input
        accept='image/png, image/jpeg, image/bmp'
        placeholder='Pick an avatar'
        prepend-icon='mdi-camera'
        label='Avatar'
        hide-input
        class='d-flex justify-center'
        v-model='file'
      >
      </v-file-input>
      </v-row>
      <v-card-title>
        {{ userFirstName }} {{ userLastName }}
      </v-card-title>
      <v-card-text>
        Role: {{ userRole }}
      </v-card-text>
      <v-btn plain color='green' @click='saveChanges'>
        Save Changes
      </v-btn>
    </v-card>
  </v-row>
</template>

<script>
import {mapMutations, mapState} from 'vuex'

export default {
  name: 'ProfileInfo',
  data: () => ({
    userFirstName: '',
    userRole: '',
    initials: '',
    userLastName: '',
    file: null,
    content: null
  }),
  computed: {
    ...mapState('users', ['user']),
    url() {
      if (!this.file) return
      return URL.createObjectURL(this.file)
    }
  },
  created() {
    this.userFirstName = this.user.first_name
    this.userLastName = this.user.last_name
    this.userRole = this.user.profile
  },
  methods: {
    ...mapMutations('users',['SAVE_USER_AVATAR']),
    saveChanges() {
      this.SAVE_USER_AVATAR(this.url)
    }
  }
}
</script>

<style scoped>
.v-application--is-ltr .v-input__prepend-outer {
  margin-right: 0 !important;
}
</style>