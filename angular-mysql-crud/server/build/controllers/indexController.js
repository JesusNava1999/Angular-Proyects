"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexController = void 0;
class IndexController {
    index(req, res) {
        //db.query('desc usuario;');
        res.json('usuario');
    }
}
exports.indexController = new IndexController();
