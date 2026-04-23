import AppError from "@shared/errors/AppError";
import { AppDataSource } from "@shared/typeorm/data-source";
import Animals from "../typeorm/entities/Animals";
import AnimalRepository from "../typeorm/repositories/AnimalRepository";

interface IRequest {
    id: string,
    name: string;
    scientific_name: string;
    food_type: string;
    age: number;
    section: number;
}

export default class CreateAnimalService{
    public async execute({id, name, scientific_name, food_type, age, section}: IRequest): Promise<Animals>{
        const animalsRepository = AppDataSource.getRepository(Animals);

        const animal = await animalsRepository.findOneBy({id});

        if(!animal){
            throw new AppError("Animal not found.");
        }

        const animalExists = await animalsRepository.findOneBy({name});

        if(animalExists &&  animalExists.id !== animal.id){
            throw new AppError("There is alredy one animal with this name.");
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