import { ActivatedRoute } from '@angular/router';
import { Character } from './../../../shared/rick-and-morty.service';
import { CharacterService } from '../services/character.service';
import { Component } from '@angular/core';
import { Observable, map, of, switchMap } from 'rxjs';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrl: './container.component.css',
})
export class ContainerComponent {


  characters$ = this.characterService.characters;
  character$ = this.characterService.current;
  total$ =  this.characterService.total;
  page$ = this.characterService.page;

  constructor(
    private characterService: CharacterService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.characterService.load();
    this.characterService.loadCurrent(
        this.route.params.pipe(map(({id}) => id))
    );
  }


  actionHandler(action:string) {
    switch(action) {
        case 'next': this.characterService.nextPage(); break;
        case 'previous': this.characterService.previousPage(); break;
        case 'loadMore': this.characterService.loadMore(); break;


    }
  }

}
