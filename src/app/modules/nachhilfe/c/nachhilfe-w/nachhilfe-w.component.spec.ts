import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NachhilfeWComponent } from './nachhilfe-w.component';

describe('NachhilfeWComponent', () => {
  let component: NachhilfeWComponent;
  let fixture: ComponentFixture<NachhilfeWComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NachhilfeWComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NachhilfeWComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
