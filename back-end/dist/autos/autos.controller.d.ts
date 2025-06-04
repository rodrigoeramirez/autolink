import { AutosService } from './autos.service';
import { CreateAutoDto } from './dto/create-auto.dto';
import { UpdateAutoDto } from './dto/update-auto.dto';
export declare class AutosController {
    private readonly autosService;
    constructor(autosService: AutosService);
    create(createAutoDto: CreateAutoDto): Promise<{
        patente: string;
        modelo: string;
        marca: string;
        año: number;
        precio: import("generated/prisma/runtime/library").Decimal;
        estado: import("generated/prisma").$Enums.EstadoAuto;
        fechaBaja: Date | null;
        id: string;
    }>;
    findAll(page?: string, pageSize?: string, marca?: string, estado?: string, añoMin?: number, añoMax?: number, precioMin?: number, precioMax?: number): Promise<{
        data: {
            modelo: string;
            marca: string;
            año: number;
            precio: import("generated/prisma/runtime/library").Decimal;
            estado: import("generated/prisma").$Enums.EstadoAuto;
        }[];
        pagination: {
            total: number;
            page: number;
            pageSize: number;
            totalPages: number;
            hasNextPage: boolean;
            hasPrevPage: boolean;
        };
    }>;
    findOne(patente: string): Promise<"Auto no encontrado, vericar ID ingresado" | {
        message: string;
        auto: {
            patente: string;
            modelo: string;
            marca: string;
            año: number;
            precio: import("generated/prisma/runtime/library").Decimal;
            estado: import("generated/prisma").$Enums.EstadoAuto;
            fechaBaja: Date | null;
            id: string;
        };
    }>;
    update(id: string, updateAutoDto: UpdateAutoDto): string;
    remove(patente: string): Promise<{
        message: string;
        auto: {
            modelo: string;
            marca: string;
            año: number;
            fechaBaja: Date | null;
        };
    }>;
}
