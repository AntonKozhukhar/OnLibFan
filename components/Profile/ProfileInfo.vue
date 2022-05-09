<template>
  <v-row class='d-flex flex-column align-center pa-6'>
    <v-avatar
      color='indigo'
      size='120'
    >
      <v-icon dark>
        mdi-account-circle
      </v-icon>
    </v-avatar>
    <v-btn
      class='mt-3'
      plain
      @click='changeAvatar'
    >
      Change avatar
    </v-btn>
    <v-card-title>
      {{ userFirstName }} {{ userLastName }}
    </v-card-title>
    <v-card-text>
      Role: {{ userRole }}
    </v-card-text>
  </v-row>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: 'ProfileInfo',
  data: () => ({
    userFirstName: '',
    userRole: '',
    initials: '',
    userLastName: ''
  }),
  computed: {
    ...mapState('users',['user'])
  },
  created() {
    this.userFirstName = this.user.first_name
    this.userLastName = this.user.last_name
    this.userRole = this.user.profile
  },
  methods: {
    changeAvatar() {

    }
  }
}
</script>

<style scoped>

</style>