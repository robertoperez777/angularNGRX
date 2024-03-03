import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as bookActions from './book.actions';
import { BookService } from "./book.service";
import { mergeMap, map, catchError, of } from "rxjs";

//We can inect our BookEffects, we have actions, and our book service because we want to comunicate to that service
//because the effects comunicate with the service, then waits fo the result and then performance addittional 
//actions base on that result

@Injectable()
export class BookEffects {
//actions is whatever actions are currently running inside of our application, So whenever we
//dispatch an action from within our application, lets say the Add book, initial action, we will get that well
//get tat well freshly dispatched actions via that injection right here.
//dollar sign because it's an observable.
// we now start creating our effect,an inside we want to define the effect, we create an arrow function
// it goes to and then we want to write down some basic code
    addBook$ = createEffect(() => this.actions$.pipe(
        ofType(bookActions.AddBook),
        mergeMap((action)=>this.bookService.addBook(action)
        .pipe(
            map(book => bookActions.AddBookSuccess(book)),
            catchError((error) => of(bookActions.AddBookFailure({error})))
            
        )))
    );
//SO actions, this one, this ibservable is the way on how we can get access to the actions that got 
//distpatched in our application,
    constructor(private actions$: Actions,
        private bookService: BookService){

        }

}