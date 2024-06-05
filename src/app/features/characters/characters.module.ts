import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersRoutingModule } from './characters-routing.module';
import { ContainerComponent } from './container/container.component';
import { ListComponent } from './presenters/list/list.component';
import { DetailComponent } from './presenters/detail/detail.component';

@NgModule({
  declarations: [
    ContainerComponent,
    ListComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    CharactersRoutingModule
  ]
})
export class CharactersModule { }
