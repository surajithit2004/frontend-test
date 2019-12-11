import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { IItem } from '../item-detail/iitem';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  private itemsUrl = 'http://localhost:3000/items';

  constructor(private http: HttpClient) { }

  getAllItems(): Observable<any[]> {
    return this.http.get<any[]>(this.itemsUrl)
      .pipe(
        tap(data => console.log('All: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  getItemDetails(id: number): Observable<IItem> {
    const url = this.itemsUrl+'/'+id;
    return this.http.get<IItem>(url)
      .pipe(
        tap(data => console.log('Item: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
