import { Router } from "express";
import { celebrate, Joi, Segments } from "celebrate";
import AnimalsController from "../controllers/AnimalsController";

const animalsRouter = Router();
const animalController = new AnimalsController();

animalsRouter.get('/', async(req, res, next) => {
    try{
        console.log("Get");
        await animalController.index(req,res,next);
    }catch(err){
        next(err);
    }
});

animalsRouter.get("/:id", celebrate({
    [Segments.PARAMS] : {id: Joi.string().uuid().required()}
}), 
    async(req, res, next) => {
    try {
        await animalController.show(req, res, next);
    } catch (err) {
        next(err);
    }
});


animalsRouter.post("/", celebrate({
    [Segments.BODY]:{
        name: Joi.string().required(),
        scientific_name: Joi.string().required(),
        food_type: Joi.string().required(),
        age: Joi.number().precision(2).min(0).required(),
        section: Joi.number().min(0).max(100).required(),
    }
}), 
    async(req, res, next) => {
    try {
        await animalController.create(req, res, next);
    } catch (err) {
        next(err);
    }
});

animalsRouter.put("/:id", celebrate({
    [Segments.PARAMS] : {id: Joi.string().uuid().required()},
    [Segments.BODY]:{
        name: Joi.string().required(),
        scientific_name: Joi.string().required(),
        food_type: Joi.string().required(),
        age: Joi.number().precision(2).min(0).required(),
        section: Joi.number().min(0).max(100).required()
    }
}), 
    async(req, res, next) => {
    try {
        await animalController.update(req, res, next);
    } catch (err) {
        next(err);
    }
});

animalsRouter.patch("/:id", celebrate({
    [Segments.PARAMS] : {id: Joi.string().uuid().required()},
    [Segments.BODY]:{
        name: Joi.string().required(),
        food_type: Joi.string().required()
    }
}), 
    async(req, res, next) => {
    try {
        await animalController.updateFood(req, res, next);
    } catch (err) {
        next(err);
    }
});

animalsRouter.delete("/:id", celebrate({
    [Segments.PARAMS] : {id: Joi.string().uuid().required()}
}), 
    async(req, res, next) => {
    try {
        await animalController.delete(req, res, next);
    } catch (err) {
        next(err);
    }
});

export default animalsRouter;