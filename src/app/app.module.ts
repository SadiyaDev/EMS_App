import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {ExhibitionEventListComponent} from './././Components/exhibition-event-list/exhibition-event-list.component';
import {HttpModule} from '@angular/http';
import{RouterModule} from '@angular/router'
import{RoutingModule} from './routing/routing.module';
import { EventService } from './Services/event.service';
import { StageEventListComponent } from './././Components/stage-event-list/stage-event-list.component';
import { EventDetailsComponent } from './././Components/event-details/event-details.component';
import { EventStageDetailsComponent } from './././Components/event-stage-details/event-stage-details.component';
@NgModule({
  declarations: [
    AppComponent,

    ExhibitionEventListComponent,
    StageEventListComponent,

    EventDetailsComponent,
    EventStageDetailsComponent
    
   
    
  ],
  // modules to be used
  imports: [
 
  BrowserModule,
    FormsModule,
    HttpModule,
    RoutingModule
   
    
  ],
 
  bootstrap: [AppComponent],
  providers:[EventService]
})
export class AppModule { }
