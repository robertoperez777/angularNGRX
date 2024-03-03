import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Book } from '../models/book';
import { AddBook, RemoveBook } from '../books/book.actions';
import { AppState } from '../app.state';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit, OnDestroy {

  books$: Observable<Book[]>;
  private booksSubscription: Subscription = new Subscription();


  constructor(private store: Store<AppState>){
    this.books$ = store.pipe(select('book'));
  }

  ngOnInit() {
    // Suscribirse al Observable para obtener los cambios de estado
    this.booksSubscription = this.books$.subscribe(books => {
      console.log('Current state of books:', books);
    });
  }

  ngOnDestroy() {
    // Es importante desuscribirse para evitar fugas de memoria
    if (this.booksSubscription) {
      this.booksSubscription.unsubscribe();
    }
  }

  addBook(id: string, title:string, author:string){
    this.store.dispatch(AddBook({id,title,author}));
  }

  removeBook(bookId: string){
    this.store.dispatch(RemoveBook({bookId}));
  }

}


