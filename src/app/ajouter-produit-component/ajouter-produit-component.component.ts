import { Component, OnInit } from '@angular/core';
import {ProductServiceService} from '../shared/product-service.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-ajouter-produit-component',
  templateUrl: './ajouter-produit-component.component.html',
  styleUrls: ['./ajouter-produit-component.component.css']
})
export class AjouterProduitComponentComponent implements OnInit {

  img: File=null;
  imgName;
  currentInput;

  constructor(private productService: ProductServiceService, private route: Router) { }



  ngOnInit(): void {}

  ajouterProduit(product){
    this.productService.addProduct(product).subscribe(res => {
      alert("Product Has Been Added");
      this.route.navigateByUrl('');
    });
  }

  onFileChangeed(event){
    this.img = <File>event.target.files[0];
    this.imgName = this.img.name;
    console.log(this.img)
  }

}
