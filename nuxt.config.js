import colors from 'vuetify/es5/util/colors'
import helpers from './helpers'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  devtools: true,
  head: {
    titleTemplate: 'OneLibFans',
    title: 'OneLibFans',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],
  
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/notifier.js',
    '~/plugins/persistedState.client.js'
  ],
  
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  
  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify'
  ],
  
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios'
  ],
  
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: 'http://127.0.0.1:8000/api/',
    headers: helpers.setHeaders()
  },
  
  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      themes: {
        light: {
          primary: colors.purple,
          secondary: colors.grey.darken1,
          accent: colors.shades.black,
          error: colors.red.accent3
        }
      }
    }
  },
  
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
}
