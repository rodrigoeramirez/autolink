import { CreateAutoDto } from './create-auto.dto';
import { EstadoAuto } from 'generated/prisma';
declare const UpdateAutoDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateAutoDto>>;
export declare class UpdateAutoDto extends UpdateAutoDto_base {
    patente: string;
    modelo: string;
    marca: string;
    precio: number;
    año: number;
    estado?: EstadoAuto;
    fechaBaja?: Date;
}
export {};
