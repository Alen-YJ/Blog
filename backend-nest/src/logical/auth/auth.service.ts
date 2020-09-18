import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service'
import { JwtService } from '@nestjs/jwt'
import { encryptPassword } from '../../utils/cryptogram'

@Injectable()
export class AuthService {
    constructor(private readonly userService:UserService, private readonly jwtService:JwtService){}

    //验证用户信息
    async validateUser(username: string, password: string): Promise<any>{
        console.log('jwt - step2')
        const user = await this.userService.findUserFromUsername(username)
        console.log('user',user)
        if(user){
            const hashedPassowrd = user.password
            const salt = user.password_salt
            const hashPassword = encryptPassword(password,salt)
            if(hashedPassowrd===hashPassword){
                return {
                    code:1,
                    user
                }
            }else{
                return{
                    code:2,
                    user:null
                }
            }
        }
        return {
            code:3,
            user:null
        }
    }

    //处理签证
    async certificate(user: any){
        const payload = { username: user.username, sub: user.id, id:user.id, realName:user.realName, role:user.role }
        console.log('jwt - step3')
        try{
            const token = this.jwtService.sign(payload)
            return {
                code:200,
                data:{
                    token
                },
                msg:"登录成功"
            }
        } catch(error){
            return {
                code:600,
                msg:"账号或密码错误"
            }
        }
    }
}
