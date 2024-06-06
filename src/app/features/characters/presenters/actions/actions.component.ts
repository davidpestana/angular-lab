import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrl: './actions.component.css'
})
export class ActionsComponent {

  @Output() action = new EventEmitter<string>();


  sendAction(action:string) {
    this.action.emit(action);
  }


}
