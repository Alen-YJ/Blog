
import { Controller, Request, Post, Get, Body, UseGuards, UseInterceptors, Delete, Param } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport'
import { RbacGuard } from './../../guards/rbac.guard';
import { CategoryService } from './category.service'
import { RbacInterceptor } from '../../interceptor/rbac.interceptor'
import { roleConstans as role } from '../auth/constants'
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { CreateAntDeleteCategoryDTO, CreateCategoryDTO, UpdateCategoryDTO } from './category.dto'

@ApiTags('category')
@Controller('category')
export class CategoryController {
    constructor( private readonly categoryService: CategoryService){}

    //查询列表
    @UseGuards(new RbacGuard(role.GUEST))
    @UseGuards(AuthGuard('jwt'))
    // @UseInterceptors(new RbacInterceptor(role.USER)) //使用权限拦截
    @Get('list')
    async queryCategoryList(@Body() body:any){
        return await this.categoryService.queryCategories(body)
    }

    //获取单条详情
    @UseGuards(new RbacGuard(role.GUEST))
    @UseGuards(AuthGuard('jwt'))
    @ApiBody({
        description:"分类ID",
        type: Number,
        required: true
    })
    @Get(':id')
    async queryCategoryById(@Param() params: CreateAntDeleteCategoryDTO){
        return await this.categoryService.queryCategoryById(params)
    }

    //新建分类
    @UseGuards(new RbacGuard(role.USER))
    @UseGuards(AuthGuard('jwt'))
    @Post('create')
    async createCategory(@Body() body: CreateCategoryDTO, @Request() req: any){
        return await this.categoryService.createCategory(body, req.user)
    }
    
    //修改分类
    @UseGuards(new RbacGuard(role.USER))
    @UseGuards(AuthGuard('jwt'))
    // @UseInterceptors(new RbacInterceptor(role.USER))
    @Post('update')
    async updateCategory(@Body() body: UpdateCategoryDTO, @Request() req: any){
        return await this.categoryService.updateCategory(body, req.user)
    }

    //删除分类
    @UseGuards(new RbacGuard(role.USER))
    @UseGuards(AuthGuard('jwt'))
    // @UseInterceptors(new RbacInterceptor(role.USER))
    @Delete('delete')
    async deleteCategory(@Body() body: CreateAntDeleteCategoryDTO, @Request() req: any){
        return await this.categoryService.deleteCategory(body, req.user)
    }
}
