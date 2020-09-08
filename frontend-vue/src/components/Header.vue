<template>
    <v-app-bar app>
        <div class='logo'>
            <a href="/">
                <v-img src='../assets/logo.png' :contain='true' max-height='100%'/>
            </a>
        </div>
        <div class='nav-list'>
            <router-link to='/' exact>首页</router-link>
            <router-link to='/article'>文章列表</router-link>
            <router-link to='/about'>关于</router-link>
        </div>
    </v-app-bar>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
    @import "../styles/variables";
    .logo{
        padding-left:20px;
        width:130px;
    }
    ::v-deep .v-toolbar__content{
        justify-content: space-between;
        a{
            color:$secondary;
            margin-right:10px;
            text-decoration: $link-decoration;
            padding:$menu-item-padding-y $menu-item-padding-x;
            &:hover{
                color:$link-hover-color;
            }
            &.router-link-active{
                color:white;
                background-color:$menu-item-active-color;
                border-color:$border-color;
                border-width:$menu-item-active-border-width;
                box-shadow:$menu-box-shadow;
                transition: $menu-transition;
            }
        }
    }
</style>