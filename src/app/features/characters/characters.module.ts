import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersRoutingModule } from './characters-routing.module';
import { ContainerComponent } from './container/container.component';
import { ListComponent } from './presenters/list/list.component';
import { DetailComponent } from './presenters/detail/detail.component';
import { TotalComponent } from './presenters/total/total.component';
import { ActionsComponent } from './presenters/actions/actions.component';
import { MatButtonModule } from '@angular/material/button';
import { PageComponent } from './presenters/page/page.component';




@NgModule({
  declarations: [
    ContainerComponent,
    ListComponent,
    DetailComponent,
    TotalComponent,
    ActionsComponent,
    PageComponent,
  ],
  imports: [
    CommonModule,
    CharactersRoutingModule,
    MatButtonModule
  ],
})
export class CharactersModule { }
