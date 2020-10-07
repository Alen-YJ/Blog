<template>
    <v-card>
        <div>
            <div class='article-info'>
                <div>
                    <v-card-title>
                        <a @click='showDetail'>{{article.title}}</a>
                    </v-card-title>
                    <v-card-text class='desc'>{{article.content}}</v-card-text>
                    <!-- <div class="desc">{{article.content}}</div> -->
                    <v-card-actions class='actions'>
                        <v-btn depressed text color='#6c757d'>
                            <v-icon small>mdi-thumb-up</v-icon>
                            <span >{{article.likes}}</span>
                        </v-btn>
                        <v-btn depressed text color='#6c757d'>
                            <v-icon small>mdi-message</v-icon>
                            <span >{{article.comments}}</span>
                        </v-btn>
                    </v-card-actions>
                </div>
                <div class='img-wrap'>
                    <v-img src='https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3760f0ddbe5e441c9b913f1b6520fe8c~tplv-k3u1fbpfcp-zoom-1.image' width='190' height='190' >
                    </v-img>
                </div>
            </div>
        </div>
    </v-card>
</template>

<script>
    export default {
        props:{
            article:{
                type:Object,
                require:true,
            }
        },
        data(){
            return{

            }
        },
        methods: {
            showDetail(){
                window.open(`#/article/${this.article.id}`)
            }
        },
        
    }
</script>

<style lang="scss" scoped>
    .article-info{
        display: flex;
        justify-content: space-between;
        .desc{
            padding:0 1em;
            text-indent:1em;
            word-break: break-word;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 3;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        .img-wrap{
            width:190px;
        }
        .actions{
            display: flex;
            padding-left: 20px;
        }
        .count{
            color:gray;
        }
    }
</style>