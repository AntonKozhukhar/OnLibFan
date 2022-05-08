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
    <v-card-title>
      {{ userName }}
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
  computed: {
    ...mapState('users',['user'])
  },
  data: () => ({
    userName: '',
    userRole: '',
  }),
  created() {
    this.userName = this.user.name
    this.userRole = this.user.profile
  }
}
</script>

<style scoped>

</style>