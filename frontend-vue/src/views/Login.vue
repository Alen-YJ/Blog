<template>
    <v-container>
        <v-row>
            <v-col cols='0' xs='0' sm='0' md='5' offset-md='1'>
                <v-img src='@/static/imgs/smxk.svg' >
                </v-img>
            </v-col>
            <v-col cols='12' md='6'>
                <LoginComponent @success='success'></LoginComponent>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import LoginComponent from '@/components/LoginComponent.vue'
    export default {
        components:{
            LoginComponent
        },
        data(){
            return{

            }
        },
        methods:{
            success(){
                window.location.href = '/'
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>