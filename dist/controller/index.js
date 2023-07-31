"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BooksController = exports.AuthorsController = void 0;
const AuthorController_1 = __importDefault(require("./AuthorController"));
exports.AuthorsController = AuthorController_1.default;
const BookController_1 = __importDefault(require("./BookController"));
exports.BooksController = BookController_1.default;
