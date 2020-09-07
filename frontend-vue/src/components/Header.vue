<template>
    <v-app-bar app>
        <div class='logo'>
            <a href="/">
                <v-img src='../assets/logo.png' :contain='true' max-height='100%'/>
            </a>
        </div>
        <div>
            <v-spacer></v-spacer>
            <!-- <v-btn icon>
                <icon>arrow-compress-down</icon>
            </v-btn> -->
            <route-link to='/'>首页</route-link>
        </div>
    </v-app-bar>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
    .logo{
        padding-left:20px;
        width:150px;
    }
</style>