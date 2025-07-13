import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { User } from './entities/user.entity';
import { IngredientsModule } from './ingredients/ingredients.module';
import { Ingredient } from './ingredients/entities/ingredient.entity';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IngredientHistory } from './ingredients/entities/ingredient-history.entity';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'annieraptor',
      database: 'roles_db',
      entities: [User, Ingredient, IngredientHistory],
      synchronize: true, 
    }),
    UsersModule,
    AuthModule,
    IngredientsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
