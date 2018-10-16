import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventStageDetailsComponent } from './event-stage-details.component';

describe('EventStageDetailsComponent', () => {
  let component: EventStageDetailsComponent;
  let fixture: ComponentFixture<EventStageDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventStageDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventStageDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
