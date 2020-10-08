<template>
    <div>
        <template v-if='type=="marked"'>
            <div>
                <MarkdownEditor v-model='content' :title='title' @updateTitle="updateTitle" @confirm='confirm'/>
            </div>
        </template>
        <template v-else>
            <div>
                <HTMLEditor v-model='content' :title='title' @updateTitle="updateTitle" />
            </div>
        </template>
    </div>
</template>

<script>
    import MarkdownEditor from '../components/MarkdownEditor'
    import HTMLEditor from '../components/HTMLEditor'
    export default {
        components:{
            MarkdownEditor, HTMLEditor
        },
        data(){
            return{
                type:"marked",
                content: "",
                title:"",
            }
        },
        methods: {
            updateTitle(e){
                this.title = e
            },
            async confirm(){
                if(!this.title&&!this.content){
                    return
                }
                if(!this.title){
                    let data = this.content.trim()
                    this.title = data.split('\n')[0]
                }
                const result = await this.axios.put(`/article/add`,{
                    content:this.content,
                    title:this.title,
                    type:this.type,
                })
                console.info(result)
                // if(result.code==200){
                //     this.$success({

                //     })
                // }
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>