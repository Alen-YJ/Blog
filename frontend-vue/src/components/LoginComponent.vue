<template>
    <div class='login-form'>
        <div>
            <v-text-field label='用户名' v-model='username' :rules="[rules.required,rules.min]"></v-text-field>
        </div>
        <div>
            <v-text-field label='密码' v-model='password' 
                :type='showPassword?"text":"password"'
                @click:append='showPassword = !showPassword' 
                :rules='[rules.required, rules.min]'
                :append-icon="showPassword?'mdi-eye':'mdi-eye-off'">
            </v-text-field>
        </div>
        <div>
            <v-btn color='primary' @click='login' block>登录</v-btn>
        </div>
        <div>
            <v-btn block @click='register'>注册</v-btn>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                rules: {
                    required: value => !!value || 'Required.',
                    min: value => value.length >= 6,
                },
                showPassword:false,
                username:"",
                password:"",
                login_loading: false,
            }
        },
        methods:{
            async login(){
                this.login_loading = true
                const result = await this.axios.post('/user/login',{
                    username:this.username,
                    password:this.password
                })
                if(result.status == 200&&result.data.code == 200){
                    window.sessionStorage.setItem('token',result.data.data.token)
                    window.location.href = '/'
                }
            },
            register(){
                window.location.href='/#register'
            }
        }
    }
</script>

<style lang="scss" scoped>
    .login-form{
        padding-top:20px;
        &>div{
            margin-bottom:15px;
        }
    }
</style>