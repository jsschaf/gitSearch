<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/logo.jpg')"
          class="mb-0"
          contain
          height="300"
        />
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-1 font-weight-bold mb-3">
          Search for a GitHub Repo
        </h1>

        <p class="subheading font-weight-regular">
          Find popular github repositories on the topic of your choice.
        </p>
      </v-col>
    
    </v-row>
    
  </v-container>
  
</template>

<script>
  export default {
    name: 'homepage',
  }
</script>