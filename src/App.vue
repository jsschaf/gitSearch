
<template>
  <v-app>
    <v-app-bar
      app
      color="red"
      dark
    >
     <router-view></router-view>
      <div class="d-flex align-center">
        <v-img
          alt="Logo"
          class="shrink mr-2"
          contain
          :src="require('./assets/git.png')"
          transition="scale-transition"
          width="40"
        />

      </div>

      <v-spacer></v-spacer>

      Jacqui Schafer

    </v-app-bar>

    <v-main>
      <SearchGit/>
    </v-main>

   


  </v-app>
</template>



<script>
import SearchGit from './components/SearchGit';

export default {
  name: 'App',

  components: {
    SearchGit,
  },

  data: () => ({
    //
  }),
};
</script>
