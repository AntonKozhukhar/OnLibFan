<template>
  <v-app-bar
    app
    fixed
    src='https://about.proquest.com/globalassets/proquest/media/images/decrotive/oldbooks.jpg'
  >
    <v-app-bar-nav-icon @click.stop='toggleSideBar' />
    <v-btn color='white' plain to='/'>
      {{ title }}
    </v-btn>
    <v-spacer />
    <v-btn
      v-if='!$auth.loggedIn'
      class='ma-1'
      color='white'
      plain
      to='/login'
    >
      Login
      <v-icon> mdi-login</v-icon>
    </v-btn>
    <v-menu v-else bottom min-width='200px' offset-y rounded>
      <template #activator='{ on }'>
        <v-btn icon x-large v-on='on'>
          <v-avatar color='indigo' size='48'>
            <v-img v-if='$auth.user.avatar' :src='$auth.user.avatar'></v-img>
            <span v-else class='white--text text-h5'>{{ initials }}</span>
          </v-avatar>
        </v-btn>
      </template>
      <v-card>
        <v-list-item-content class='justify-center'>
          <div class='mx-auto text-center'>
            <v-avatar color='indigo'>
              <v-img v-if='$auth.user.avatar' :src='$auth.user.avatar'></v-img>
              <span v-else class='white--text text-h5'>{{ initials }}</span>
            </v-avatar>
            <h3>{{ initials }}</h3>
            <p class='text-caption mt-1'>
              {{ $auth.user.profile }}
            </p>
            <v-divider class='my-3'></v-divider>
            <v-btn depressed rounded text to='/profile'> Profile</v-btn>
            <v-divider class='my-3'></v-divider>
            <v-btn depressed rounded text @click='logOut'> Logout</v-btn>
          </div>
        </v-list-item-content>
      </v-card>
    </v-menu>
  </v-app-bar>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'AppBarComponent',
  data: () => ({
    title: 'OneLibFans',
    initials: '',
    drawer: false,
  }),
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
    this.initials = this.$auth.user.first_name.split('')[0] + this.$auth.user.last_name.split('')[0]
  },
  methods:{
    ...mapActions('usersStore', ['logout']),
    async logOut() {
      await this.logout()
      await this.$router.push({ path: '/' })
    },
    toggleSideBar() {
      this.drawer = !this.drawer
      console.log(this.drawer)
      this.$emit('drawer',!this.drawer)
    }
  }
}
</script>