<template>
    <v-app class='app'>
        <Header></Header>
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
</style>