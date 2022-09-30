import { personaController } from './../controllers/personaController';
import { Router } from 'express'

class PersonaRoutes{

    public router:Router = Router();

    constructor(){
        this.config();
    }

    config(): void{
        this.router.get('/', personaController.list);//para todaas la personas
        this.router.get('/:id', personaController.getOne);//para una persona
        this.router.post('/', personaController.create);//crear nueva persona
        this.router.put('/:id', personaController.update);//actualizar una persona
        this.router.delete('/:id', personaController.delete);
    }

}

const personaRoutes = new PersonaRoutes();
export default personaRoutes.router;