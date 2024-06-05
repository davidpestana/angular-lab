import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocationsRoutingModule } from './locations-routing.module';
import { ContainerComponent } from './container/container.component';
import { PresenterComponent } from './presenter/presenter.component';


@NgModule({
  declarations: [
    ContainerComponent,
    PresenterComponent
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
