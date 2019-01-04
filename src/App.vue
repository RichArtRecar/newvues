<template>
    <v-app>
        <MainNav></MainNav>
        <parallax></parallax>
        <v-spacer></v-spacer>
        <main>
           <router-view/>
        </main>
        <footer1></footer1>
    </v-app>
</template>

<script>
 
</script>

<style lang="stylus" scoped>
   #app
       background-color: rgba(240, 240, 240, 0.15)
</style>
>