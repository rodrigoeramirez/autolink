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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutosController = void 0;
const common_1 = require("@nestjs/common");
const autos_service_1 = require("./autos.service");
const create_auto_dto_1 = require("./dto/create-auto.dto");
const update_auto_dto_1 = require("./dto/update-auto.dto");
let AutosController = class AutosController {
    autosService;
    constructor(autosService) {
        this.autosService = autosService;
    }
    create(createAutoDto) {
        return this.autosService.create(createAutoDto);
    }
    findAll() {
        return this.autosService.findAll();
    }
    findOne(id) {
        return this.autosService.findOne(+id);
    }
    update(id, updateAutoDto) {
        return this.autosService.update(+id, updateAutoDto);
    }
    remove(id) {
        return this.autosService.remove(+id);
    }
};
exports.AutosController = AutosController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_auto_dto_1.CreateAutoDto]),
    __metadata("design:returntype", void 0)
], AutosController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AutosController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AutosController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_auto_dto_1.UpdateAutoDto]),
    __metadata("design:returntype", void 0)
], AutosController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AutosController.prototype, "remove", null);
exports.AutosController = AutosController = __decorate([
    (0, common_1.Controller)('autos'),
    __metadata("design:paramtypes", [autos_service_1.AutosService])
], AutosController);
//# sourceMappingURL=autos.controller.js.map