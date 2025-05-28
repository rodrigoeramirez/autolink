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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutosService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const common_2 = require("@nestjs/common");
let AutosService = class AutosService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createAutoDto) {
        try {
            const nuevoAuto = await this.prisma.auto.create({
                data: createAutoDto,
            });
            return nuevoAuto;
        }
        catch (error) {
            common_2.Logger.error("Error al crear el auto:" + error.message);
            throw new common_1.InternalServerErrorException('Error al crear el auto');
        }
    }
    findAll() {
        return `This action returns all autos`;
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
};
exports.AutosService = AutosService;
exports.AutosService = AutosService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AutosService);
//# sourceMappingURL=autos.service.js.map