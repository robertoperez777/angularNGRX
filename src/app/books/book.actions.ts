
import { createAction, props} from "@ngrx/store";
//import {Book} from "../models/book"
import { Book } from "../models/book";

//export const AddBook = createAction('[Book] Add Book', props<Book>)
export const AddBook = createAction('[Book] Add Book', props<Book>());
//export const AddBook = createAction('[Book] Add Book', props<{id: string; title: string; author: string}>());

export const RemoveBook = createAction('[Book] Remove Book', props<{bookId:string}>())