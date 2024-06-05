import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersRoutingModule } from './characters-routing.module';
import { ContainerComponent } from './container/container.component';
import { PresenterComponent } from './presenter/presenter.component';

@NgModule({
  declarations: [
    ContainerComponent,
    PresenterComponent
  ],
  imports: [
    CommonModule,
    CharactersRoutingModule
  ]
})
export class CharactersModule { }
