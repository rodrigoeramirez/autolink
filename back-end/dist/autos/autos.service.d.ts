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
    findAll(): Promise<{
        modelo: string;
        marca: string;
        año: number;
        precio: import("generated/prisma/runtime/library").Decimal;
        estado: import("generated/prisma").$Enums.EstadoAuto;
    }[] | "No existen autos disponibles">;
    findOne(id: number): string;
    update(id: number, updateAutoDto: UpdateAutoDto): string;
    remove(id: number): string;
    patenteDisponible(patente: string): Promise<boolean>;
    validarPatente(patente: string): string[];
}
