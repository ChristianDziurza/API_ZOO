import Animals from "../typeorm/entities/Animals";
interface IRequest {
    id: string;
    name: string;
    scientific_name: string;
    food_type: string;
    age: number;
    section: number;
}
export default class CreateAnimalService {
    execute({ id, name, scientific_name, food_type, age, section }: IRequest): Promise<Animals>;
}
export {};
//# sourceMappingURL=UpdateAnimalService.d.ts.map