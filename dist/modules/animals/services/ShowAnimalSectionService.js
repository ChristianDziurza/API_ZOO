"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AppError_1 = __importDefault(require("@shared/errors/AppError"));
const data_source_1 = require("@shared/typeorm/data-source");
const Animals_1 = __importDefault(require("../typeorm/entities/Animals"));
class CreateAnimalService {
    async execute({ section }) {
        const animalsRepository = data_source_1.AppDataSource.getRepository(Animals_1.default);
        const sections = await animalsRepository.findOneBy({ section });
        if (!sections) {
            throw new AppError_1.default("Section not found.");
        }
        return sections;
    }
}
exports.default = CreateAnimalService;
//# sourceMappingURL=ShowAnimalSectionService.js.map