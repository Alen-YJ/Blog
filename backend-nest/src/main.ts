import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from 'express'
import LoggerMiddleware from './middleware/logger.middleware'
import { TransformInterceptor } from './interceptor/transform.interceptor'
import { HttpExceptionFilter } from './filter/http-exception.filter'
import { AllExceptionFilter } from './filter/any-exception.filter'

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.use(express.json())
    app.use(express.urlencoded({ extended: true }))
    //日志
    app.use( LoggerMiddleware.use )
    //拦截器打印出参
    app.useGlobalInterceptors(new TransformInterceptor())
    //过滤器 处理异常
    app.useGlobalFilters(new AllExceptionFilter())
    app.useGlobalFilters(new HttpExceptionFilter())
    await app.listen(3000);
}
bootstrap();
