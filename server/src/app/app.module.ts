import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppGateway } from './app.gateway';
import { ConfigModule } from '@nestjs/config';
import { TelegrafModule } from 'nestjs-telegraf';
import { AppBot } from './app.bot';
import { MongooseModule } from '@nestjs/mongoose';
import { AppSchema } from './app.model';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true}),
    MongooseModule.forRoot(process.env.MONGO_TOKEN ?? ''),
    MongooseModule.forFeature([{ name: 'App', schema: AppSchema}]), 
    TelegrafModule.forRoot({token: process.env.TELEGRAM_BOT_TOKEN})
],
  controllers: [AppController],
  providers: [AppService, AppGateway, AppBot],
})
export class AppModule {}
