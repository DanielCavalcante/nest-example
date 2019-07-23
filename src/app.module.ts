import { Module } from '@nestjs/common'
import { BackofficeModule } from './backoffice/backoffice.module'
import { TypeOrmModule } from '@nestjs/typeorm'
import { MongooseModule } from '@nestjs/mongoose'
import { StoreModule } from './store/store.module';

@Module({
  imports: [
    MongooseModule.forRoot(''),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '10.0.13.12',
      port: 3306,
      username: 'root',
      password: 'ar7711',
      database: 'area_clientes_softcom',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true
    }),
    BackofficeModule,
    StoreModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
