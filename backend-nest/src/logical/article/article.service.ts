import { Body, Injectable } from '@nestjs/common';
import * as Sequelize from 'sequelize'
import sequelize from '../../database/sequelize'
import moment from 'moment'

@Injectable()
export class ArticleService {
    /**
     * 主列表
     * @param {*} body 
     * @param {string} username
     * @returns {Promise<any>}
     * @member CommodityService
     */
    async queryArticleList(@Body() body: any): Promise<any>{
        const { page = 1, limit = 10, keyword = ''} = body
        const currentIndex = (page-1) * limit < 0 ? 0 : (page-1)*limit
        const sql = `
            select 
                id, category_id, user_id, content, title,
                DATE_FORMAT(create_at, '%Y-%m-%d %H:%i:%s') create_at,
                DATE_FORMAT(update_at, '%Y-%m-%d %H:%i:%s') update_at,
                type, visible, top, likes, comments
            from
                article 
            left join 
                (select count(article_id) as likes, article_id from likes 
                group by 
                article_id having likes > 0) as likes 
            on 
                article.id = likes.article_id 
            left join 
                (select count(article_id) as comments, article_id from comments 
                group by 
                article_id having comments > 0) as comments 
                on article.id = comments.article_id 
            where 
                title like '%${keyword}%'
            order by 
                id desc
            limit ${currentIndex}, ${limit}
        `
        const list: any[] = await sequelize.query(sql,{
            type: Sequelize.QueryTypes.SELECT,
            raw: true,
            logging: false
        })

        const  countSql = `
            select count(*) as total from article where title like '%${keyword}%'
        `
        const count = await sequelize.query(countSql, {
            type: Sequelize.QueryTypes.SELECT,
            logging: false,
        })

        return {
            code:200,
            status:"success",
            data:{
                list,
                pagination:{
                    page:page,
                    total:count[0].total,
                    limit:limit
                }
            }
        }
    }

    /**
     * 
     * @param {*} body 
     * @param { number } id
     * 
     */
    async queryArticleById(@Body() body: any): Promise<any>{
        const { id } = body.params
        console.log('body',body.params)
        const sql = `select * from article left join (select count(*) as likes,article_id from likes where article_id = ${id}) as likes on article.id = likes.article_id left join (select count(*) as comments, article_id from comments where article_id = ${id}) as comments on comments.article_id = article.id`
        const result = await sequelize.query(sql,{ 
            type: Sequelize.QueryTypes.SELECT,
            logging: false })
        const comment_sql = `select * from comments where article_id = ${id}`
        const comments = await sequelize.query(comment_sql,{
            type: Sequelize.QueryTypes.SELECT,
            logging: false
        })
        const article = Object.assign({},result[0],{
            comments:comments
        })
        return {
            code:200,
            status:"success",
            data:article
        }
    }

    /**
     * 
     * @param {*} body 
     * @param {number} user_id 
     * @returns {Promise<any>}
     * 
     */
    async addArticle(@Body() body: any, user_id?: number): Promise<any>{
        const { category_id, content, title, type, visible, top } = body
        const create_at = moment().format("YYYY-MM-DD hh:mm:ss")
        const category = category_id?category_id:0
        const sql = `
            insert into article (category_id,content,title, create_at, type,visible, top, user_id) 
            values (${category},"${content}","${title}","${create_at}", "${type}",${visible}, ${top}, ${user_id} )
        `
        await sequelize.query(sql, {logging:false})
        return {
            code:200,
            status:"success",
        }
    }

    /**
     * 
     * @param {*} body 
     * @param {number} user_id 
     * @returns {Promise<any>}
     * 
     */
    async updateArticle(@Body() body: any, user_id?: number ): Promise<any>{
        const { id, category_id, content, title, type, visible, top } = body
        const now = moment().format('yyyy-MM-dd HH:mm:ss')

        const sql = `
            update article set 
                category_id = ${category_id},
                content = '${content}',
                title = '${title}',
                type = '${type}',
                visible = ${visible},
                top = ${top},
                update_at = ${now}
            where id = ${id}
        `
        const transaction = await sequelize.transaction()
        await sequelize.query(sql,{ transaction, logging:false })
        return{
            code:200,
            status:"success",
        }
    }

    /**
     * 
     * @param body 
     * @param user_id 
     */
    async deleteArticle(@Body() body: any, user_id?:number): Promise<any>{
        const { id } = body
        const sql = `
            delete from article where id = ${id}
        `

        await sequelize.query(sql,{logging:false})
        return{
            code:200,
            status:"success",
        }
    }

}
