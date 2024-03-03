import {createReducer, on} from "@ngrx/store";
import {AddBook, RemoveBook, AddBookFailure, AddBookSuccess} from "./book.actions";
import {Book} from "../models/book"


export const initialState: Book[] = [];

export const BookReducer = createReducer(
    initialState,
    //we receive the addBokk action y we simply return the current state
    //initial action will only return the state
    on(AddBook, (state) => {return state}),
    //yes it work then modify the state
    on(AddBookSuccess, (state, {id, title, author}) => [...state,{id, title, author}]),
    
    on(AddBookFailure, (state, {error}) => {
        console.error(error);
        return state;
        //will return the current state because we don't modify the state,
        //we didnt add a new book
    }),
    on(RemoveBook, (state, {bookId}) => state.filter(book => book.id !== bookId))
);