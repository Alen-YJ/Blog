import { RbacGuard } from './../../guards/rbac.guard';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags } from '@nestjs/swagger';
import { Controller, Post, Body, Request, UseGuards, Get } from '@nestjs/common';
import { CosService } from './cos.service'
import { roleConstans as role } from '../auth/constants'

@ApiTags("cos")
@Controller('cos')
export class CosController {
    constructor(private readonly cosService:CosService){}

    @UseGuards(new RbacGuard(role.USER))
    @UseGuards(AuthGuard('jwt'))
    @Post('generateKey')
    async generateKey(@Body() body:any, @Request() req){
        return await this.cosService.generateKey(body)
    }

    @UseGuards(new RbacGuard(role.USER))
    @UseGuards(AuthGuard('jwt'))
    @Get('sts')
    async sts(@Body() body:any, @Request() req){
        return await this.cosService.generateTempKey(body)
    }
}
