import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, filter, map, tap } from 'rxjs';

export interface Character {
  image: string;
  name: string;
  id: number;
}

export interface Location {
  id: number;
  dimension: string;
  type: string;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class RickAndMortyService {
  private baseUrl = 'https://rickandmortyapi.com/api';


  constructor(private http: HttpClient) { }

  getResults<T>({results}:any): T[] {
    return results;
  }

  showInfo<T>({info,results}:any): void {
    false || console.log(info, results);
  }

  getCharacters(): Observable<Character[]> {
    return this.http.get(`${this.baseUrl}/character`)
      .pipe(
        tap(this.showInfo<Character>),
        map(this.getResults<Character>),
      );
  }

  getLocations(): Observable<Location[]> {
    return this.http.get(`${this.baseUrl}/location`)
      .pipe(
        tap(this.showInfo<Location>),
        map(this.getResults<Location>)
      );
  }


}
