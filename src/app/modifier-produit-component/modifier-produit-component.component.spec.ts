import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierProduitComponentComponent } from './modifier-produit-component.component';

describe('ModifierProduitComponentComponent', () => {
  let component: ModifierProduitComponentComponent;
  let fixture: ComponentFixture<ModifierProduitComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifierProduitComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierProduitComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
