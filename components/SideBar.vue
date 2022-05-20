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
export default {
  name: 'SideBarComponent',
  props: {
    'items': {
      type: Array,
      default: Array
    },
    'drawer': {
      type: Boolean
    }
  },
  data: () => ({
    showSideBar: true
  }),
  watch: {
    'drawer'() {
      this.showSideBar = this.drawer
    }
  },
  created() {
    this.showSideBar = this.drawer
  }
}
</script>

<style lang="scss">

</style>