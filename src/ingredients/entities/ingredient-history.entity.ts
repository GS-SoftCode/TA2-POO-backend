import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity()
export class IngredientHistory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  ingredientId: number;

  @Column()
  action: string;

  @Column('simple-json', { nullable: true })
  before?: any;

  @Column('simple-json', { nullable: true })
  after?: any;

  @CreateDateColumn()
  fecha: Date;
}