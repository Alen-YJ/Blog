import { IsNotEmpty, IsString, IsNumber } from 'class-validator'
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'

export class CreateArticleDTO {
    @ApiProperty()
    @IsNotEmpty({ message: '标题不能为空' })
    readonly title: string;

    @ApiProperty()
    @IsNotEmpty({ message:"内容不能为空" })
    readonly content: string;

    @ApiProperty()
    @IsNotEmpty({ message:"分类不能为空" })
    readonly category_id: number;

    @ApiPropertyOptional()
    readonly visible?: number;

    @ApiPropertyOptional()
    readonly user_id?: number;

    @ApiPropertyOptional()
    readonly top?: number;
}

export class UpdateArticleDTO extends CreateArticleDTO {
    @ApiProperty()
    @IsNotEmpty({ message:"ID不能为空" })
    readonly id: number;
}

export class ArticleID {
    @ApiProperty()
    @IsNotEmpty({ message:"ID不能为空" })
    readonly id: number;
}