"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var AutosService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutosService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const common_2 = require("@nestjs/common");
let AutosService = AutosService_1 = class AutosService {
    prisma;
    logger = new common_2.Logger(AutosService_1.name);
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createAutoDto) {
        if ((await this.patenteDisponible(createAutoDto.patente)) === false) {
            throw new common_1.ConflictException("La patente ingresada ya se encuentra registrada en la base de datos.");
        }
        const errores = this.validarPatente(createAutoDto.patente);
        if (errores.length > 0) {
            throw new common_1.BadRequestException({
                message: "Patente invalida, debe tener el siguiente formato: ABC123 o AB123CD",
                errors: errores
            });
        }
        try {
            const nuevoAuto = await this.prisma.auto.create({
                data: createAutoDto,
            });
            return nuevoAuto;
        }
        catch (error) {
            this.logger.error(`Error al crear auto: ${error.message}`, error.stack);
            throw new common_1.InternalServerErrorException('Error desconocido en el servidor.');
        }
    }
    async findAll(page = 1, pageSize = 10, filters) {
        try {
            const skip = (page - 1) * pageSize;
            const where = {
                fechaBaja: null,
            };
            if (filters) {
                if (filters.marca) {
                    where.marca = { contains: filters.marca, mode: 'insensitive' };
                }
                if (filters.estado) {
                    where.estado = filters.estado;
                }
                if (filters.añoMin || filters.añoMax) {
                    where.año = {};
                    if (filters.añoMin)
                        where.año.gte = filters.añoMin;
                    if (filters.añoMax)
                        where.año.lte = filters.añoMax;
                }
                if (filters.precioMin || filters.precioMax) {
                    where.precio = {};
                    if (filters.precioMin)
                        where.precio.gte = filters.precioMin;
                    if (filters.precioMax)
                        where.precio.lte = filters.precioMax;
                }
            }
            const [autos, total] = await Promise.all([
                this.prisma.auto.findMany({
                    where,
                    select: {
                        modelo: true,
                        marca: true,
                        año: true,
                        precio: true,
                        estado: true
                    },
                    skip,
                    take: pageSize,
                    orderBy: { año: 'asc' }
                }),
                this.prisma.auto.count({ where })
            ]);
            const totalPages = Math.ceil(total / pageSize);
            return {
                data: autos,
                pagination: {
                    total,
                    page,
                    pageSize,
                    totalPages,
                    hasNextPage: page < totalPages,
                    hasPrevPage: page > 1
                }
            };
        }
        catch (error) {
            console.error("Error en autosService.findAll:", error);
            throw new common_1.InternalServerErrorException("Error al obtener autos");
        }
    }
    async findOne(patente) {
        const errores = this.validarPatente(patente);
        if (errores.length > 0) {
            throw new common_1.BadRequestException({
                message: "Patente invalida, debe tener el siguiente formato: ABC123 o AB123CD",
                errors: errores
            });
        }
        if ((await this.patenteDisponible(patente)) === true) {
            throw new common_1.NotFoundException("La patente ingresada no se encuentra registrada en la base de datos.");
        }
        try {
            const auto = await this.prisma.auto.findUnique({ where: { patente } });
            if (auto) {
                return {
                    message: "Auto encontrado",
                    auto: auto
                };
            }
            else {
                return "Auto no encontrado, vericar ID ingresado";
            }
        }
        catch (error) {
            console.error("Hubo un error al recuperar el auto:" + error.message);
            throw new common_1.InternalServerErrorException("Error desconocido al recuperar el auto, ver consola para más información.");
        }
    }
    update(id, updateAutoDto) {
        return `This action updates a #${id} auto`;
    }
    async remove(patente) {
        const errores = this.validarPatente(patente);
        if (errores.length > 0) {
            throw new common_1.BadRequestException({
                message: "Patente invalida, debe tener el siguiente formato: ABC123 o AB123CD",
                errors: errores
            });
        }
        if ((await this.patenteDisponible(patente)) === true) {
            throw new common_1.NotFoundException("La patente ingresada no se encuentra registrada en la base de datos.");
        }
        try {
            const autoBaja = await this.prisma.auto.update({
                where: { patente },
                data: { fechaBaja: new Date() },
                select: {
                    marca: true,
                    modelo: true,
                    año: true,
                    fechaBaja: true
                }
            });
            return {
                message: "Auto dado de baja correctamente",
                auto: autoBaja
            };
        }
        catch (error) {
            console.error("Ha ocurrido un error al dar de baja el auto:" + error.message);
            throw new common_1.InternalServerErrorException("Ha ocurrido un error al dar de baja el auto en la BD.");
        }
    }
    async patenteDisponible(patente) {
        try {
            const auto = await this.prisma.auto.findUnique({
                where: { patente },
            });
            if (auto) {
                return false;
            }
            else {
                return true;
            }
        }
        catch (error) {
            console.error("Error al verificar si la patente está disponible:" + error.message);
            throw new common_1.InternalServerErrorException("Error al verificar si la patente está disponible");
        }
    }
    validarPatente(patente) {
        let errores = [];
        if (patente.length === 6) {
            const primerosTres = patente.substring(0, 3);
            if (!/^[A-Za-z]{3}$/.test(primerosTres)) {
                errores.push("Los primeros 3 caracteres deben ser letras.");
            }
            const ultimosTres = patente.substring(3, 6);
            if (!/^\d{3}$/.test(ultimosTres)) {
                errores.push("Los últimos 3 caracteres deben ser números.");
            }
        }
        else if (patente.length === 7) {
            const primerosDos = patente.substring(0, 2);
            if (!/^[A-Za-z]{2}$/.test(primerosDos)) {
                errores.push("Los primeros 2 caracteres deben ser letras.");
            }
            const medioTres = patente.substring(2, 5);
            if (!/^\d{3}$/.test(medioTres)) {
                errores.push("Los 3 caracteres del medio deben ser números.");
            }
            const ultimosDos = patente.substring(5, 7);
            if (!/^[A-Za-z]{2}$/.test(ultimosDos)) {
                errores.push("Los ultimos 2 caracteres deben ser letras.");
            }
        }
        else {
            errores.push("La longitud de la patente debe ser de 6 o 7 caracteres.");
        }
        return errores;
    }
};
exports.AutosService = AutosService;
exports.AutosService = AutosService = AutosService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AutosService);
//# sourceMappingURL=autos.service.js.map