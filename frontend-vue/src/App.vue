<template>
    <v-app class='app'>
        <Header></Header>
        <v-main>
            <router-view></router-view>
        </v-main>
    </v-app>
</template>

<script>
    import Header from './components/Header.vue'
    export default {
        components:{
            Header
        },
        data(){
            return{
                loading:false,
                routes:[
                    
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
    .app{
        font-family: tahoma,"microsoft yahei";
    }
</style>