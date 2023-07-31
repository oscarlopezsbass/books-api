"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const memoryData_1 = require("../database/memoryData");
const BooksController = express_1.default.Router();
// Endpoint para crear un nuevo libro con sus autores
BooksController.post('/books', (req, res) => {
    const { title, chapters, pages, authorIds } = req.body;
    const authorsArr = memoryData_1.authors.filter((author) => authorIds.includes(author.id));
    const newBook = {
        id: memoryData_1.books.length + 1,
        title,
        chapters,
        pages,
        authors: authorsArr,
    };
    memoryData_1.books.push(newBook);
    res.status(201).json(newBook);
});
// Endpoint para obtener todos los libros con sus autores
BooksController.get('/books', (req, res) => {
    res.json(memoryData_1.books);
});
// Endpoint para obtener el promedio de páginas por capítulo de un libro existente
BooksController.get('/books/:id/average-pages-per-chapter', (req, res) => {
    const { id } = req.params;
    const book = memoryData_1.books.find((b) => b.id === parseInt(id));
    if (!book) {
        return res.status(404).json({ error: 'Libro no encontrado.' });
    }
    const average = book.pages / book.chapters;
    res.json({
        id: book.id,
        average: average.toFixed(2),
    });
});
exports.default = BooksController;
