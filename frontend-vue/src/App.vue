<template>
    <v-app class='app'>
        <Header></Header>
        <v-main>
            <router-view></router-view>
        </v-main>
        <v-footer padless color='white'>
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
    ::v-deep .v-footer>div{
        text-align:center;
        width:100%;
        font-size:$font-size-sm;
    }
    @media screen and (max-width: 959px) and (min-width: 600px){
        ::v-deep .col-sm-0{
            display: none;
        }
    }
    @media screen and (max-width: 599px){
        ::v-deep div[xs='0']{
            display: none;
        }
    }
</style>