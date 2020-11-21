import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterProduitComponentComponent } from './ajouter-produit-component.component';

describe('AjouterProduitComponentComponent', () => {
  let component: AjouterProduitComponentComponent;
  let fixture: ComponentFixture<AjouterProduitComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjouterProduitComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterProduitComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
