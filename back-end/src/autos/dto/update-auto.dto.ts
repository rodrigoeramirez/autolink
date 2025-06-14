import { 
    IsString, 
    IsInt, 
    IsPositive, 
    IsDecimal, 
    IsOptional, 
    IsEnum,
    Validate,
    IsNotEmpty
  } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { CreateAutoDto } from './create-auto.dto';
import { EstadoAuto } from 'generated/prisma';
import { Transform } from 'class-transformer';

export class UpdateAutoDto extends PartialType(CreateAutoDto) {

@IsString()    
@IsNotEmpty()
@Transform(({value}) => value.toUpperCase())    
patente:string;

@IsString()
@IsNotEmpty()
modelo:string;

@IsString()
@IsNotEmpty()
marca:string;

@IsDecimal()
@IsNotEmpty()
precio:number;

@IsInt()
@IsNotEmpty()
año:number;

@IsOptional()
estado?:EstadoAuto;

@IsOptional()
fechaBaja?: Date;
}
