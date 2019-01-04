<template>
    <div>
        <div class="mainnav">
            <v-navigation-drawer class="cyan lighten-4" v-model="sideNav" :mini-variant="mini" absolute temporary>
                <v-btn fab outline icon="true" color="teal">
                    <font-awesome-icon @click.stop="sideNav = !sideNav" icon="times" rotation="180" size="1.50x"/>
                </v-btn>
                <v-list>
                    <v-list-tile>
                        <v-list-tile-content>
                            Suck Balls
                        </v-list-tile-content>
                    </v-list-tile>
                </v-list>
            </v-navigation-drawer>
        <v-toolbar class="cyan lighten-1" height="100" scroll-threshold="300" scroll-toolbar-off-screen="true">
            <v-toolbar-side-icon fab @click.stop="sideNav = !sideNav" class="hidden-sm-and-up"></v-toolbar-side-icon>
            <v-toolbar-title>FTMB</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-xs-only">
                <v-btn class="link" flat>
                    <router-link to="/about">About</router-link>
                </v-btn>
                <v-btn flat>
                    <router-link to="/contact">Contact</router-link>
                </v-btn>
            </v-toolbar-items>
        </v-toolbar>
        </div>
    </div>
</template>

<script>

</script>

<style lang="stylus" scoped>
        
       a
        text-decoration: none
        font-size: 1.5rem 

        


    
</style>

