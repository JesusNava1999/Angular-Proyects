import { Request, Response } from 'express';
import db from '../database';

class IndexController {
    

    public index(req:Request, res:Response):void{
        //db.query('desc usuario;');
        res.json('usuario');
    }
}

export const indexController = new IndexController();