<template>
  <v-navigation-drawer
    v-model='showSideBar'
    app
    fixed
    touchless
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
</template>

<script>
import { mapState, mapMutations, mapGetters } from 'vuex';
export default {
  name: 'SideBarComponent',
  props: {
    'items': {
      type: Array,
      default: Array
    }
  },
  data: () => ({
    showSideBar: true
  }),
  computed: {
    ...mapState(['sidebarStatus']),
    ...mapGetters(['getSidebarStatus'])
  },
  watch: {
    sidebarStatus() {
      this.showSideBar = this.sidebarStatus
    },
    showSideBar(newVal) {
      this.SET_SIDEBAR_STATUS(newVal)
    }
  },
  methods: {
    ...mapMutations(['SET_SIDEBAR_STATUS'])
  }
}
</script>

<style lang="scss">

</style>