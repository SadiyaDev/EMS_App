import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule } from '@angular/router';

import {ExhibitionEventListComponent} from '../././Components/exhibition-event-list/exhibition-event-list.component';
import {StageEventListComponent} from '../././Components/stage-event-list/stage-event-list.component';
import { EventDetailsComponent } from '../././Components/event-details/event-details.component';
import { EventStageDetailsComponent } from '../././Components/event-stage-details/event-stage-details.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([
      {path:'exhibition-event-list', component:ExhibitionEventListComponent},
      {path:'stage-event-list', component:StageEventListComponent},
      {path:'eventDetails/:ename', component:EventDetailsComponent},
      {path:'seventDetails/:sname', component:EventStageDetailsComponent},
     
    
    ])
  ],
  declarations: [],
  exports: [RouterModule]

})
export class RoutingModule { }
