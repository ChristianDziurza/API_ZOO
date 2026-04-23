import Animals from "../typeorm/entities/Animals";
interface IRequest {
    section: number;
}
export default class CreateAnimalService {
    execute({ section }: IRequest): Promise<Animals>;
}
export {};
//# sourceMappingURL=ShowAnimalSectionService.d.ts.map