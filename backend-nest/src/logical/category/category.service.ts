import { Injectable } from '@nestjs/common';
import * as Sequelize from 'sequelize'
import sequelize from '../../database/sequelize'

@Injectable()
export class CategoryService {
    
    /**
     * 
     * @param {*} body 
     * @returns {Promise<any>}
     * 
     */
    async queryCategories(body: any): Promise<any>{
        const { parent_id } = body
        const sql = `
            select * from category ${parent_id? "where parent_id = "+parent_id:""}
        `
        const categories = await sequelize.query(sql,{
            type:Sequelize.QueryTypes.SELECT,
            raw: true,
            logging:false
        })
        return{
            code:200,
            status:"success",
            categories
        }
    }

    /**
     * 
     * @param { * } body 
     * @returns { Promise<any> }
     * 
     */
    async queryCategoryById(body: any):Promise<any>{
        const { id } = body
        const sql = `
            select * from category where id = ${id}
        `
        console.log(sql)
        const category = await sequelize.query(sql,{
            type:Sequelize.QueryTypes.SELECT,
            raw: true,
            logging: false,
        })
        return {
            code:200,
            status:"success",
            category
        }
    }

    /**
     * 
     * @param { string } title
     * @param { number } parent_id
     * @returns { Promise<any> } 
     * 
     */
    async createCategory(body: any, user: any): Promise<any>{
        const { title, parent_id } = body
        const querySql = `
            select count(*) as row from category 
            where parent_id = ${parent_id} and title = "${title}"
        `
        const result = await sequelize.query(querySql,{
            type:Sequelize.QueryTypes.SELECT,
            raw: true,
            logging: false
        })
        if( result[0].row > 0 ){
            return {
                code: 403,
                status: "fail",
                msg: "数据已存在"
            }
        }
        const sql = `
            insert into category ( title, parent_id ) values ( "${title}", ${parent_id })
        `
        await sequelize.query(sql, {logging: false})
        return{
            code:200,
            status:"success"
        }
    }

    /**
     * 
     * @param { number } id 
     * @returns { Promise<any> }
     * 
     */
    async updateCategory(body: any, user: any):Promise<any> {
        const { id, title, parent_id } = body
        const sql = `
            update category set 
                title = "${title}",
                parent_id = ${parent_id}
            where id = ${id}
        `
        const transaction = await sequelize.transaction()
        await sequelize.query(sql,{transaction,logging: true})
        return{
            code:200,
            status:"success",
        }
    }

    /**
     * 
     * @param { number } id 
     * @returns { Promise<any> }
     * 
     */
    async deleteCategory(body: any, user: any): Promise<any>{
        const { id } = body
        const sql = `
            delete from category where id = ${id}
        `
        await sequelize.query(sql, {logging: false })
        return {
            code: 200,
            status: "success"
        }
    }
    
}
