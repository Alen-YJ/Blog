import { IsNotEmpty, IsNumber, IsString } from 'class-validator'
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'

export interface IId{
    id: number
}

export class CreateCategoryDTO {
    @ApiProperty()
    @IsNotEmpty({ message:"分类名称不能为空" })
    @IsString()
    readonly title: string;
    @ApiPropertyOptional()
    @IsNumber()
    readonly parent_id: number;
}

export class UpdateCategoryDTO {
    @ApiProperty()
    @IsNotEmpty({ message:"分类ID不能为空" })
    readonly id: number;
    @ApiPropertyOptional()
    readonly title: string;
    @ApiPropertyOptional()
    readonly parent_id: number;
}