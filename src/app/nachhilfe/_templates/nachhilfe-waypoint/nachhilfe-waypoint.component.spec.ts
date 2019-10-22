import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NachhilfeWaypointComponent } from './nachhilfe-waypoint.component';

describe('NachhilfeWaypointComponent', () => {
  let component: NachhilfeWaypointComponent;
  let fixture: ComponentFixture<NachhilfeWaypointComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NachhilfeWaypointComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NachhilfeWaypointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
