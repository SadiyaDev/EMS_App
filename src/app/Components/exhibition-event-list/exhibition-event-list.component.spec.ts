import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExhibitionEventListComponent } from './exhibition-event-list.component';

describe('ExhibitionEventListComponent', () => {
  let component: ExhibitionEventListComponent;
  let fixture: ComponentFixture<ExhibitionEventListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExhibitionEventListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExhibitionEventListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
