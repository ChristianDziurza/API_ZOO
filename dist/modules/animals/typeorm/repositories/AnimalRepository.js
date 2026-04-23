"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("@shared/typeorm/data-source");
const Animals_1 = __importDefault(require("../entities/Animals"));
class AnimalRepository {
    ormRepository;
    constructor() {
        this.ormRepository = data_source_1.AppDataSource.getRepository(Animals_1.default);
    }
    async findByName(name) {
        const animal = await this.ormRepository.findOne({
            where: { name },
        });
        return animal;
    }
}
exports.default = AnimalRepository;
//# sourceMappingURL=AnimalRepository.js.map