<template>
  <v-app dark>
    <message-snackbar />
    <v-system-bar height='30'></v-system-bar>
    <SideBar :items='items' />
    <AppBar />
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
    </v-main>
    <v-footer absolute app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      drawer: false,
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
      ]
    }
  },
}
</script>

<style lang="scss">
  ::-webkit-scrollbar {
  width: 4px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #c9dfe0;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #006e74;
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #001415;
}
</style>
