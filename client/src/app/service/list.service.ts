import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'

import { List } from '../types';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  public _url: string = 'http://localhost/animus/backend/listdata.php'
  public listdata : List[];

  constructor( private http: HttpClient ) {}

  getList(): Observable<any> {
    // The Observable returned by get() is of type Observable<string>
    // because a text response was specified.
    // There's no need to pass a <string> type parameter to get().
    return this.http.get(this._url)
  
    }

}
