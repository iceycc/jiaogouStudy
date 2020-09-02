import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostModule } from './post/post.module';
import { UserModule } from './user/user.module';
// import { LoggerService } from './logger/logger.service';

@Module({
  imports: [ PostModule, UserModule], // 依赖外面的模块(可以是自己创建的比如userModule，或者是官方提供的比如typeorm, graphql,或者第三方的)
  controllers: [AppController], // 该模块所用到的控制器
  providers: [
    AppService, 
    // LoggerService
  ], // 该模块的提供者
  exports: [], // 别的模块要使用该模块中的某几个方法，就要在这里对外暴漏
})
export class AppModule {}