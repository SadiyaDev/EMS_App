import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StageEventListComponent } from './stage-event-list.component';

describe('StageEventListComponent', () => {
  let component: StageEventListComponent;
  let fixture: ComponentFixture<StageEventListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StageEventListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StageEventListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
