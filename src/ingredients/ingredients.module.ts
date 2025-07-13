import { Module } from '@nestjs/common';
import { IngredientsService } from './ingredients.service';
import { IngredientsController } from './ingredients.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ingredient } from './entities/ingredient.entity';
import { IngredientHistory } from './entities/ingredient-history.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Ingredient, IngredientHistory])],
  controllers: [IngredientsController],
  providers: [IngredientsService],
})
export class IngredientsModule {}
