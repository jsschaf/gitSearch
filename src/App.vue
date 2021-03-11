
<template>
  <v-app>
    <v-app-bar
      app
      color="red"
      dark
    >
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
      <homepage/>
      <searchtool/>
    </v-main>

  </v-app>
</template>

<script>
import homepage from './components/homepage';
import searchtool from './components/searchtool';

export default {
  name: 'App',

  components: {
    homepage,
    searchtool,
  },

  data: () => ({
    //
  }),
};
</script>
