<template>
    <div>
        <div><v-breadcrumbs :items='path' divider='/'></v-breadcrumbs></div>
        <v-skeleton-loader v-bind="attrs" type='image,article' v-if='loading'>
        </v-skeleton-loader>
        <div v-else class='content'>
            <h2 class='text-center'>{{article.title}}</h2>
            <template v-if='article.type=="html"'>
                <HTMLParsetor :content='article.content'></HTMLParsetor>
            </template>
            <template v-else>
                <MarkDownParsetor :content='article.content'></MarkDownParsetor>
            </template>
        </div>
    </div>
</template>

<script>
    import HTMLParsetor from './HTMLParsetor'
    import MarkDownParsetor from './MarkDownParsetor'
    export default {
        components:{
            HTMLParsetor,
            MarkDownParsetor
        },
        data(){
            return{
                id:undefined,
                article:{},
                loading:true,
                attrs:{
                    boilerplate: true,
                    elevation: 2,
                },
                path:[
                    { text:"首页", disabled:false, href:"/" },
                    { text:"列表", disabled:false, href:"article/list" },
                    { text:"文章详情", disabled:true, href:"" },
                ]
            }
        },
        mounted() {
            this.id = this.$route.params.id
            this.getDetail()
        },
        methods: {
            async getDetail(){
                this.loading = true
                let result = await this.axios.get(`api/article/${this.id}`)
                this.loading = false
                this.article = result.data.data
            }
        },
    }
</script>

<style lang="scss" scoped>
    .content{
        word-break: break-word;
        text-indent:2em;
    }
</style>