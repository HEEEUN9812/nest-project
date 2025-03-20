import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    // ConfigModule.forRoot({
    //   isGlobal: true,
    // }),
    MongooseModule.forRootAsync({
      // imports: [ConfigModule],
      // inject: [ConfigModule],
      // useFactory: async (configService: ConfigService) => ({
      // uri: configService.get<string>('MONGO_URI'),
      // dbName: configService.get<string>('MONGO_DB'),
      useFactory: async () => ({
        uri: 'mongodb://localhost:27017',
        dbName: 'test',
      }),
    }),
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
