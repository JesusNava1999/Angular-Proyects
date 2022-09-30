"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.personaController = void 0;
const database_1 = __importDefault(require("../database"));
class PersonaController {
    //para todas las personas
    list(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //res.json({text: 'Listing personas'});
            const personas = yield database_1.default.query("SELECT * FROM persona", function (err, result, fields) {
                if (err)
                    throw err;
                res.json(result);
            });
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //res.json({text: 'One person'});
            const { id } = req.params;
            /*const personas = await pool.query('SELECT * FROM persona WHERE id_persona = ?', [id]);
                console.log(personas);
                res.json({text:'Persona encontrada'})*/
            const personas = yield database_1.default.query("SELECT * FROM persona WHERE id_persona=?", [id], function (err, result, fields) {
                if (err)
                    throw err;
                if (result.length > 0) {
                    res.json(result);
                    console.log(result);
                    return res.json(personas[0]);
                }
                else {
                    res.status(404).json("Persona no encontrada");
                }
            });
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query("INSERT INTO persona set ?", [req.body]);
            console.log(req.body);
            res.json({ message: "Persona creada" });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //res.json({text: 'Updating  a persona' + req.params.id});
            const id = req.params.id;
            yield database_1.default.query("UPDATE persona SET ? WHERE id_persona=?", [req.body, id], function (err, result, fields) {
                if (err)
                    throw err;
                res.json({ message: "La persona se actualizó." });
            });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //res.json({text: 'Deleting  a persona' + req.params.id});
            const { id } = req.params;
            yield database_1.default.query("DELETE FROM persona WHERE id_persona=?", [id], function (err, result, fields) {
                if (err)
                    throw err;
                res.json({ message: "La persona se eliminó." });
            });
        });
    }
}
exports.personaController = new PersonaController();
