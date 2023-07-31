"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const memoryData_1 = require("../database/memoryData");
const AuthorsController = express_1.default.Router();
// Endpoint para crear un nuevo autor
AuthorsController.post('/author', (req, res) => {
    const { name } = req.body;
    const newAuthor = {
        id: memoryData_1.authors.length + 1,
        name,
        books: [],
    };
    memoryData_1.authors.push(newAuthor);
    res.status(201).json(newAuthor);
});
// Endpoint para obtener todos los autores con sus libros
AuthorsController.get('/authors', (req, res) => {
    res.json(memoryData_1.authors);
});
exports.default = AuthorsController;
