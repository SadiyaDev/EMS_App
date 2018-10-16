import { Injectable } from '@angular/core';
import { Events} from '../events';
import {Event} from '../event';
@Injectable()
export class EventService {
currevents:Event[];
  constructor() { 
    this.currevents=Events;
  }
  getEvent(ename:string):Event{
    for(let i=0;i<this.currevents.length;i++)
    {
      if(ename=='Mikes Literature Fest'){ 
        console.log(this.currevents[i]);
         return this.currevents[i];
      }
     else if(ename=='Rock music and Anime') {
      console.log(this.currevents[i]);
        return this.currevents[i+1];
      }
      else if(ename=='REs Royal enclave on Travel')
      {  console.log(this.currevents[i]);
        return this.currevents[i+2];
      }
      else if(ename=='Geek party - Hack 2k18'){
        console.log(this.currevents[i]);
        return this.currevents[i+3];
      }
      else if(ename=='Carnival in Rio de Janeiro'){
      console.log(this.currevents[i]);
        return this.currevents[i+4];
      }
      else if(ename=='Munichs world-famous Oktoberfest') {
        console.log(this.currevents[i]);
        return this.currevents[i+5];
      }
      else if(ename=='Cannes Film Festival') {
        console.log(this.currevents[i]);
        return this.currevents[i+6];
      }
      else if(ename=='Glastonbury')
      {
        console.log(this.currevents[i]);
        return this.currevents[i+7];
      }
      else if(ename=='Just For Laughs') {
        console.log(this.currevents[i]);
        return this.currevents[i+8];
      }
      else if(ename=='Epcot Food & Wine Festival') {
        console.log(this.currevents[i]);
        return this.currevents[i+9];
      }
      else if(ename=='Mevlana Whirling Dervishes') {
        console.log(this.currevents[i]);
        return this.currevents[i+10];
      }
      else if(ename=='Krampusnacht') {
        console.log(this.currevents[i]);
        return this.currevents[i+11];
      }

    }
  }
}
