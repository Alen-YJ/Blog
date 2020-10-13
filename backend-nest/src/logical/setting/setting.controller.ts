import { Controller,Post,Body,Request } from '@nestjs/common';
import { SettingService } from './setting.service'

@Controller('setting')
export class SettingController {
    constructor(private readonly settingService:SettingService){}

    @Post('deploy')
    async deploy(@Body() body:any, @Request() req){
        return this.settingService.deploy(body)
    }
}
