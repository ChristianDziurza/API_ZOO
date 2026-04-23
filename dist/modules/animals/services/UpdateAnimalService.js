"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AppError_1 = __importDefault(require("@shared/errors/AppError"));
const data_source_1 = require("@shared/typeorm/data-source");
const Animals_1 = __importDefault(require("../typeorm/entities/Animals"));
class CreateAnimalService {
    async execute({ id, name, scientific_name, food_type, age, section }) {
        const animalsRepository = data_source_1.AppDataSource.getRepository(Animals_1.default);
        const animal = await animalsRepository.findOneBy({ id });
        if (!animal) {
            throw new AppError_1.default("Animal not found.");
        }
        const animalExists = await animalsRepository.findOneBy({ name });
        if (animalExists && animalExists.id !== animal.id) {
            throw new AppError_1.default("There is alredy one animal with this name.");
        }
        animal.name = name;
        animal.scientific_name = scientific_name;
        animal.food_type = food_type;
        animal.age = age;
        animal.section = section;
        await animalsRepository.save(animal);
        return animal;
    }
}
exports.default = CreateAnimalService;
//# sourceMappingURL=UpdateAnimalService.js.map