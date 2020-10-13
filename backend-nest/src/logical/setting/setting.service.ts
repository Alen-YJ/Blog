import { Injectable,Body } from '@nestjs/common';

@Injectable()
export class SettingService {
    async deploy(@Body() body:any): Promise<any>{

    }
}
