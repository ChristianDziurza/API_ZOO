import AppError from "@shared/errors/AppError";
import { AppDataSource } from "@shared/typeorm/data-source";
import Animals from "../typeorm/entities/Animals";

interface IRequest {
    name: string;
    scientific_name: string;
    food_type: string;
    age: number;
    section: number;
}

export default class CreateAnimalService{
    public async execute({name, scientific_name, food_type, age, section}: IRequest): Promise<Animals>{
        const animalsRepository = AppDataSource.getRepository(Animals);

        const animalExists = await animalsRepository.findOne({
            where: {name},
        });

        if (animalExists){
            throw new AppError("There is alredy one animal with this name.");
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