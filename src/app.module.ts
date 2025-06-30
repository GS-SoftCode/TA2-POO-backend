import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { User } from './entities/user.entity';
import { IngredientsModule } from './ingredients/ingredients.module';
import { Ingredient } from './ingredients/entities/ingredient.entity';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'annieraptor',
      database: 'roles_db',
      entities: [User, Ingredient],
      synchronize: true, 
    }),
    UsersModule,
    AuthModule,
    IngredientsModule,
    Ingredient
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
