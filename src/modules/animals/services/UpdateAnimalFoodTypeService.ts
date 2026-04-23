import AppError from "@shared/errors/AppError";
import { AppDataSource } from "@shared/typeorm/data-source";
import Animals from "../typeorm/entities/Animals";
import AnimalRepository from "../typeorm/repositories/AnimalRepository";

interface IRequest {
    id: string,
    name: string,
    food_type: string;
}

export default class UpdateAnimalFoodTypeServiceAnimalService{
    public async execute({id,food_type, name}: IRequest): Promise<Animals>{
        const animalsRepository = AppDataSource.getRepository(Animals);

        const animal = await animalsRepository.findOneBy({id});

        if(!animal){
            throw new AppError("Animal not found.");
        }

        const animalExists = await animalsRepository.findOneBy({name});

        if(animalExists &&  animalExists.id !== animal.id){
            throw new AppError("There is alredy one animal with this name.");
        }
        
        animal.food_type = food_type;

        await animalsRepository.save(animal);

        return animal;
    }
}