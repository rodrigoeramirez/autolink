import { EstadoAuto } from "generated/prisma";
export declare class CreateAutoDto {
    patente: string;
    modelo: string;
    marca: string;
    año: number;
    precio: number;
    estado?: EstadoAuto;
    fechaBaja?: Date;
}
