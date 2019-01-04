<template>
    <div class="about">
        <v-container fluid>
            <v-layout row wrap align-content-center="true">
                <v-flex d-flex xs12 sm8 md8>
                    <v-card elevation="20">
                        <v-card color="pink">
                            <v-img class="white--text" height="200px" src="https://cdn.vuetifyjs.com/images/cards/docks.jpg">
                                <v-container fill-height fluid>
                                    <v-layout fill-height>
                                        <v-flex>
                                            <span class="headline">Latest Post Title</span>
                                        </v-flex>
                                    </v-layout>
                                </v-container>
                            </v-img>
                            <v-card-title>
                                <div>
                                    <span class="grey--text">Number 10</span><br>
                                    <span>Whitehaven Beach</span><br>
                                    <span>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, fugiat, rem. Amet debitis dolorum, ipsa iste labore nesciunt nihil quos similique sunt temporibus totam ut?
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, fugiat, rem. Amet debitis dolorum, ipsa iste labore nesciunt nihil quos similique sunt temporibus totam ut?
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, fugiat, rem. Amet debitis dolorum, ipsa iste labore nesciunt nihil quos similique sunt temporibus totam ut?
                                    </span>
                                </div>
                            </v-card-title>
                            <v-card-actions>
                                <v-btn flat color="orange">Share</v-btn>
                                <v-btn flat color="orange">Explore</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-card>
                </v-flex>
                <v-flex d-flex xs12 sm4 md4>
                    <v-card flat>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
    export default {}
</script>

<style lang="stylus" scoped>

</style>
