import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocationsRoutingModule } from './locations-routing.module';
import { ContainerComponent } from './container/container.component';
import { DetailComponent } from './presenters/detail/detail.component';
import { ListComponent } from './presenters/list/list.component';


@NgModule({
  declarations: [
    ContainerComponent,
    DetailComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    LocationsRoutingModule
  ],
  providers: [],
  exports: [
    CommonModule
  ]
})
export class LocationsModule { }
