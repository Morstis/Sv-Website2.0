import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NachhilfeGComponent } from './nachhilfe-g.component';

describe('NachhilfeGComponent', () => {
  let component: NachhilfeGComponent;
  let fixture: ComponentFixture<NachhilfeGComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NachhilfeGComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NachhilfeGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
