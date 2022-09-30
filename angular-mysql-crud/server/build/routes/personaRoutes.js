"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const personaController_1 = require("./../controllers/personaController");
const express_1 = require("express");
class PersonaRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', personaController_1.personaController.list); //para todaas la personas
        this.router.get('/:id', personaController_1.personaController.getOne); //para una persona
        this.router.post('/', personaController_1.personaController.create); //crear nueva persona
        this.router.put('/:id', personaController_1.personaController.update); //actualizar una persona
        this.router.delete('/:id', personaController_1.personaController.delete);
    }
}
const personaRoutes = new PersonaRoutes();
exports.default = personaRoutes.router;
