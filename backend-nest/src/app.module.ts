import { UserController } from './logical/user/user.controller';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './logical/user/user.module';
import { AuthModule } from './logical/auth/auth.module';
import { ArticleService } from './logical/article/article.service';
import { CategoryService } from './logical/category/category.service';
import { CategoryController } from './logical/category/category.controller';

@Module({
  imports: [UserModule, AuthModule],
  controllers: [AppController, UserController, CategoryController],
  providers: [AppService, ArticleService, CategoryService],
})
export class AppModule {}
