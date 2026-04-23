import Animals from "../typeorm/entities/Animals";
interface IRequest {
    id: string;
}
export default class CreateAnimalService {
    execute({ id }: IRequest): Promise<Animals>;
}
export {};
//# sourceMappingURL=ShowAnimalService.d.ts.map