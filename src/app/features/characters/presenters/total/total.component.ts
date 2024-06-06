import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrl: './total.component.css'
})
export class TotalComponent {
  @Input() total: number | null = 0;
}
