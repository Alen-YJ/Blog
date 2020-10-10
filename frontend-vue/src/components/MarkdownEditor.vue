<template>
    <div>
        <v-container>
            <v-row no-gutters>
                <v-col cols='12' :md='editorConfig.md'>
                    <div class='editor'>
                        <div>
                            <v-text-field label='标题' v-model='titleValue'></v-text-field>
                            <v-dialog v-model='panorama' width='500'>
                                <template v-slot:activator="{on, attrs}">
                                    <v-icon v-bind='attrs' v-on='on' class='img-btn' title='添加封面大图'>mdi-panorama</v-icon>
                                </template>
                                <v-card>
                                    <v-card-title>添加封面大图</v-card-title>
                                    <v-card-text>
                                        <v-file-input label="点击添加图片" accept="image/png, image/jpeg, image/bmp, image/webp" filled prepend-icon='mdi-camera' @change='changeCover'></v-file-input>
                                    </v-card-text>
                                </v-card>
                            </v-dialog>
                        </div>
                        <div class='controls'>
                            <v-icon title='插入图片'>mdi-image</v-icon>
                        </div>
                        <v-textarea label='文章内容' no-resize v-model='content'></v-textarea>
                        <div class='contorls text-right'>
                            <div>
                                <v-checkbox v-model='showParsetor' label='预览'></v-checkbox>
                            </div>
                            <div>
                                <!-- <span class='desc'>自动保存</span> -->
                                <v-btn color='primary' small @click='confirm'>保存</v-btn>
                            </div>
                        </div>
                    </div>
                </v-col>
                <v-col xs='0' sm='0' md='6' v-if='showParsetor'>
                    <div class='parser'>
                        <h2 style='text-align:center'>{{title}}</h2>
                        <Parsetor :content='content' />
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
    import Parsetor from './MarkdownParsetor'
    export default {
        components:{
            Parsetor
        },
        props:{
            value:String,
            title:String
        },
        data(){
            return{
                showParsetor:true,
            }
        },
        computed:{
            content:{
                get(){
                    return this.value
                },
                set(val){
                    this.$emit('input',val)
                }
            },
            titleValue:{
                get(){
                    return this.title
                },
                set(val){
                    this.$emit('updateTitle',val)
                }
            },
            editorConfig(){
                return {
                    md: this.showParsetor ? 6 : 12 
                }
            }
        },
        methods:{
            confirm(){
                this.$emit('confirm')
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../styles/variables";
    .parser{
        margin-left:15px;
        &>h2{
            line-height:54px;
            margin-bottom:34px;
        }
    }
    .contorls{
        display: flex;
        justify-content: space-between;
        align-items: center;
        ::v-deep label{
            margin-bottom:0;
        }
    }
    .desc{
        color:$gray-600;
        margin-right:5px;
        vertical-align: middle;
    }
</style>