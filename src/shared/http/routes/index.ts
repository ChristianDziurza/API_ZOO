import animalsRouter from "@modules/animals/routes/animal.routes";
import { Router } from "express";

const routes = Router();
console.log("routes");
routes.use('/animals', animalsRouter);

export default routes;