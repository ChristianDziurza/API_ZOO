"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("@shared/typeorm/data-source");
const Animals_1 = __importDefault(require("../typeorm/entities/Animals"));
class CreateAnimalService {
    async execute() {
        const animalsRepository = data_source_1.AppDataSource.getRepository(Animals_1.default);
        return animalsRepository.find();
    }
}
exports.default = CreateAnimalService;
//# sourceMappingURL=ListAnimalService.js.map