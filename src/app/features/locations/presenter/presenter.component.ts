import { Component, Input } from '@angular/core';
import { Location } from '../../../shared/rick-and-morty.service';

@Component({
  selector: 'app-presenter',
  templateUrl: './presenter.component.html',
  styleUrl: './presenter.component.css'
})
export class PresenterComponent {
  @Input({required: true}) locations: Location[] | null = [];
}
