import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from'@angular/router';
import {Event} from '../../event';
import { EventService } from './../../Services/event.service';

@Component({
  selector: 'app-event-stage-details',
  templateUrl: './event-stage-details.component.html',
  styleUrls: ['./event-stage-details.component.css']
})
export class EventStageDetailsComponent implements OnInit {
  eventObjects:Event;
  CompEvents:Event[];
    constructor(private route:ActivatedRoute,private eservice:EventService) { 
      this.CompEvents=eservice.currevents;
    }
  
    ngOnInit() {
      this.route.paramMap
      .subscribe(params=>{
        let evName=params.get('sname');
       this.eventObjects=this.eservice.getEvent(evName);
      })
    }
  
  }
  