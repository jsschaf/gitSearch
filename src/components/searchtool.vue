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
        
        <v-row
            justify="space-around">
        <v-checkbox
                v-model="inTitle"
                :label="`In Title`"
        ></v-checkbox>
        <v-checkbox
                v-model="inDesc"
                :label="`In Description`"
        ></v-checkbox>
        <v-checkbox
                v-model="inRead"
                :label="`In ReadMe`"
        ></v-checkbox>

        </v-row>

        Note: If no checkboxes are selected, the repository name and description are searched.
    
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
            :items-per-page="20"
            class="elevation-1"
            item-key="id"
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
            input: '',
            inTitle: 'true',
            inDesc: 'true',
            inRead: 'true',
            headers: [
            {
                text: 'Repo Name',
                align: 'start',
                value: 'name',
            },
            {
                text: 'Owner Name',
                value: 'owner.login',
            },
            {
                text: 'URL',
                value: 'html_url'
            },
            {
                text: 'Description (100 chars)',
                value: 'description'
            },
            {
                text: 'Language',
                value: 'language'
            },
            {
                text: 'Watcher Count',
                value: 'watchers_count'
            },
            {
                text: 'Fork Count',
                value: 'forks_count'
            },
            
            ]
        }
    },
    methods: {
    search(){
            this.loading=true;
            var string = 'https://api.github.com/search/repositories?q='
            var query = this.input.split(" ")
            var i = 0
            for (i = 0; i < query.length; i++) {
                if (i > 0){
                    string += "+";
                }
                string += query[i];
            }

            if (this.inTitle) string += "+in:name"
            if (this.inDesc) string += "+in:description"
            if (this.inRead) string += "+in:readme"

            this.api_url = string
            if (!this.input){
                this.repos = [{}]
                this.loading=false
            }
           // all checkboxes true
           else{
                axios
                    .get(this.api_url)
                    .then(response => {
                        this.repos = response.data.items
                        var i = 0
                        for (i=0; i < this.repos.length; i++){
                            this.repos[i].id = i
                            if (this.repos[i].description && this.repos[i].description.length > 100){
                                this.repos[i].description = this.repos[i].description.substr(0,100);
                            }
                        }
                        this.loading = false
                    })
                    .catch(error => {
                        console.log(error)
                    })
           }
        }
    }
}
</script>
<style scoped>
  .v-progress-circular {
    margin: 1rem
  }
  .v-data-table-header th {
  white-space: nowrap;
}
</style>
