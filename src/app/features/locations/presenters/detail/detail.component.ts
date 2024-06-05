import { Component, Input } from '@angular/core';
import { Location } from '../../../../shared/rick-and-morty.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent {
  @Input({required: true}) location: Location | null = null;
}
