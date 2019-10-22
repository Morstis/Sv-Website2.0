import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NachhilfeGebenComponent } from './nachhilfe-geben.component';

describe('NachhilfeGebenComponent', () => {
  let component: NachhilfeGebenComponent;
  let fixture: ComponentFixture<NachhilfeGebenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NachhilfeGebenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NachhilfeGebenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
