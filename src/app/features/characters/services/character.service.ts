import { Injectable } from '@angular/core';
import { Character, RickAndMortyService } from './../../../shared/rick-and-morty.service';
import { of, switchMap, Observable, map, BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private charactersSubject = new BehaviorSubject<Character[]>([]);
  private currentSubject = new BehaviorSubject<Character | null>(null);
  private pageSubject = new BehaviorSubject<number>(1);

  constructor(    
    private rickAndMortyService: RickAndMortyService,
  ) { }


  get characters():Observable<Character[]> {
    return this.charactersSubject.asObservable();
  }

  get current():Observable<Character | null> {
    return this.currentSubject.asObservable();
  }

  get total(): Observable<number> {
    return this.characters.pipe(map((characters:any) => characters.length));
  }

  get page(): Observable<number> {
    return this.pageSubject.asObservable();
  }

  load(): void {
    this.loadPage(this.pageSubject.getValue());
  }


  nextPage(): void {
    this.pageSubject.next(this.pageSubject.getValue() + 1);
    this.loadPage(this.pageSubject.getValue());
  }

  previousPage(): void {
    this.pageSubject.next(this.pageSubject.getValue() - 1);
    this.loadPage(this.pageSubject.getValue());
  }

  loadPage(page:number) {
    this.rickAndMortyService.getCharacters(page)
      .subscribe((characters:Character[]) => {
          this.charactersSubject.next(characters);
      }) 
  }

  loadMore() {
    this.pageSubject.next(this.pageSubject.getValue() + 1);
    this.rickAndMortyService.getCharacters(this.pageSubject.getValue())
      .subscribe((characters:Character[]) => {
          this.charactersSubject.next([...this.charactersSubject.getValue(),...characters]);
      }) 
  }

  loadCurrent(id$: Observable<number>): void {
    id$.pipe(
        switchMap((id:number) => id ? this.rickAndMortyService.getCharacter(id) : of(null))
    )
    .subscribe((character:any) => this.currentSubject.next(character))
  }

}
