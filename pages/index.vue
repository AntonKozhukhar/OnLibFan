<template>
  <v-card class='d-flex flex-wrap pa-3 justify-space-between'>
    <v-card
      v-for='(book, index) in books'
      :id='index'
      :key='book.id'
      max-width='344'
      class='mx-auto mb-4'
    >
      <v-img
        src='https://cdn.vuetifyjs.com/images/cards/sunshine.jpg'
        height='200px'
      ></v-img>

      <v-rating
        v-model='book.rating'
        color='yellow darken-3'
        background-color='grey darken-1'
        empty-icon='$ratingFull'
        half-increments
        hover
      ></v-rating>

      <v-card-title>
        {{ book.title }}
      </v-card-title>

      <v-card-subtitle>
        1,000 miles of wonder
      </v-card-subtitle>

      <v-spacer></v-spacer>

      <v-card-text>
        {{ book.preview }}
      </v-card-text>
    </v-card>
  </v-card>
</template>

<script>
export default {
  name: 'IndexPage',
  data: () => ({
    rating: 3.5,
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
    ],
    show: false
  })
}
</script>
