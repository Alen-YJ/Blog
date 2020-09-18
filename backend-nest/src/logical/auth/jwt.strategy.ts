// JWT验证策略

import { ExtractJwt, Strategy } from 'passport-jwt'
import { PassportStrategy } from '@nestjs/passport'
import { Injectable } from '@nestjs/common'
import { jwtConstants } from './constants'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){
    constructor(){
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration:false,
            secretOrKey: jwtConstants.secret,
        })
    }
}

async function validate(payload: any){
    console.log(`JWT - step 4`)
    return { id: payload.sub, username:payload.username, realName:payload.realName, role:payload.role}
}