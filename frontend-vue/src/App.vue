<template>
    <v-app class='app'>
        <Header></Header>
        <v-main>
            <router-view></router-view>
        </v-main>
        <v-footer padless>
            <div class="text-center">&copy;2020 - learn-way</div>
        </v-footer>
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
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "./styles/variables";
    .app{
        font-family: tahoma,"microsoft yahei";
    }
    ::v-deep .v-footer>div{
        text-align:center;
        width:100%;
        font-size:$font-size-sm;
    }
</style>