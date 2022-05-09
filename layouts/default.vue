<template>
  <v-app dark>
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
      fixed app
    >
      <v-app-bar-nav-icon @click.stop='drawer = !drawer' />
      <v-toolbar-title v-text='title' />
      <v-spacer />
      <v-btn
        to='/login'
        class='ma-1'
        color='white'
        plain
        v-if='!loggedUser'
      >
        Login
        <v-icon>
          mdi-login
        </v-icon>
      </v-btn>
      <v-menu
        bottom
        min-width='200px'
        rounded
        v-else
        offset-y
      >
        <template v-slot:activator='{ on }'>
          <v-btn
            icon
            x-large
            v-on='on'
          >
            <v-avatar
              color='indigo'
              size='48'
            >
              <span class='white--text text-h5'>{{ user.id }}</span>
            </v-avatar>
          </v-btn>
        </template>
        <v-card>
          <v-list-item-content class='justify-center'>
            <div class='mx-auto text-center'>
              <v-avatar
                color='indigo'
              >
                <span class='white--text text-h5'>{{ user.id }}</span>
              </v-avatar>
              <h3>{{ user.name }}</h3>
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
    <v-footer :absolute='!fixed' app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import {mapActions, mapGetters, mapState} from 'vuex'

export default {
  name: 'DefaultLayout',
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
      loggedUser: false
    }
  },
  computed: {
    ...mapGetters('users', ['checkUserToken']),
    ...mapState('users', ['user', 'userToken'])
  },
  watch: {
    checkUserToken() {
      this.loggedUser = this.checkUserToken
    }
  },
  created() {
    this.loggedUser = this.checkUserToken
  },
  methods: {
    ...mapActions('users', ['logout']),
    async logOut() {
      await this.logout(this.userToken)
    }
  }
}
</script>
