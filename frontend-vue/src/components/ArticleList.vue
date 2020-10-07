<template>
    <div>
        <article-item v-for='article in list' :key='article.id' :article='article'></article-item>
    </div>
</template>

<script>
    import ArticleItem from './ArticleItem'
    export default {
        components:{
            ArticleItem,
        },
        props:{
            filter:{
                type:Object
            }
        },
        data(){
            return{
                loading:false,
                list:[],
                pagination:{
                    page:1,
                    total:1,
                    limit:10
                }
            }
        },
        mounted() {
            this.loadList()
        },
        methods: {
            async loadList(){
                this.loading = true
                const res = await this.axios.get(`/api/article/list`,{
                    params:Object.assign({},this.fitler,this.pagination)
                })
                this.loading = false
                this.list = res.data.data.list
                Object.assign(this.pagination,res.data.data.pagination)
            }
        },
    }
</script>

<style lang="scss" scoped>
</style>