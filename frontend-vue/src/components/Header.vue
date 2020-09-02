<template>
    <div>
        <div id="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link>
        </div>
    </div>
</template>

<script lang="ts">
    import { Vue, Options } from 'vue-class-component'

    

    @Options({
        props:{
            links:Array
        }
    })

    export default class Header extends Vue {} 
</script>

<style scoped>

</style>