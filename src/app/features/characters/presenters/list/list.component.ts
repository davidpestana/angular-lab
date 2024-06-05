import { Component, Input } from '@angular/core';
import { Character } from '../../../../shared/rick-and-morty.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  @Input({required: true}) characters: Character[] | null = [];
}
