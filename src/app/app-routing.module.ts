import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductComponentComponent} from './product-component/product-component.component';
import {ListProductsComponentComponent} from './list-products-component/list-products-component.component';
import {AppComponent} from './app.component';
import {ModifierProduitComponentComponent} from './modifier-produit-component/modifier-produit-component.component';
import {AjouterProduitComponentComponent} from './ajouter-produit-component/ajouter-produit-component.component';
import {LoginComponentComponent} from './login-component/login-component.component';
import {ListReclamationsComponentComponent} from './list-reclamations-component/list-reclamations-component.component';


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponentComponent
  },
  {
    path: '',
    component: LoginComponentComponent
  },
  {
    path: 'home',
    component: ListProductsComponentComponent
  },
  {
    path: 'produit/:id',
    component: ProductComponentComponent
  },
  {
    path: 'ajouter',
    component: AjouterProduitComponentComponent
  },
  {
    path: 'modifier/:id',
    component: ModifierProduitComponentComponent
  },
  {
    path: 'reclamations',
    component: ListReclamationsComponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
