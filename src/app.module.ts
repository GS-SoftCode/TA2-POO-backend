import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { User } from './entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'annieraptor',
      database: 'roles_db',
      entities: [User],
      synchronize: true, 
    }),
    UsersModule,
    AuthModule,
  ],
})
export class AppModule {}
