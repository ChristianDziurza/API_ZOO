import AppError from "@shared/errors/AppError";
import { AppDataSource } from "@shared/typeorm/data-source";
import Animals from "../typeorm/entities/Animals";

interface IRequest{
    id: string,
}

export default class CreateAnimalService{
    public async execute({id }: IRequest): Promise<void>{
        const animalsRepository = AppDataSource.getRepository(Animals);

        const animal = await animalsRepository.findOneBy({id});

        if(!animal){
            throw new AppError("Animal not found.");
        }
        await animalsRepository.remove(animal);
    }
}