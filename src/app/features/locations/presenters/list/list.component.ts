import { Component, Input } from '@angular/core';
import { Location } from '../../../../shared/rick-and-morty.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  @Input({required: true}) locations: Location[] | null = [];
}
