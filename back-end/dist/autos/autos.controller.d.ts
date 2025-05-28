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
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateAutoDto: UpdateAutoDto): string;
    remove(id: string): string;
}
