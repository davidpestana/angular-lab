import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, filter, map, tap } from 'rxjs';

export interface Character {
  image: string;
  name: string;
  id: number;
  location: Location;
  origin: any;
  gender: string;
  species: string;
  status: string;

}

export interface Location {
  id: number;
  dimension: string;
  type: string;
  name: string;
  url: string;
  residents: string;
  
}

@Injectable({
  providedIn: 'root'
})
export class RickAndMortyService {
  private baseUrl = 'https://rickandmortyapi.com/api';


  constructor(private http: HttpClient) { }

  getData<T>(data:any): T {
    return {...data};
  }

  getResults<T>({results}:any): T[] {
    return results;
  }

  showInfo<T>({info,results}:any): void {
    false || console.log(info, results);
  }

  getCharacters(page = 0): Observable<Character[]> {
    return this.http.get(`${this.baseUrl}/character/?page=${page}`)
      .pipe(
        tap(this.showInfo<Character>),
        map(this.getResults<Character>),
      );
  }

  getCharacter(id:number): Observable<Character> {
    return this.http.get(`${this.baseUrl}/character/${id}`)
      .pipe(map(this.getData<Character>));
  }

  getLocations(): Observable<Location[]> {
    return this.http.get(`${this.baseUrl}/location`)
      .pipe(
        tap(this.showInfo<Location>),
        map(this.getResults<Location>)
      );
  }

  getLocation(id:number): Observable<Location> {
    return this.http.get(`${this.baseUrl}/location/${id}`)
      .pipe(map(this.getData<Location>));
  }

}
