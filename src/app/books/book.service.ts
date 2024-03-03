import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }

  // we need to add method and book as a paremeter  of type Observable
  //and that obsrevable returns a book, here we usualy connect to real api, like mokon or springboot
  //
  addBook(book: Book): Observable<Book>{
  
    /*for test negative cases
    const err = new Error('Error while adding a book')
    return throwError(()=> err)
    */
    return of(book);
  }
}
