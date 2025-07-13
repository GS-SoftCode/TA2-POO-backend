import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository,ILike} from 'typeorm';
import { Ingredient } from './entities/ingredient.entity';
import { CreateIngredientDto } from './dto/create-ingredient.dto';
import { UpdateIngredientDto } from './dto/update-ingredient.dto';
import { IngredientHistory } from './entities/ingredient-history.entity';

@Injectable()
export class IngredientsService {

  constructor(
    @InjectRepository(Ingredient)
    private ingredientRepository: Repository<Ingredient>,
    @InjectRepository(IngredientHistory)
    private historyRepository: Repository<IngredientHistory>,
  ){}

  async create(createIngredientDto: CreateIngredientDto) {
  const nuevo = this.ingredientRepository.create(createIngredientDto);
  const saved = await this.ingredientRepository.save(nuevo);

  await this.historyRepository.save({
    ingredientId: saved.id,
    action: 'CREATED',
    before: null,
    after: saved,
  });

  return saved;
}

  async findAll(search?: string): Promise<Ingredient[]> {
  if (search) {
    return this.ingredientRepository.find({
      where: { nombre: ILike(`%${search}%`) },
      order: { nombre: 'ASC' }
    });
  }
  return this.ingredientRepository.find({ order: { nombre: 'ASC' } });
}

  async update(id: number, updateIngredientDto: UpdateIngredientDto) {
    const before = await this.ingredientRepository.findOne({ where: { id } });
    const result = await this.ingredientRepository.update(id, updateIngredientDto);
    const after = await this.ingredientRepository.findOne({ where: { id } });

    await this.historyRepository.save({
      ingredientId: id,
      action: 'UPDATED',
      before,
      after,
    });

    return result;
  }

  async remove(id: number) {
    const before = await this.ingredientRepository.findOne({ where: { id } });
    const result = await this.ingredientRepository.delete(id);

    await this.historyRepository.save({
      ingredientId: id,
      action: 'DELETED',
      before,
      after: null,
    });

    return result;
  }

  async getHistory(): Promise<IngredientHistory[]> {
    return this.historyRepository.find({ order: { fecha: 'DESC' } });
  }
}


  //Methodos que se podrían iuncluir mas adelante :)
  /*
  findOne(id: number) {
    return `This action returns a #${id} ingredient`;
  }
*/