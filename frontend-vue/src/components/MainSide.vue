<template>
    <div class='author-info-component'>
        <v-card :loading='loading'>
            <v-progress-linear
            slot='progress'
            color="blue-grey"
            indeterminate
            ></v-progress-linear>
            <div class="info-row">
                <v-avatar>
                    <img :src="info.avatar" alt="">
                </v-avatar>
            </div>
            <v-card-title class='text-center'>{{info.nickname}}</v-card-title>
            <div class='info-row tags text-center'>
                <v-chip v-for='tag in info.tags' :key='tag.tag_id' label :color='tag.color' :text-color='tag.text_color' small>
                    <v-icon>{{tag.icon}}</v-icon>
                    {{tag.title}}
                </v-chip>
            </div>
            <div class="info-row email">
                {{info.email}}
            </div>
            <div class="info-row sign">
                {{info.sign}}
            </div>
        </v-card>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                loading: false,
                info: {},
                loaderAttrs:{
                    class:'info-row',
                    boilerplate:false,
                    elevation:1
                }
            }
        },
        mounted() {
            this.getDetail()
        },
        methods: {
            async getDetail(){
                this.loading = true
                const res = await this.axios.get(`/user/detail`,{params:{
                    id:1
                }})
                this.loading = false
                this.info = res.data.data
            }
        },
    }
</script>

<style lang="scss" scoped>
    .author-info-component{
        .info-row{
            text-align:center;
            margin-bottom:10px;
        }
        .tags{
            ::v-deep .v-chip{
                margin-right:8px;
            }
        }
    }
    .info-enter-active,.info-leave-active{
        transition: opacity 3s;
    }
    .info-enter,.info-leave-to{
        opacity: 1;
    }
</style>