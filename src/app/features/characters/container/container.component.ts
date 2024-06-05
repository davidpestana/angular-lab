import { ActivatedRoute } from '@angular/router';
import { Character, RickAndMortyService } from './../../../shared/rick-and-morty.service';
import { Component } from '@angular/core';
import { Observable, map, switchMap } from 'rxjs';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrl: './container.component.css',
})
export class ContainerComponent {


  characters$ = this.rickAndMortyService.getCharacters();
  character$: Observable<Character> | null = null;

  constructor(
    private rickAndMortyService: RickAndMortyService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.character$ = this.route.params.pipe(
      map(({id}) => id),
      switchMap((id) => this.rickAndMortyService.getCharacter(id))
    );
  }
}
