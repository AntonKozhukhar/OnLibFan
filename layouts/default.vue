<template>
  <v-app dark>
    <message-snackbar />
    <v-system-bar
      height='30'
    ></v-system-bar>
    <v-navigation-drawer
      v-model='drawer'
      :mini-variant='miniVariant'
      :clipped='clipped'
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for='(item, i) in items'
          :key='i'
          :to='item.to'
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text='item.title' />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      src='https://about.proquest.com/globalassets/proquest/media/images/decrotive/oldbooks.jpg'
      :clipped-left='clipped'
      fixed
      app
    >
      <v-app-bar-nav-icon @click.stop='drawer = !drawer' />
      <v-btn plain color='white' to='/'>
        {{ title }}
      </v-btn>
<!--      <v-title to='/'>-->
<!--        {{ title }}-->
<!--      </v-title>-->
<!--      <v-toolbar-title to='/' v-text='title' />-->
      <v-spacer />
      <v-btn
        v-if='!checkUserToken'
        to='/login'
        class='ma-1'
        color='white'
        plain
      >
        Login
        <v-icon>
          mdi-login
        </v-icon>
      </v-btn>
      <v-menu
        v-else
        bottom
        min-width='200px'
        rounded
        offset-y
      >
        <template #activator={on}>
          <v-btn
            icon
            x-large
            v-on='on'
          >
            <v-avatar
              color='indigo'
              size='48'
            >
              <v-img v-if='user.avatar' :src='user.avatar'></v-img>
              <span v-else class='white--text text-h5'>{{ initials }}</span>
            </v-avatar>
          </v-btn>
        </template>
        <v-card>
          <v-list-item-content class='justify-center'>
            <div class='mx-auto text-center'>
              <v-avatar
                color='indigo'
              >
               <v-img v-if='user.avatar' :src='user.avatar'></v-img>
                <span v-else class='white--text text-h5'>{{ initials }}</span>
              </v-avatar>
              <h3>{{ initials }}</h3>
              <p class='text-caption mt-1'>
                {{ user.profile }}
              </p>
              <v-divider class='my-3'></v-divider>
              <v-btn
                depressed
                rounded
                text
                to='/profile'
              >
                Profile
              </v-btn>
              <v-divider class='my-3'></v-divider>
              <v-btn
                depressed
                rounded
                text
                @click='logOut'
              >
                Logout
              </v-btn>
            </div>
          </v-list-item-content>
        </v-card>
      </v-menu>
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer
      :absolute='!fixed'
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import {mapActions, mapGetters, mapState} from 'vuex'
import MessageSnackbar from '~/components/MessageSnackbar'

export default {
  name: 'DefaultLayout',
  components: {MessageSnackbar},
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'OneLibFans',
      initials: ''
    }
  },
  computed: {
    ...mapGetters('users', ['checkUserToken']),
    ...mapState('users', ['user', 'userToken'])
  },
  methods: {
    ...mapActions('users', ['logout']),
    async logOut() {
      await this.logout()
      await this.$router.push({path: '/'})
    }
  },
  created() {
    this.initials = this.user.first_name.slice(0, 1) + this.user.last_name.slice(0, 1)
  }
}
</script>
