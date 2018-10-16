import { Component, OnInit } from '@angular/core';
import { Events} from '../../events';
import {Event} from '../../event';
import {RouterModule } from '@angular/router';
import{RoutingModule} from '../../routing/routing.module';
import { EventService } from './../../Services/event.service';


@Component({
  selector: 'app-stage-event-list',
  templateUrl: './stage-event-list.component.html',
  styleUrls: ['./stage-event-list.component.css']
})
export class StageEventListComponent implements OnInit {

  CompEvents:Event[];
  constructor(private bservice:EventService) { 
    this.CompEvents=bservice.currevents;
  }

  ngOnInit() {
  }

}
