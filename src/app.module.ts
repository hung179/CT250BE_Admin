import { Module } from '@nestjs/common';
import { BookStoreModule } from './Bookstore/module/bookstore.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ShippingInformationModule } from './ShippingInformation/module/shipInfor.module';
import { RedisModule } from './redis/redis.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        uri: configService.get<string>('MONGO_URI'),
      }),
    }),
    BookStoreModule,
    ShippingInformationModule,
    RedisModule
  ],  controllers: [],
  providers: [],
})
export class AppModule {}
