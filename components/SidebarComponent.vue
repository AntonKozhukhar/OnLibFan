<template>
  <v-navigation-drawer
    v-model='showSideBar'
    app
    fixed
  >
    <v-list>
      <v-list-item
        v-for='(item, i) in items'
        :key='i'
        :to='item.to'
        exact
        nuxt
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
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
  name: 'SidebarComponent',
  props: {
    items: {
      type: Array,
      default: Array
    }
  },
  data: () => ({
    showSideBar: false
  }),
  computed: mapState(['sidebarStatus']),
  watch: {
    sidebarStatus() {
      this.showSideBar = this.sidebarStatus
    },
    showSideBar(newVal) {
      this.SET_SIDEBAR_STATUS(newVal)
    }
  },
  methods: mapMutations(['SET_SIDEBAR_STATUS'])
}
</script>