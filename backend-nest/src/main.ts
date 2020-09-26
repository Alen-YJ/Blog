import { INestApplication } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from 'express'
import LoggerMiddleware from './middleware/logger.middleware'
import { TransformInterceptor } from './interceptor/transform.interceptor'
import { HttpExceptionFilter } from './filter/http-exception.filter'
import { AllExceptionFilter } from './filter/any-exception.filter'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'

async function bootstrap() {
    const app: INestApplication = await NestFactory.create(AppModule);
    app.use(express.json())
    app.use(express.urlencoded({ extended: true }))
    //日志
    app.use( LoggerMiddleware.use )
    //拦截器打印出参
    app.useGlobalInterceptors(new TransformInterceptor())
    //过滤器 处理异常
    app.useGlobalFilters(new AllExceptionFilter())
    app.useGlobalFilters(new HttpExceptionFilter())
    //配置文档Swagger
    const options = new DocumentBuilder().addBearerAuth().setTitle('Blog').setDescription('Blog API description').setVersion('1.0').addTag('test').build()
    const document = SwaggerModule.createDocument(app, options)
    SwaggerModule.setup('api-doc', app, document)

    await app.listen(3000);
}
bootstrap();
