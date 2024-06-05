import { Component } from '@angular/core';
import { RickAndMortyService } from '../../../shared/rick-and-morty.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {
  locations$ = this.rickAndMortyService.getLocations();

  constructor(private rickAndMortyService: RickAndMortyService) { }

  ngOnInit(): void {}
}
