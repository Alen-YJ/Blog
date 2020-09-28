import { Controller, Post, Body, UseGuards, UsePipes, Get } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport'
import { UserService } from './user.service'
import { AuthService } from '../auth/auth.service'
import { ValidationPipe } from '../../pipe/validation.pipe'
import { RegisterInfoDTO, LoginDTO, ValidNameDTO } from './user.dto'
import { ApiTags, ApiBearerAuth, ApiBody } from '@nestjs/swagger'

@ApiBearerAuth()
@ApiTags('user') 
@Controller('user')
export class UserController {
    constructor(private readonly userService:UserService, private readonly authService:AuthService){}

    @UseGuards(AuthGuard('jwt'))
    @Post('valid-name')
    validName(@Body() body: ValidNameDTO){
        return this.userService.validName(body.username);
    }

    //登录
    @Post('login')
    @ApiBody({
        description:"登录",
        type: LoginDTO
    })
    async login(@Body() loginParams: LoginDTO){
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

    @UsePipes(new ValidationPipe())
    @Post('register')
    async register(@Body() body: RegisterInfoDTO){
        return await this.userService.register(body)
    }

    @Get('detail/:id')
    async detail(@Body() body: any): Promise<any>{
        return await this.userService.detail(body)
    }
}
