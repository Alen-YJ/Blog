<template>
    <div v-html='compile'>
        
    </div>
</template>

<script>
    import Marked from 'marked'
    const renderMD = new Marked.Renderer()
    Marked.setOptions({
        renderer: renderMD ,
        gfm: true ,
        tables: true ,
        breaks: false ,
        pedantic: false ,
        sanitize: false ,
        smartLists: true ,
        smartypants: false
    })
    export default {
        props:{
            content:String
        },
        data(){
            return{
            }
        },
        computed:{
            compile(){
                return Marked(this.content,{ sanitize: true })
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>