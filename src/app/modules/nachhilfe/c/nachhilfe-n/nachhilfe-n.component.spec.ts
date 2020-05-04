import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NachhilfeNComponent } from './nachhilfe-n.component';

describe('NachhilfeNComponent', () => {
  let component: NachhilfeNComponent;
  let fixture: ComponentFixture<NachhilfeNComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NachhilfeNComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NachhilfeNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
