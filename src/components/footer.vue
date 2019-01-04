<template>
    <div>
        <div class="footer1">
            <v-footer dark height="auto">
                <v-card class="flex" tile>
                    <v-card-title class=cyan lighten-4>
                        <v-btn icon="true" color="blue lighten-1">
                            <font-awesome-icon left :icon="[ 'fab', 'twitter' ]" size="1.5x"></font-awesome-icon>
                        </v-btn>
                        <v-btn icon="true" color="blue darken-4">
                            <font-awesome-icon left :icon="[ 'fab', 'facebook-f' ]" size="1.5x"></font-awesome-icon>
                        </v-btn>
                        <v-btn icon="true" color="red accent-2">
                            <font-awesome-icon left :icon="[ 'fab', 'instagram' ]" size="1.5x"></font-awesome-icon>
                        </v-btn>
                        <v-spacer></v-spacer>
                    </v-card-title>
                    <v-card-actions class="grey darken-3 justify-center">
                        &copy;2018 — <strong>First Time Mama Blog</strong>
                    </v-card-actions>
                </v-card>
            </v-footer>
        </div>
    </div>
</template>

<script>
    export default {
        name: "footer1"
    }
</script>

<style lang="stylus" scoped>

</style>
