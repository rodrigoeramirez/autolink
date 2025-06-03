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
    async findAll() {
        try {
            const autos = await this.prisma.auto.findMany({ where: { fechaBaja: null },
                select: { modelo: true,
                    marca: true,
                    año: true,
                    precio: true,
                    estado: true
                }
            });
            if (autos) {
                return autos;
            }
            else {
                return "No existen autos disponibles";
            }
        }
        catch (error) {
            console.error("Error al obtener los autos desde la BD:" + error.message);
            throw new common_1.InternalServerErrorException("Error al obtener los autos desde la BD.");
        }
    }
    findOne(id) {
        return `This action returns a #${id} auto`;
    }
    update(id, updateAutoDto) {
        return `This action updates a #${id} auto`;
    }
    remove(id) {
        return `This action removes a #${id} auto`;
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