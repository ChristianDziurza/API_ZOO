import { Request, Response, NextFunction } from "express";
import ListAnimalService from "../services/ListAnimalService";
import CreateAnimalService from "../services/CreateAnimalService";
import DeleteAnimalService from "../services/DeleteAnimalService";
import UpdateAnimalService from "../services/UpdateAnimalService";
import UpdateAnimalFoodTypeService from "../services/UpdateAnimalFoodTypeService";
import ShowAnimalService from "../services/ShowAnimalService";


export default class AnimalsController{
    public async index(
        request: Request,
        response: Response,
        next: NextFunction,
    ): Promise<Response | void> {
        try{
            const listAnimals = new ListAnimalService();
            const animals = await listAnimals.execute();

            return response.json(animals);
        }catch(err){
            next(err);
        }
    }
    public async show(
        request: Request,
        response: Response,
        next: NextFunction,
    ): Promise<Response | void>{
        try{
            const id = request.params.id as string;

            const showAnimal = new ShowAnimalService();
            const animal = await showAnimal.execute({id});
            
            return response.json(animal);
        } catch(err){
            next(err);
        }
    }
    public async create(
        request: Request,
        response: Response,
        next: NextFunction,
    ): Promise<Response | void>{
        try{
            const {name, scientific_name, food_type, age, section} = request.body;

            const createAnimal = new CreateAnimalService();
            const animal = await createAnimal.execute({
                name,
                scientific_name,
                food_type,
                age,
                section,
            });
            
            return response.status(201).json(animal);
        } catch(err){
            next(err);
        }
    }
    public async update(
        request: Request,
        response: Response,
        next: NextFunction,
    ): Promise<Response | void>{
        try{
            const id = request.params.id as string;
            const {name, scientific_name, food_type, age, section} = request.body;

            const updateAnimal = new UpdateAnimalService();
            const animal = await updateAnimal.execute({
                id,
                name,
                scientific_name,
                food_type,
                age,
                section,
            });
            
            return response.json(animal);
        } catch(err){
            next(err);
        }
    }
    public async updateFood(
        request: Request,
        response: Response,
        next: NextFunction,
    ): Promise<Response | void>{
        try{
            const id = request.params.id as string;
            const {name, food_type} = request.body;

            const updateAnimalFood = new UpdateAnimalFoodTypeService();
            const animal = await updateAnimalFood.execute({
                id,
                name,
                food_type,
            });
            
            return response.json(animal);
        } catch(err){
            next(err);
        }
    }
    public async delete(
        request: Request,
        response: Response,
        next: NextFunction,
    ): Promise<Response | void>{
        try{
            const id = request.params.id as string;

            const deleteAnimal = new DeleteAnimalService();
            await deleteAnimal.execute({id});
            
            return response.status(204).send();
        } catch(err){
            next(err);
        }
    }
}