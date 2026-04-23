interface IRequest {
    id: string;
}
export default class CreateAnimalService {
    execute({ id }: IRequest): Promise<void>;
}
export {};
//# sourceMappingURL=DeleteAnimalService.d.ts.map