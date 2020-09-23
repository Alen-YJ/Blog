import { Injectable } from '@nestjs/common';
import * as Sequelize from 'sequelize'
import sequelize from '../../database/sequelize'
import { makeSalt, encryptPassword } from '../../utils/cryptogram'

@Injectable()
export class UserService {
    validName(username:string): string{
        if(username === 'yijing'){
            return 'hello yijing'
        }
        return 'vlidate false'
    }
    
    async findUserFromUsername(username: string): Promise<any | undefined>{
        const sql = `select * from admin_user where username = "${username}"`
        try {
            const user = await sequelize.query(sql,{
                type:Sequelize.QueryTypes.SELECT,   //查询方式
                raw:true,       //是否使用数组组装的方式展示结果
                logging:true    //是否将sql打印到控制台
            });
            return user[0]
        } catch(err){
            return {
                code: 503,
                msg:`Service error:${err}`
            }
        }
    }

    async register(requestBody: any): Promise<any>{
        const { username, realname, password, repassword, mobile } = requestBody
        const date = new Date()
        const now = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`
        if(password!==repassword){
            return {
                code:400,
                msg:"两次密码不一致"
            }
        }
        const user = await this.findUserFromUsername(username)
        console.log(user)
        if(user){
            return{
                code:400,
                msg:"用户已存在"
            }
        }
        const salt = makeSalt()
        const hashPwd = encryptPassword(password, salt)

        const sql = `insert into admin_user(username, realname, password, password_salt, mobile, status, role, create_at, create_by) 
            values('${username}','${realname}','${hashPwd}','${salt}','${mobile}',1,3,'${now}',0)`
        
        try{
            await sequelize.query(sql,{logging:true});
            return {
                code:200,
                msg:"success"
            }
        } catch(error){
            return {
                code:503,
                msg:`service error:${error}`
            }
        }

    }
}
