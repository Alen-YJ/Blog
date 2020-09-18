import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport'
import { UserService } from './user.service'
import { AuthService } from '../auth/auth.service'

@Controller('user')
export class UserController {
    constructor(private readonly userService:UserService, private readonly authService:AuthService){}

    @UseGuards(AuthGuard('jwt'))
    @Post('valid-name')
    validName(@Body() body: any){
        return this.userService.validName(body.username);
    }

    // @Post('valid-user')
    // validUser(@Body() body:any){
    //     return this.userService.findUserFromUsername(body.username);
    // }

    //登录
    @Post('login')
    async login(@Body() loginParams: any){
        console.info('jwt - step1')
        const authResult = await this.authService.validateUser(loginParams.username, loginParams.password)
        switch(authResult.code){
            case 1:
                return this.authService.certificate(authResult.user);
            case 2:
                return{
                    code: 600,
                    msg:"账号密码错误"
                }
            case 3:
                return{
                    code:600,
                    msg:"账号密码错误"
                }
            default:
                return {
                    code:600,
                    msg:"登录失败"
                }
        }
    }

    @Post('register')
    async register(@Body() body:any){
        return await this.userService.register(body)
    }
}
