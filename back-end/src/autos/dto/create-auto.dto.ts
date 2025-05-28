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
  import { Transform } from 'class-transformer';
  import { EstadoAuto } from "generated/prisma"

export class CreateAutoDto {
    @IsString()
    @IsNotEmpty()
    @Transform(({ value }) => value.toUpperCase()) // Normaliza a mayúsculas
    patente: string;
  
    @IsString()
    @IsNotEmpty()
    modelo: string;
  
    @IsString()
    @IsNotEmpty()
    marca: string;
  
    @IsInt()
    @IsPositive()
    año: number;
  
    @IsDecimal({ decimal_digits: '2' })
    @Transform(({ value }) => parseFloat(value).toFixed(2)) // Formatea a 2 decimales
    precio: number;
  
    @IsOptional()
    @IsEnum(EstadoAuto)
    estado?: EstadoAuto;
  
    @IsOptional()
    fechaBaja?: Date; // Se autogestionará en servicio
}
