import { Module } from '@nestjs/common'
import { BackofficeModule } from './backoffice/backoffice.module'
import { TypeOrmModule } from '@nestjs/typeorm'
import { MongooseModule } from '@nestjs/mongoose'
import { StoreModule } from './store/store.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './shared/services/auth.service';
import { JwtStrategy } from './shared/strategies/jwt.strategy';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secretOrPrivateKey: 'secretKey',
      signOptions: {
        expiresIn: 3600
      }
    }),
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
  providers: [AuthService, JwtStrategy],
})
export class AppModule {}
