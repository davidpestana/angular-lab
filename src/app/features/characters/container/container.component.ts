import { RickAndMortyService } from './../../../shared/rick-and-morty.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrl: './container.component.css',
})
export class ContainerComponent {
  characters$ = this.rickAndMortyService.getCharacters();

  constructor(private rickAndMortyService: RickAndMortyService) {}

  ngOnInit(): void {
  }
}
