import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { LoggerMiddleware } from './middlewares/logger.middleware';
import mongoose from 'mongoose';
import { UserModule } from './router/user/user.module';
import { AuthModule } from './router/auth/auth.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://cmcwebstudy:cmcwebstudy1!@loginpractice.dc4au.mongodb.net/loginPractice?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    ),
    UserModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(LoggerMiddleware).forRoutes('*');
    mongoose.set('debug', true);
  }
}
