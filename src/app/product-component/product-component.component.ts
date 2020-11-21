import { Component, OnInit } from '@angular/core';
import {ProductServiceService} from '../shared/product-service.service';
import {Product} from '../model/product';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-product-component',
  templateUrl: './product-component.component.html',
  styleUrls: ['./product-component.component.css']
})
export class ProductComponentComponent implements OnInit {

  constructor(private productService: ProductServiceService, private activatedRoute: ActivatedRoute) { }

  productId: number;
  product: Product;

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params => {
      this.productId = + params['id'];
    });

    this.productService.getProductById(this.productId).subscribe(
      (data) => this.product = data,
      (error) => console.log(error)
    );

  }

}
