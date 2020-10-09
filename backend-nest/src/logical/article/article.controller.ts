import { ApiTags } from '@nestjs/swagger';
import { Controller, Post, Get, Put, Delete, UseGuards, Body, Request} from '@nestjs/common';
import { ArticleService } from './article.service'
import { AuthGuard } from '@nestjs/passport'
import { RbacGuard } from '../../guards/rbac.guard'
import { roleConstans as role } from '../auth/constants';
import { ArticleID, CreateArticleDTO, UpdateArticleDTO } from './article.dto'

@ApiTags('article')
@Controller('article')
export class ArticleController {
    constructor(private readonly articleService: ArticleService){}

    // @UseGuards(new RbacGuard(role.GUEST))
    // @UseGuards(AuthGuard('jwt'))
    @Get('list')
    async queryArticleList(@Body() body: any, @Request() req){
        return await this.articleService.queryArticleList(body)
    }

    @Get(':id')
    async queryArticleById(@Body() body: ArticleID, @Request() req){
        return await this.articleService.queryArticleById(req)
    }

    @UseGuards(new RbacGuard(role.USER))
    @UseGuards(AuthGuard('jwt'))
    @Post('update')
    async updateArticle(@Body() body:UpdateArticleDTO, @Request() req){
        return await this.articleService.updateArticle(body)
    }
    
    @UseGuards(new RbacGuard(role.USER))
    @UseGuards(AuthGuard('jwt'))
    @Delete(":id")
    async deleteArticleById(@Body() body: ArticleID, @Request() req){
        return await this.articleService.deleteArticle(body)
    }

    @UseGuards(new RbacGuard(role.USER))
    @UseGuards(AuthGuard('jwt'))
    @Put('add')
    async addArticle(@Body() body: CreateArticleDTO, @Request() req){
        return await this.articleService.addArticle(body,req.user)
    }
}
