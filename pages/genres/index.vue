<template>
  <div>
    <h2 class='text-h6 mb-2'>Choose genres</h2>
    <v-chip-group
      v-model='selectedGenres'
      column
      multiple
      @change='test'
    >
      <v-chip
        v-for='(genre, i) in genres'
        :key='i'
        :value='i'
        filter
        outlined
        nuxt
        :to='`genres/${genre}`'
      >
        {{ genre }}
      </v-chip>
    </v-chip-group>
  </div>
</template>
<script>

export default {
  name: 'GenresPage',
  data: () => ({
    genres: [
      'All',
      'TEST',
      'Биографии',
      'Детективы',
      'Экономика и Бизнес',
      'Эротика',
      'Нон-Фикшен',
      'Фантастика и Фэнтези',
      'История',
      'Классика',
      'Поэзия и драматургия',
      'Рассказы',
      'Психология',
      'Художественная',
      'Языки',
      'Триллеры',
      'Для подростков',
      'Любовные романы',
      'Философия',
      'религия',
      'эзотерика'
    ],
    selectedGenres: [0]
  }),
  async fetch({ store }) {
    await store.dispatch('genresStore/getGenres')
  },
  methods: {
    test() {
      console.log(this.selectedGenres)
    }
  }
}
</script>
