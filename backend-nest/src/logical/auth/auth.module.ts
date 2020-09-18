import { Module } from '@nestjs/common';
import { AuthService } from './auth.service'
import { LocalStrategy } from './local.strategy'
import { JwtStrategy } from './jwt.strategy'
import { UserModule } from '../user/user.module'
import { JwtModule } from '@nestjs/jwt'
import { jwtConstants } from './constants'
import { PassportModule } from '@nestjs/passport';

@Module({
    imports: [
        PassportModule.register({ defaultStrategy:'jwt' }),
        JwtModule.register({
            secret: jwtConstants.secret,
            signOptions:{ expiresIn:'8h' }, //过期时间
        }),
        UserModule
    ],
    providers: [AuthService, LocalStrategy, JwtStrategy ],
    exports: [AuthService]
})
export class AuthModule {}
