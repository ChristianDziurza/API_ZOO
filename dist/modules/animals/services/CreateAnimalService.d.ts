import Animals from "../typeorm/entities/Animals";
interface IRequest {
    name: string;
    scientific_name: string;
    food_type: string;
    age: number;
    section: number;
}
export default class CreateAnimalService {
    execute({ name, scientific_name, food_type, age, section }: IRequest): Promise<Animals>;
}
export {};
//# sourceMappingURL=CreateAnimalService.d.ts.map