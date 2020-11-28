import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelamationComponentComponent } from './relamation-component.component';

describe('RelamationComponentComponent', () => {
  let component: RelamationComponentComponent;
  let fixture: ComponentFixture<RelamationComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelamationComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelamationComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
