import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from'@angular/router';
import {Event} from '../../event';
import { EventService } from './../../Services/event.service';
@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
eventObjects:Event;
CompEvents:Event[];
  constructor(private route:ActivatedRoute,private eservice:EventService) {
    this.CompEvents=eservice.currevents;
   }

  ngOnInit() {
    this.route.paramMap
    .subscribe(params=>{
      let evName=params.get('ename');
     this.eventObjects=this.eservice.getEvent(evName);
    })
  }

}
