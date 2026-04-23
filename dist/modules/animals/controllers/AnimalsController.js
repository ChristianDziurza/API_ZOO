"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ListAnimalService_1 = __importDefault(require("../services/ListAnimalService"));
const CreateAnimalService_1 = __importDefault(require("../services/CreateAnimalService"));
const DeleteAnimalService_1 = __importDefault(require("../services/DeleteAnimalService"));
const UpdateAnimalService_1 = __importDefault(require("../services/UpdateAnimalService"));
const UpdateAnimalFoodTypeService_1 = __importDefault(require("../services/UpdateAnimalFoodTypeService"));
const ShowAnimalService_1 = __importDefault(require("../services/ShowAnimalService"));
const ShowAnimalSectionService_1 = __importDefault(require("../services/ShowAnimalSectionService"));
class AnimalsController {
    async index(request, response, next) {
        try {
            const listAnimals = new ListAnimalService_1.default();
            const animals = await listAnimals.execute();
            return response.json(animals);
        }
        catch (err) {
            next(err);
        }
    }
    async show(request, response, next) {
        try {
            const id = request.params.id;
            const showAnimal = new ShowAnimalService_1.default();
            const animal = await showAnimal.execute({ id });
            return response.json(animal);
        }
        catch (err) {
            next(err);
        }
    }
    async showSection(request, response, next) {
        try {
            const { section } = request.body;
            const showAnimalSection = new ShowAnimalSectionService_1.default();
            const animal = await showAnimalSection.execute({ section });
            return response.json(animal);
        }
        catch (err) {
            next(err);
        }
    }
    async create(request, response, next) {
        try {
            const { name, scientific_name, food_type, age, section } = request.body;
            const createAnimal = new CreateAnimalService_1.default();
            const animal = await createAnimal.execute({
                name,
                scientific_name,
                food_type,
                age,
                section,
            });
            return response.status(201).json(animal);
        }
        catch (err) {
            next(err);
        }
    }
    async update(request, response, next) {
        try {
            const id = request.params.id;
            const { name, scientific_name, food_type, age, section } = request.body;
            const updateAnimal = new UpdateAnimalService_1.default();
            const animal = await updateAnimal.execute({
                id,
                name,
                scientific_name,
                food_type,
                age,
                section,
            });
            return response.json(animal);
        }
        catch (err) {
            next(err);
        }
    }
    async updateFood(request, response, next) {
        try {
            const id = request.params.id;
            const { name, food_type } = request.body;
            const updateAnimalFood = new UpdateAnimalFoodTypeService_1.default();
            const animal = await updateAnimalFood.execute({
                id,
                name,
                food_type,
            });
            return response.json(animal);
        }
        catch (err) {
            next(err);
        }
    }
    async delete(request, response, next) {
        try {
            const id = request.params.id;
            const deleteAnimal = new DeleteAnimalService_1.default();
            await deleteAnimal.execute({ id });
            return response.status(204).send();
        }
        catch (err) {
            next(err);
        }
    }
}
exports.default = AnimalsController;
//# sourceMappingURL=AnimalsController.js.map