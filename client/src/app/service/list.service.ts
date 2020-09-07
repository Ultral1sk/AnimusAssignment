import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'

import { List } from '../types';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  public get_url: string = 'http://localhost/animus/backend/listdata.php'
  public delete_url: string = 'http://localhost/animus/backend/delete.php?id='
  
  public listdata : List[];

  constructor( private http: HttpClient ) {}

  getList(): Observable<any> {
    // The Observable returned by get() is of type Observable<string>
    // because a text response was specified.
    // There's no need to pass a <string> type parameter to get().
    return this.http.get(this.get_url)
  
    }

    deleteList(id: number): Observable<any>{
      return this.http.delete(this.delete_url + id)
    }

}
