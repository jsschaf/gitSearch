<template>
    <v-layout child-flex>
    <v-container v-if="loading">
        <div class="text-xs-center">
            <v-progress-circular
                indeterminate
                :size="150"
                :width="8"
                color="blue">
            </v-progress-circular>
        </div>
    </v-container>

    <v-data-table light calculate-widths v-else
        :headers="headers"
        :items="repos"
        :items-per-page="10"
        class="elevation-1"
        item-key="name"
        ></v-data-table>
    </v-layout>
</template>


<script>
import axios from 'axios'
export default {
    data () {
        return {
            repos: [],
            loading: true,
            headers: [
            {
                text: 'Repo Name',
                align: 'start',
                value: 'name',
            },
            {
                text: 'URL',
                value: 'url'
            },
            ]
        }
    },
    mounted () {
    axios
      .get('https://api.github.com/search/repositories?q=topic:ruby+topic:rails')
      .then(response => {
          this.repos = response.data.items
          this.loading = false
          console.log(response)
      })
      .catch(error => {
        console.log(error)
      })
    }
}
</script>
<style scoped>
  .v-progress-circular {
    margin: 1rem
  }
</style>
