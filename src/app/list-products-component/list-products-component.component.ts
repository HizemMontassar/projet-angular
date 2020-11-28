import { Component, OnInit } from '@angular/core';
import {ProductServiceService} from '../shared/product-service.service';
import {Product} from '../model/product';

@Component({
  selector: 'app-list-products-component',
  templateUrl: './list-products-component.component.html',
  styleUrls: ['./list-products-component.component.css']
})
export class ListProductsComponentComponent implements OnInit {

  products;

  rechercher: string;

  descriptionParent: number;

  afficherParent;

  showReclamation: boolean = false;

  constructor(private productService : ProductServiceService) { }

  ngOnInit(): void {

    this.productService.getProducts().subscribe(
      (data) => {this.products = data, console.log(this.products)},
      (error) => console.log(error)
    );

  }

  deleteProduct(id){
    this.productService.deleteProducts(id).subscribe();
    window.location.reload();
    alert("Product Have Been Deleted !");
  }

  getDescription(desc){
    this.descriptionParent = desc;
    this.showReclamation = true;
}

}
