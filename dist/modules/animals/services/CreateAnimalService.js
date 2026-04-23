"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AppError_1 = __importDefault(require("@shared/errors/AppError"));
const data_source_1 = require("@shared/typeorm/data-source");
const Animals_1 = __importDefault(require("../typeorm/entities/Animals"));
class CreateAnimalService {
    async execute({ name, scientific_name, food_type, age, section }) {
        const animalsRepository = data_source_1.AppDataSource.getRepository(Animals_1.default);
        const animalExists = await animalsRepository.findOne({
            where: { name },
        });
        if (animalExists) {
            throw new AppError_1.default("There is alredy one animal with this name.");
        }
        const animal = animalsRepository.create({
            name,
            scientific_name,
            food_type,
            age,
            section,
        });
        await animalsRepository.save(animal);
        return animal;
    }
}
exports.default = CreateAnimalService;
//# sourceMappingURL=CreateAnimalService.js.map