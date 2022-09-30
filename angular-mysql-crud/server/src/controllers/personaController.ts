import { Request, Response } from "express";
import pool from "../database";


class PersonaController {

  //para todas las personas
  public async list(req: Request, res: Response): Promise<void> {
    //res.json({text: 'Listing personas'});
    const personas = await pool.query(
      "SELECT * FROM persona",
      function (err, result, fields) {
        if (err) throw err;
        res.json(result);
      }
    );
  }

  public async getOne(req: Request, res: Response): Promise<any> {
    //res.json({text: 'One person'});
    const { id } = req.params;
    /*const personas = await pool.query('SELECT * FROM persona WHERE id_persona = ?', [id]);
        console.log(personas);
        res.json({text:'Persona encontrada'})*/
    const personas: any = await pool.query(
      "SELECT * FROM persona WHERE id_persona=?",
      [id],
      function (err, result, fields) {
        if (err) throw err;
        if (result.length > 0) {
          res.json(result);
          console.log(result);
          return res.json(personas[0]);
        } else {
          res.status(404).json("Persona no encontrada");
        }
      }
    );
  }

  public async create(req: Request, res: Response): Promise<void> {
    await pool.query("INSERT INTO persona set ?", [req.body]);
    console.log(req.body);
    res.json({ message: "Persona creada" });
  }

  public async update(req: Request, res: Response): Promise<void> {
    //res.json({text: 'Updating  a persona' + req.params.id});
    const id = req.params.id;
    await pool.query(
      "UPDATE persona SET ? WHERE id_persona=?",
      [req.body, id],
      function (err, result, fields) {
        if (err) throw err;
        res.json({message:"La persona se actualizó."});
      }
    );
  }

  public async delete(req: Request, res: Response): Promise<void> {
    //res.json({text: 'Deleting  a persona' + req.params.id});
    const { id } = req.params;
    await pool.query(
      "DELETE FROM persona WHERE id_persona=?",
      [id],
      function (err, result, fields) {
        if (err) throw err;
        res.json({message:"La persona se eliminó."});
      }
    );
  }
}

export const personaController = new PersonaController();
