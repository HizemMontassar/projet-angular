import { Pipe, PipeTransform } from '@angular/core';
import {Product} from './model/product';

@Pipe({
  name: 'searchFiler'
})
export class SearchFilerPipe implements PipeTransform {

  transform(Products: Product[], searchValue: string): Product[] {

    if(!Products || !searchValue){
      return Products;
    }
    return Products.filter(product =>
      product.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      product.prix.toString().toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
    );

  }

}
