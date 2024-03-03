
import { createAction, props} from "@ngrx/store";
//import {Book} from "../models/book"
import { Book } from "../models/book";

//export const AddBook = createAction('[Book] Add Book', props<Book>)
export const AddBook = createAction('[Book] Add Book', props<Book>());
//We can face some errors in the createAction,

//we will create effects, the service start the call, for example adding into database, 
//which will result in success or failure, error of the service, base on that we wiil start the 
//add book success action or fail

export const AddBookSuccess = createAction('[Book] Added Book Successfully', props<Book>());
export const AddBookFailure = createAction('[Book] Added Book Failure', props<{error:any}>());
//we can recive any kind of error 
//export const AddBook = createAction('[Book] Add Book', props<{id: string; title: string; author: string}>());

export const RemoveBook = createAction('[Book] Remove Book', props<{bookId:string}>())