"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAutoDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_auto_dto_1 = require("./create-auto.dto");
class UpdateAutoDto extends (0, mapped_types_1.PartialType)(create_auto_dto_1.CreateAutoDto) {
}
exports.UpdateAutoDto = UpdateAutoDto;
//# sourceMappingURL=update-auto.dto.js.map