import { CreateAutoDto } from './dto/create-auto.dto';
import { UpdateAutoDto } from './dto/update-auto.dto';
import { PrismaService } from "src/prisma/prisma.service";
export declare class AutosService {
    private prisma;
    private readonly logger;
    constructor(prisma: PrismaService);
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
    findAll(page?: number, pageSize?: number, filters?: {
        marca?: string;
        estado?: string;
        añoMin?: number;
        añoMax?: number;
        precioMin?: number;
        precioMax?: number;
    }): Promise<{
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
    update(id: string, updateAutoDto: UpdateAutoDto): Promise<{
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
    } | undefined>;
    remove(patente: string): Promise<{
        message: string;
        auto: {
            modelo: string;
            marca: string;
            año: number;
            fechaBaja: Date | null;
        };
    }>;
    patenteDisponible(patente: string): Promise<boolean>;
    validarPatente(patente: string): string[];
}
