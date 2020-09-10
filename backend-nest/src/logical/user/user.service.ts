import { Injectable } from '@nestjs/common';
import * as Sequelize from 'sequelize'
import sequelize from '../../database/sequelize'

@Injectable()
export class UserService {
    validName(username:string): string{
        if(username === 'yijing'){
            return 'hello yijing'
        }
        return 'vlidate false'
    }
    async validUser(username: string): Promise<any | undefined>{
        const sql = `select * from user where username = "${username}"`
        try {
            const res = await sequelize.query(sql,{
                type:Sequelize.QueryTypes.SELECT, 
                raw:true,
                logging:true
            });
            const user = res[0]
            if(user){
                return {
                    code:200,
                    data:{
                        user,
                    },
                    msg:"success"
                };
            }else{
                return {
                    code:600,
                    msg:"用户名或密码错误"
                }
            }
        } catch(err){
            return {
                code: 503,
                msg:`Service error:${err}`
            }
        }

    }
}
