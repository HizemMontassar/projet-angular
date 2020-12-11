import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListReclamationsComponentComponent } from './list-reclamations-component.component';

describe('ListReclamationsComponentComponent', () => {
  let component: ListReclamationsComponentComponent;
  let fixture: ComponentFixture<ListReclamationsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListReclamationsComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListReclamationsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
