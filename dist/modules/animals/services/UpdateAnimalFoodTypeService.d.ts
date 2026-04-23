import Animals from "../typeorm/entities/Animals";
interface IRequest {
    id: string;
    name: string;
    food_type: string;
}
export default class UpdateAnimalFoodTypeServiceAnimalService {
    execute({ id, food_type, name }: IRequest): Promise<Animals>;
}
export {};
//# sourceMappingURL=UpdateAnimalFoodTypeService.d.ts.map