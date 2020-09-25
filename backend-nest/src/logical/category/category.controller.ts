import { Controller, Request, Post, Get, Body, UseGuards, UseInterceptors, Delete } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport'
import { CategoryService } from './category.service'
import { RbacInterceptor } from '../../interceptor/rbac.interceptor'
import { roleConstans as role } from '../auth/constants'

@Controller('category')
export class CategoryController {
    constructor( private readonly categoryService: CategoryService){}

    //查询列表
    @UseGuards(AuthGuard('jwt'))
    @UseInterceptors(new RbacInterceptor(role.USER)) //使用权限拦截
    @Get('list')
    async queryCategoryList(@Body() body:any){
        return await this.categoryService.queryCategories(body)
    }

    //新建分类
    @UseGuards(AuthGuard('jwt'))
    @UseInterceptors(new RbacInterceptor(role.USER))
    @Post('create')
    async createCategory(@Body() body:any, @Request() req: any){
        return await this.categoryService.createCategory(body, req.user)
    }
    
    //修改分类
    @UseGuards(AuthGuard('jwt'))
    @UseInterceptors(new RbacInterceptor(role.USER))
    @Post('update')
    async updateCategory(@Body() body: any, @Request() req: any){
        return await this.categoryService.updateCategory(body, req.user)
    }

    //删除分类
    @UseGuards(AuthGuard('jwt'))
    @UseInterceptors(new RbacInterceptor(role.USER))
    @Delete('delete')
    async deleteCategory(@Body() body: any, @Request() req: any){
        return await this.categoryService.deleteCategory(body, req.user)
    }
}
