<template>
    <v-app-bar app flat dense elevate-on-scroll absolute color='white'>
        <v-container>
            <v-row style='align-items:center;'>
                <v-col cols="auto" class="mr-auto">
                    <a href="/">
                        <!-- <v-img src='../assets/logo.png' :contain='true' max-height='48px' width='130px'/> -->
                    </a>
                </v-col>
                <v-col cols="auto" class="mr-auto" style='display:flex;'>
                    <v-text-field placeholder='搜索' label=' ' hide-details="auto" v-model='keyword' @keydown.enter="search" style='margin-right:1em;'>
                        <v-icon
                            slot="append"
                            color="gray"
                            class='search'
                            @click='search'
                            >
                            mdi-magnify
                        </v-icon>
                    </v-text-field>
                    <v-btn tile color="primary" small @click='createArticle'>
                        <v-icon >mdi-plus</v-icon>
                        写文章
                    </v-btn>
                </v-col>
                <v-col cols='auto' >
                    <div class='nav-list'>
                        <router-link to='/' exact>首页</router-link>
                        <router-link to='/articles' exact>文章列表</router-link>
                        <router-link to='/about'>关于</router-link>
                        
                        <v-menu bottom left>
                            <template v-slot:activator='{ on, attrs}'>
                                <v-btn icon  v-bind='attrs' v-on='on'>
                                    <!-- <v-avatar ></v-avatar> -->
                                    <v-icon>mdi-dots-vertical</v-icon>
                                </v-btn>
                            </template>
                            <v-list>
                                <v-list-item>
                                    <v-list-item-title>
                                        注销
                                    </v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </v-menu>
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </v-app-bar>
</template>

<script>
    export default {
        data(){
            return{
                keyword:undefined
            }
        },
        methods:{
            search(){
                
            },
            createArticle(){
                window.open(`#/article/create`)
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../styles/variables";
    .logo{
        padding-left:20px;
        width:130px;
        height:48px;
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
    .search{
        cursor: pointer;
        &:hover{
            filter:opacity(.4);
        }
    }
</style>