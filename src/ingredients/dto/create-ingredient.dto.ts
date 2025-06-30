import {  IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateIngredientDto {
@IsNotEmpty()
@IsString()
nombre: string;

@IsNotEmpty()
@IsNumber()
precio: number;

@IsOptional()
@IsString() 
unidad?: string;
}