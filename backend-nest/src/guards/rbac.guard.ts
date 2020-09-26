import { CanActivate, ExecutionContext, Injectable, ForbiddenException } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class RbacGuard implements CanActivate {
    //role 0 超级管理 | 1 管理员 | 2 开发测试 | 3 普通用户
    constructor(private readonly role: number){}
    canActivate(
        context: ExecutionContext,
    ): boolean | Promise<boolean> | Observable<boolean> {
        const request = context.switchToHttp().getRequest()
        const user = request.user
        if(user.role > this.role){
            throw new ForbiddenException('无权操作')
        }
        return true;
    }
}
