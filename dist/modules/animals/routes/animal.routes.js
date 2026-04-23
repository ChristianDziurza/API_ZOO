"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const celebrate_1 = require("celebrate");
const AnimalsController_1 = __importDefault(require("../controllers/AnimalsController"));
const animalsRouter = (0, express_1.Router)();
const animalController = new AnimalsController_1.default();
animalsRouter.get('/', async (req, res, next) => {
    try {
        await animalController.index(req, res, next);
    }
    catch (err) {
        next(err);
    }
});
animalsRouter.get("/:id", (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.PARAMS]: { id: celebrate_1.Joi.string().uuid().required() }
}), async (req, res, next) => {
    try {
        await animalController.show(req, res, next);
    }
    catch (err) {
        next(err);
    }
});
animalsRouter.get("/:id", (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.BODY]: { section: celebrate_1.Joi.number().min(0).max(100).required() }
}), async (req, res, next) => {
    try {
        await animalController.showSection(req, res, next);
    }
    catch (err) {
        next(err);
    }
});
animalsRouter.post("/", (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.BODY]: {
        name: celebrate_1.Joi.string().required(),
        scientific_name: celebrate_1.Joi.string().required(),
        food_type: celebrate_1.Joi.string().required(),
        age: celebrate_1.Joi.number().precision(2).min(0).required(),
        section: celebrate_1.Joi.number().min(0).max(100).required(),
    }
}), async (req, res, next) => {
    try {
        await animalController.create(req, res, next);
    }
    catch (err) {
        next(err);
    }
});
animalsRouter.put("/:id", (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.PARAMS]: { id: celebrate_1.Joi.string().uuid().required() },
    [celebrate_1.Segments.BODY]: {
        name: celebrate_1.Joi.string().required(),
        scientific_name: celebrate_1.Joi.string().required(),
        food_type: celebrate_1.Joi.string().required(),
        age: celebrate_1.Joi.number().precision(2).min(0).required(),
        section: celebrate_1.Joi.number().min(0).max(100).required()
    }
}), async (req, res, next) => {
    try {
        await animalController.update(req, res, next);
    }
    catch (err) {
        next(err);
    }
});
animalsRouter.put("/:id", (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.PARAMS]: { id: celebrate_1.Joi.string().uuid().required() },
    [celebrate_1.Segments.BODY]: {
        name: celebrate_1.Joi.string().required(),
        food_type: celebrate_1.Joi.string().required()
    }
}), async (req, res, next) => {
    try {
        await animalController.updateFood(req, res, next);
    }
    catch (err) {
        next(err);
    }
});
animalsRouter.delete("/:id", (0, celebrate_1.celebrate)({
    [celebrate_1.Segments.PARAMS]: { id: celebrate_1.Joi.string().uuid().required() }
}), async (req, res, next) => {
    try {
        await animalController.delete(req, res, next);
    }
    catch (err) {
        next(err);
    }
});
exports.default = animalsRouter;
//# sourceMappingURL=animal.routes.js.map