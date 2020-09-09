import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
    validName(username:string): string{
        if(username === 'yijing'){
            return 'hello yijing'
        }
        return 'vlidate false'
    }
}
