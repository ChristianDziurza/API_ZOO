import Animal from "../entities/Animals";
export default class AnimalRepository {
    private ormRepository;
    constructor();
    findByName(name: string): Promise<Animal | null>;
}
//# sourceMappingURL=AnimalRepository.d.ts.map