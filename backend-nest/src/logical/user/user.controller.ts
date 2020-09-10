import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './user.service'

@Controller('user')
export class UserController {
    constructor(private readonly userService:UserService){}

    @Post('valid-name')
    validName(@Body() body: any){
        return this.userService.validName(body.username);
    }

    @Post('valid-user')
    validUser(@Body() body:any){
        return this.userService.validUser(body.username);
    }
}
