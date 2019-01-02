<template>
    <div>
        <div class="footer1">
            <v-footer dark height="auto">
                <v-card class="flex" tile>
                    <v-card-title class="teal">
                        <!--<strong class="subheading">Get connected with us on social networks!</strong>-->
                        <v-spacer></v-spacer>
                    </v-card-title>
                    <v-btn fab outline icon="true" color="teal">
                        <font-awesome-icon left :icon="[ 'fab', 'twitter' ]" size="2x"></font-awesome-icon>
                    </v-btn>
                    <v-btn fab outline icon="true" color="teal">
                        <font-awesome-icon left :icon="[ 'fab', 'facebook-f' ]" size="2x"></font-awesome-icon>
                    </v-btn>
                    <v-btn fab outline icon="true" color="teal">
                        <font-awesome-icon left :icon="[ 'fab', 'instagram' ]" size="2x"></font-awesome-icon>
                    </v-btn>
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
