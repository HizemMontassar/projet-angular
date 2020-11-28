import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ListProductsComponentComponent } from './list-products-component/list-products-component.component';
import {HttpClientModule} from '@angular/common/http';
import { ProductComponentComponent } from './product-component/product-component.component';
import { ModifierProduitComponentComponent } from './modifier-produit-component/modifier-produit-component.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AjouterProduitComponentComponent } from './ajouter-produit-component/ajouter-produit-component.component';
import { RelamationComponentComponent } from './relamation-component/relamation-component.component';
import { SearchFilerPipe } from './search-filer.pipe';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    ListProductsComponentComponent,
    ProductComponentComponent,
    ModifierProduitComponentComponent,
    AjouterProduitComponentComponent,
    RelamationComponentComponent,
    SearchFilerPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
