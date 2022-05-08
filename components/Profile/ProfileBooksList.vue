<template>
  <v-row class='pa-6'>
    <v-card-title>My Books</v-card-title>
    <v-card v-for='book in books'
            :key='book.id'
            class='my-2'
    >
      <v-row>
        <v-col>
          <v-card-title>
            {{ book.title }}
          </v-card-title>
          <v-card-text>
            {{ book.preview }}
          </v-card-text>
        </v-col>
        <v-col class='d-flex flex-column align-center justify-center'>
          <v-avatar
            class='ma-3'
            size='125'
          >
            <v-img src='https://cdn.vuetifyjs.com/images/cards/sunshine.jpg'></v-img>
          </v-avatar>
          <v-rating
            v-model='book.rating'
            color='yellow darken-3'
            background-color='grey darken-1'
            empty-icon='$ratingFull'
            half-increments
            disabled
            hover
          ></v-rating>
        </v-col>
      </v-row>
    </v-card>
  </v-row>
</template>

<script>
export default {
  name: 'ProfileBooksList',
  data: () => ({
    books: [
      {
        id: 1,
        title: 'Test1',
        rating: 1,
        preview: 'The plugins directory contains JavaScript plugins that you want to run before instantiating the root. Every time you need to use `Vue.use()`, you should create a file in `plugins/` and add its path to plugins in `nuxt.config.js More information about the usage of this directory in'
      },
      {
        id: 2,
        title: 'Test2',
        rating: 2,
        preview: 'The plugins directory contains JavaScript plugins that you want to run before instantiating the root. Every time you need to use `Vue.use()`, you should create a file in `plugins/` and add its path to plugins in `nuxt.config.js More information about the usage of this directory in'
      },
      {
        id: 3,
        title: 'Test3',
        rating: 4,
        preview: 'The plugins directory contains JavaScript plugins that you want to run before instantiating the root. Every time you need to use `Vue.use()`, you should create a file in `plugins/` and add its path to plugins in `nuxt.config.js More information about the usage of this directory in'
      },
      {
        id: 4,
        title: 'Test4',
        rating: 3,
        preview: 'The plugins directory contains JavaScript plugins that you want to run before instantiating the root. Every time you need to use `Vue.use()`, you should create a file in `plugins/` and add its path to plugins in `nuxt.config.js More information about the usage of this directory in'
      }
    ]
  })
}
</script>

<style scoped>

</style>