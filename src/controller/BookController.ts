import express, { Request, Response } from 'express';
import { Book } from '../models/Book';
import {authors, books } from '../database/memoryData';

const BooksController = express.Router();

// Endpoint para crear un nuevo libro con sus autores
BooksController.post('/books', (req: Request, res: Response) => {
  const { title, chapters, pages, authorIds } = req.body;
  const authorsArr = authors.filter((author) => authorIds.includes(author.id));
  const newBook: Book = {
    id: books.length + 1,
    title,
    chapters,
    pages,
    authors: authorsArr,
  };
  books.push(newBook);
  res.status(201).json(newBook);
});

// Endpoint para obtener todos los libros con sus autores
BooksController.get('/books', (req: Request, res: Response) => {
  res.json(books);
});

// Endpoint para obtener el promedio de páginas por capítulo de un libro existente
BooksController.get('/books/:id/average-pages-per-chapter', (req: Request, res: Response) => {
  const { id } = req.params;
  const book = books.find((b) => b.id === parseInt(id));
  if (!book) {
    return res.status(404).json({ error: 'Libro no encontrado.' });
  }
  const average = book.pages / book.chapters;
  res.json({
    id: book.id,
    average: average.toFixed(2),
  });
});

export default BooksController;
