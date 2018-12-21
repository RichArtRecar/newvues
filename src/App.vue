<template>
    <v-app>
        <v-toolbar pb-5 class="cyan lighten-1" fixed app scroll-threshold="1" scroll-off-screen="true">
            <v-toolbar-side-icon @click="sideNav = true"></v-toolbar-side-icon>
            <v-toolbar-title>FTMB</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items>

                <v-btn flat>
                    <v-icon left>person_pin_circle</v-icon>
                    About
                </v-btn>
            </v-toolbar-items>


        </v-toolbar> 

        <v-navigation-drawer class="cyan lighten-4
" v-model="sideNav" :mini-variant="mini" absolute temporary>


            <v-btn fab outline icon="true" color="teal">
                <font-awesome-icon @click="sideNav = false" icon="times" rotation="180" size="1x"/>
            </v-btn>

        </v-navigation-drawer>

        <main>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A animi autem consequuntur eius est, fuga impedit obcaecati odio perferendis qui quibusdam reprehenderit repudiandae sequi temporibus vero. Error esse expedita hic id laborum magnam minima, sequi voluptates. Ab accusantium deserunt dolorum impedit praesentium? Ab animi, aut autem consectetur corporis debitis doloremque enim eum fuga id inventore ipsum labore necessitatibus nihil officiis placeat repellat repellendus rerum. Aliquid dolore libero nam nesciunt odit quibusdam, voluptates. Aliquam architecto cum dolore facilis nobis totam vero. Animi dolor explicabo maiores voluptate! Ad aliquid blanditiis debitis dolor, facilis modi molestias nam nostrum, officia perspiciatis quasi tempora voluptatibus? Accusantium, animi architecto dolores dolorum eos incidunt ipsa officia quia sunt vel. Ab, necessitatibus, quasi? Aliquid aperiam aut beatae blanditiis, commodi cum eaque eius expedita, explicabo facere incidunt iste iure mollitia, necessitatibus nesciunt obcaecati perferendis perspiciatis placeat praesentium quas repellendus sunt tempore ullam voluptatibus voluptatum? Reprehenderit, sit suscipit. Animi aut hic id, inventore iste maiores mollitia perspiciatis tempora veritatis. Aspernatur consequatur cumque deserunt dignissimos dolor dolorem doloribus, dolorum eligendi est exercitationem iste minima modi nam obcaecati, officiis pariatur quae quam ratione repellat sint sunt tempora tenetur unde vel veritatis! Accusantium culpa dolorum, esse eum facere fugiat magni maiores neque omnis quasi sint tempore ullam voluptate! Ad atque beatae, culpa dolor ducimus ea eius exercitationem expedita harum impedit ipsa ipsum laborum minima modi mollitia nemo nisi pariatur quaerat, quas recusandae repellendus reprehenderit suscipit tempore ullam unde vero voluptas voluptatem. Aut corporis dolor dolorem, ea, earum enim quod ratione reiciendis, repellendus saepe vel voluptas? A accusamus ad alias architecto autem beatae blanditiis debitis dolorem dolorum, ea eius eos eum excepturi exercitationem fugit harum hic impedit ipsa iure libero maxime neque nihil nisi numquam quasi quidem saepe soluta suscipit temporibus tenetur totam unde veniam vitae. Atque dolores eaque ipsum magnam molestias provident quas, reiciendis reprehenderit temporibus voluptates? Amet aperiam architecto assumenda corporis dolor, dolore dolorum hic inventore ipsum libero maxime modi obcaecati reiciendis ut voluptatum. At beatae culpa odio quaerat voluptates. Adipisci aliquam consequuntur distinctio dolorum earum esse exercitationem inventore molestiae molestias, mollitia neque odit, possimus quam quas quasi qui quos rem reprehenderit. Ab accusantium deserunt dolor temporibus vitae? Adipisci animi doloremque fugit harum inventore laborum nobis? Aliquam consequuntur dolores dolorum qui recusandae tempora voluptate. Ab alias assumenda blanditiis cum doloremque, eligendi expedita ipsum, neque odio omnis, perferendis quas quia quod sed soluta voluptas voluptatum. Alias aliquam aspernatur cumque dicta dolorem magnam minima natus nemo similique unde. A aperiam autem commodi deleniti dignissimos eaque facere, facilis illo, iusto molestias, neque nisi quibusdam reiciendis repudiandae vitae! Corporis culpa doloribus dolorum eaque earum impedit in ipsam iusto modi nam nemo neque nihil nostrum, quae quaerat tempora vel. Culpa dignissimos, harum hic magnam nisi quam repudiandae vel. Accusantium blanditiis culpa deserunt dignissimos enim esse expedita harum incidunt ipsum iusto, modi nemo obcaecati odio omnis perspiciatis porro quaerat saepe sapiente similique tempore vitae, voluptatem voluptatibus. A accusamus accusantium ad autem blanditiis cupiditate eligendi error et excepturi id mollitia, non odit perspiciatis porro sint, velit voluptas voluptate voluptatum.</p>
        </main>
        <v-footer
                dark
                height="auto"
                fixed="true"

        >
            <v-card
                    class="flex"

                    tile
            >
                <v-card-title class="teal">
                    <strong class="subheading">Get connected with us on social networks!</strong>
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

    </v-app>

</template>

<script>
    export default {
        data() {
            return {
                sideNav: false,


            }

        }

    }
</script>

