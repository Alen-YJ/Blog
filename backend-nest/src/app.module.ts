import { UserController } from './logical/user/user.controller';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './logical/user/user.module';
import { AuthModule } from './logical/auth/auth.module';
import { ArticleService } from './logical/article/article.service';
import { CategoryService } from './logical/category/category.service';
import { CategoryController } from './logical/category/category.controller';
import { ArticleController } from './logical/article/article.controller';
import { CosService } from './logical/cos/cos.service';
import { CosController } from './logical/cos/cos.controller';
import { SettingController } from './logical/setting/setting.controller';
import { SettingService } from './logical/setting/setting.service';

@Module({
  imports: [UserModule, AuthModule],
  controllers: [AppController, UserController, CategoryController, ArticleController, CosController, SettingController],
  providers: [AppService, ArticleService, CategoryService, CosService, SettingService],
})
export class AppModule {}
