import { AppDataSource } from "@shared/typeorm/data-source";
import { Repository } from "typeorm";
import Animal from "../entities/Animals";

export default class AnimalRepository{
    private ormRepository: Repository<Animal>;

    constructor(){
        this.ormRepository = AppDataSource.getRepository(Animal);
    }

    public async findByName(name: string): Promise<Animal | null>{
        const animal = await this.ormRepository.findOne({
            where: {name},
        });
        
        return animal;
    }
}