import { IsNotEmpty, IsNumber, IsString } from 'class-validator'
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'

export class ValidNameDTO {
    @ApiProperty({description:"用户名"})
    @IsNotEmpty({message:"用户名不能为空"})
    readonly username: string;
}

export class LoginDTO {
    @ApiProperty({description:"用户名", example:"yijing"})
    @IsNotEmpty({ message:"用户名不能为空" })
    readonly username: string;
    @ApiProperty({description:"密码",example:"123456"})
    @IsNotEmpty({message:"密码不能为空"})
    readonly password: string;
}

export class RegisterInfoDTO {
    @ApiProperty()
    @IsNotEmpty({ message:'用户名不能为空'})
    readonly username: string;
    @ApiProperty()
    @IsNotEmpty({ message:'真实姓名不能为空 '})
    @IsString({ message:'真实姓名必须是String类型' })
    readonly realname: string;
    @ApiProperty()
    @IsNotEmpty({ message:'密码不能为空' })
    readonly password: string;
    @ApiProperty()
    @IsNotEmpty({ message:'重复密码不能为空' })
    readonly repassword: string;
    @ApiProperty()
    @IsNotEmpty({ message:'手机号不能为空' })
    @IsNumber()
    readonly mobile: number;
    @ApiPropertyOptional({
        description: '[角色]: 0-超级管理员 | 1-管理员 | 2-测试/开发人员 | 3-普通用户'
    })
    readonly role?: string | number;
}