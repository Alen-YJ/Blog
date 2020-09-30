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
                        <v-btn icon color='default'>
                            <v-icon small>mdi-thumb-up</v-icon>112
                        </v-btn>
                    </v-card-actions>
                </div>
                <div class='img-wrap'>
                    <v-img src='https://cdn.vuetifyjs.com/images/cards/cooking.png' width='200' height='200' >
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
                window.open(``)
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
            width:200px;
        }
        .actions{
            display: flex;
            justify-content: space-between;
            padding-left: 20px;
        }
    }
</style>