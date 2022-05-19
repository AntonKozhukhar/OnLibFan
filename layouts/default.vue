<template>
  <v-app dark>
    <message-snackbar />
    <v-system-bar height='30'></v-system-bar>
    <v-navigation-drawer
      v-model='drawer'
      :clipped='clipped'
      :mini-variant='miniVariant'
      app
      fixed
    >
      <v-list>
        <v-list-item
          v-for='(item, i) in items'
          :key='i'
          :to='item.to'
          exact
          router
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
      :clipped-left='clipped'
      app
      fixed
      src='https://about.proquest.com/globalassets/proquest/media/images/decrotive/oldbooks.jpg'
    >
      <v-app-bar-nav-icon @click.stop='drawer = !drawer' />
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
    <v-main>
      <v-breadcrumbs :items='crumbs'>
        <template #divider>
          <v-icon>mdi-chevron-right</v-icon>
        </template>
        <template #item={item}>
          <v-breadcrumbs-item
            :disabled='item.disabled'
            :to='item.to'
            nuxt
          >
            {{ item.text }}
          </v-breadcrumbs-item>
        </template>
      </v-breadcrumbs>
      <v-container>
        <Nuxt />
      </v-container>
      {{ crumbs }}
    </v-main>
    <v-footer :absolute='!fixed' app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import { mapActions } from 'vuex'
import MessageSnackbar from '~/components/MessageSnackbar'

export default {
  name: 'DefaultLayout',
  components: { MessageSnackbar },
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-home',
          title: 'Home',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Genres',
          to: '/genres'
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
    crumbs() {
      if (this.$route.fullPath.length <= 1) return
      const fullPath = this.$route.fullPath
      const params = fullPath.substring(1)
        .split('/')
      const crumbs = [{
        text: 'Home',
        disabled: false,
        to: '/'
      }]
      console.log(this.$route.path)
      params.forEach(el => {
        crumbs.push({
          text: el[0].toUpperCase() + el.slice(1),
          disabled: false,
          to: `/${el}`
        })
      })
      crumbs[crumbs.length - 1].disabled = true
      return crumbs
    }
  },
  methods: {
    ...mapActions('usersStore', ['logout']),
    async logOut() {
      await this.logout()
      await this.$router.push({ path: '/' })
    }
  }

}
</script>
