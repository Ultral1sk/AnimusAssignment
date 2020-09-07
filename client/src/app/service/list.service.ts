import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'

import { List } from '../types';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  public get_url: string           = 'http://localhost/animus/backend/listdata.php';
  public get_url_by_id : string    = 'http://localhost/animus/backend/getlistById.php?id=';
  public delete_url: string        = 'http://localhost/animus/backend/deletelist.php?id=';
  public post_url: string          = 'http://localhost/animus/backend/createlist.php';
  public edit_url: string          = 'http://localhost/animus/backend/editlist.php';
  
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

    createList(listdata: List): Observable<any> {
    
      // console.log(this.post_url, listdata)
      
        return this.http.post<List>(this.post_url, listdata)
    }

    editList(listdata: List): Observable<any> {
    
      
        return this.http.put<List>(this.post_url, listdata)
    }
    

    getListdataByid(id: number): Observable<any>{
      return this.http.get<List>(this.get_url_by_id + id)

    }
}
