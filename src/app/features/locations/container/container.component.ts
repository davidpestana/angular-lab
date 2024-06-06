import { Component } from '@angular/core';
import { Location, RickAndMortyService } from '../../../shared/rick-and-morty.service';
import { Observable, map, of, switchMap } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {
  locations$ = this.rickAndMortyService.getLocations();
  location$: Observable<Location | null>  = of(null);


  constructor(
    private route: ActivatedRoute,
    private rickAndMortyService: RickAndMortyService
  ) {


  }

  ngOnInit(): void {
    this.location$ = this.route.params.pipe(
      map(({id}) => id),
      switchMap((id) => id ? this.rickAndMortyService.getLocation(id) : of(null))
    );
  }
}
