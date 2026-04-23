import { Request, Response, NextFunction } from "express";
export default class AnimalsController {
    index(request: Request, response: Response, next: NextFunction): Promise<Response | void>;
    show(request: Request, response: Response, next: NextFunction): Promise<Response | void>;
    showSection(request: Request, response: Response, next: NextFunction): Promise<Response | void>;
    create(request: Request, response: Response, next: NextFunction): Promise<Response | void>;
    update(request: Request, response: Response, next: NextFunction): Promise<Response | void>;
    updateFood(request: Request, response: Response, next: NextFunction): Promise<Response | void>;
    delete(request: Request, response: Response, next: NextFunction): Promise<Response | void>;
}
//# sourceMappingURL=AnimalsController.d.ts.map