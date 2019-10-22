import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NachhilfeNehmenComponent } from './nachhilfe-nehmen.component';

describe('NachhilfeNehmenComponent', () => {
  let component: NachhilfeNehmenComponent;
  let fixture: ComponentFixture<NachhilfeNehmenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NachhilfeNehmenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NachhilfeNehmenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
