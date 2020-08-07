import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Books, Book } from '../models/book.interface';
import { map, catchError  } from 'rxjs/operators';

const API_PATH = "https://www.googleapis.com/books/v1/volumes";

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(
    private http: HttpClient
  ) { }

  private _converDataToBook(book) : Book {
    let bookInfo = book['volumeInfo'];
    return {
      id:book['id'],
      title:bookInfo['title'],
      description:bookInfo['description'],
      thumbnail:bookInfo['imageLinks'] ? bookInfo['imageLinks']['thumbnail'] : 
               'assets/img/no_image.png'
    } 
  }

  /**
   * Get books 
   * 
   * @method [GET]
   * @param title 
   * @param amount 
   */
  getBooks(title:string = "harry" , amount:number = 10) : Observable<Books> {
    return this.http
               .get(`${API_PATH}?q=${title}&maxResults=${amount}`)
               .pipe(
                 map<any , Books>(( { items , totalItems } ) => {
                    let books:Book[] = items.map(item => this._converDataToBook(item));

                    return {
                      books,
                      total:totalItems,
                    } as Books
                 }),
                 catchError(err => throwError(err))
               )
  }

  /**
   * Get Book by ID 
   * 
   * @method [GET]
   * @param id 
   */
  getBookByID(id:string) : Observable<Book> {
    return this.http
               .get(`${API_PATH}/${id}`)
               .pipe(
                 map(book => this._converDataToBook(book)),
                 catchError(err => throwError(err))
               )
  }
}
