
import express, { Request, Response } from 'express';
import cors from 'cors';
import {AuthorsController, BooksController} from './controller/index';

const app = express();
const PORT = 3000;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


app.get('/', (req: Request, res: Response) => {
  res.send('API REST ON');
});

app.use(AuthorsController);
app.use(BooksController);


app.listen(PORT, () => {
  console.log(`Servidor iniciado en http://localhost:${PORT}`);
});
