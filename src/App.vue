<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-tabs background-color="red darken-4" centered dark>
        <v-tab>НОВОСТИ</v-tab>
        <v-tab>ОПРОСЫ</v-tab>
        <v-tab>МАТЕРИАЛЫ</v-tab>
        <v-tab>СЦЕНАРИЙ</v-tab>
        <v-tab>НАЗНАЧЕНИЕ</v-tab>
      </v-tabs>
    </v-app-bar>

    <v-main>
      <v-container fluid class="grey lighten-5">
        <tabs />
        <test />
        <quiz/>
      </v-container>      
    </v-main>
  </v-app>
</template>

<script>
import Tabs from './components/Tabs.vue'
import Test from './components/Test.vue'
import Quiz from './components/Quiz.vue'

export default {
  name: 'App',
  components: {
    Tabs,
    Test,
    Quiz,
  },

};
</script>
