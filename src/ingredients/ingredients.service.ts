import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ingredient } from './entities/ingredient.entity';
import { CreateIngredientDto } from './dto/create-ingredient.dto';
import { UpdateIngredientDto } from './dto/update-ingredient.dto';

@Injectable()
export class IngredientsService {

  constructor(
    @InjectRepository(Ingredient)
    private ingredientRepository: Repository<Ingredient>,
  ){}

  create(createIngredientDto: CreateIngredientDto) {
    const nuevo = this.ingredientRepository.create(createIngredientDto);
    return this.ingredientRepository.save(nuevo);
  }

  findAll() {
    return this.ingredientRepository.find();
  }

  async update(id: number, updateIngredientDto: UpdateIngredientDto) {
    await this.ingredientRepository.update(id, updateIngredientDto);
    return this.ingredientRepository.findOneBy({id});
  }

  remove(id: number) {
    return this.ingredientRepository.delete(id);
  }
}


  //Methodos que se podrían iuncluir mas adelante :)
  /*
  findOne(id: number) {
    return `This action returns a #${id} ingredient`;
  }
*/