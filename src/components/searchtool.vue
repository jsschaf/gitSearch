<template>

    <v-container>
    
        <v-text-field
            v-model="input"
            label="Search"
            @keypress.enter="search">

          <template v-slot:append>

          <v-btn 
            type="submit" 
            color="blue"
            depressed
            tile
            class="ma-0"
            @click="search">
            Search
            </v-btn>
          </template>
        </v-text-field>
    
    <v-container v-if="api_url === ''">
        
    </v-container>

    <v-container v-else-if="loading">
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
    </v-container>
</template>


<script>
import axios from 'axios'
export default {
    data () {
        return {
            api_url: '',
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
                value: 'html_url'
            },
            ]
        }
    },
    mounted () {
    axios
      .get(this.api_url)
      .then(response => {
          this.repos = response.data.items
          this.loading = false
          console.log(response)
      })
      .catch(error => {
        console.log(error)
      })
    },
    methods: {
    search(){
			console.log(this.input)
            var string = 'https://api.github.com/search/repositories?q='
            var query = this.input.split(" ")
            var i = 0
            for (i = 0; i < query.length; i++) {
                if (i > 0){
                    string += "+";
                }
                string += "topic:" + query[i];
            }

            this.api_url = string
            console.log(string)
            axios
                .get(this.api_url)
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
}
</script>
<style scoped>
  .v-progress-circular {
    margin: 1rem
  }
</style>
