import express, { Request, Response } from 'express';
import { Author } from '../models/Author';
import { authors } from '../database/memoryData';

const AuthorsController = express.Router();

// Endpoint para crear un nuevo autor
AuthorsController.post('/author', (req: Request, res: Response) => {
  const { name } = req.body;
  const newAuthor: Author = {
    id: authors.length + 1,
    name,
    books: [],
  };
  authors.push(newAuthor);
  res.status(201).json(newAuthor);
});

// Endpoint para obtener todos los autores con sus libros
AuthorsController.get('/authors', (req: Request, res: Response) => {
  res.json(authors);
});

export default AuthorsController;
