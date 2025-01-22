import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { HomeMiddleware } from './common/middleware/home.middleware';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public/build/web'),
      exclude: ['/api*'],
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(HomeMiddleware).forRoutes({ path: '/', method: RequestMethod.ALL })
    consumer.apply(LoggerMiddleware).forRoutes({ path: '/test', method: RequestMethod.ALL })
  }
}
