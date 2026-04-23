import AppError from "@shared/errors/AppError";
import { AppDataSource } from "@shared/typeorm/data-source";
import Animals from "../typeorm/entities/Animals";


export default class CreateAnimalService{
    public async execute(): Promise<Animals[]>{
        const animalsRepository = AppDataSource.getRepository(Animals);

        return animalsRepository.find();
    }
}