"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const animal_routes_1 = __importDefault(require("@modules/animals/routes/animal.routes"));
const express_1 = require("express");
const routes = (0, express_1.Router)();
routes.use('/animals', animal_routes_1.default);
exports.default = routes;
//# sourceMappingURL=index.js.map