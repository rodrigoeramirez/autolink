import { isString } from "class-validator";

export class CreateAutoDto {
  @isString()
  modelo: string;

  @isString()
  patente: string;
}
