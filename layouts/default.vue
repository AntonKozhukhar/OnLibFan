<template>
  <v-app dark>
    <v-system-bar
      height="30"
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
      <v-menu v-else offset-x>
        <template #activator='{ on, attrs }'>
          <v-btn
            plain
            color='indigo lighten-5'
            v-bind='attrs'
            v-on='on'
          >
            {{ user.name }}
            <v-icon dark>
               mdi-account
            </v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for='(item, index) in profileMenu'
            :key='index'
            class='pa-0'
          >
            <v-btn
              :to='item.to'
              color='black'
              plain
            >
              <v-icon>
                {{ item.icon }}
              </v-icon>
              {{ item.title }}
            </v-btn>
          </v-list-item>
          <v-spacer></v-spacer>
          <v-btn
            color='black'
            class='py-5'
            plain
            @click='logOut'
          >
              <v-icon>
                mdi-logout-variant
              </v-icon>
              LogOut
            </v-btn>
        </v-list>
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
      profileMenu: [
        {
          to: '/profile',
          title: 'Profile',
          icon: 'mdi-account'
        },
        {
          to: '/books',
          title: 'Books',
          icon: 'mdi-book-open-blank-variant'
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
    ...mapGetters('users', ['chekUserToken']),
    ...mapState('users', ['user', 'userToken'])
  },
  watch: {
    chekUserToken() {
      this.loggedUser = this.chekUserToken
    }
  },
  created() {
    this.loggedUser = this.chekUserToken
  },
  methods: {
    ...mapActions('users', ['logout']),
    async logOut() {
      await this.logout(this.userToken)
    }
  }
}
</script>
