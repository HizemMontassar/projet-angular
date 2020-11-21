import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductComponentComponent} from './product-component/product-component.component';
import {ListProductsComponentComponent} from './list-products-component/list-products-component.component';
import {AppComponent} from './app.component';
import {ModifierProduitComponentComponent} from './modifier-produit-component/modifier-produit-component.component';
import {AjouterProduitComponentComponent} from './ajouter-produit-component/ajouter-produit-component.component';


const routes: Routes = [
  {
    path: '',
    component: ListProductsComponentComponent
  },
  {
    path: 'ajouter',
    component: AjouterProduitComponentComponent
  },
  {
    path: ':id',
    component: ProductComponentComponent
  },
  {
    path: 'modifier/:id',
    component: ModifierProduitComponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
