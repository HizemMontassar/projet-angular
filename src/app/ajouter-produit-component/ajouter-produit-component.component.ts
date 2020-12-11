import { Component, OnInit } from '@angular/core';
import {ProductServiceService} from '../shared/product-service.service';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Product} from '../model/product';


@Component({
  selector: 'app-ajouter-produit-component',
  templateUrl: './ajouter-produit-component.component.html',
  styleUrls: ['./ajouter-produit-component.component.css']
})
export class AjouterProduitComponentComponent implements OnInit {

  img: File = null;
  currentInput;
  imageSrc: string;

  productData: FormGroup = new FormGroup({
      name: new FormControl('', Validators.required),
      image: new FormControl('', Validators.required),
      prix: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      categorie: new FormControl('', Validators.required),
      quantite: new FormControl('', Validators.required),
      fileSource: new FormControl('', [Validators.required])
    }
  );

  constructor(private productService: ProductServiceService, private route: Router) { }


  ngOnInit(): void {}

  ajouterProduit(product){
    this.productService.addProduct(product).subscribe(res => {
      alert("Product Has Been Added");
      this.route.navigateByUrl('');
    });
  }

  onFileChange(event) {

    const reader = new FileReader();

    if (event.target.files && event.target.files.length) {

      const [image] = event.target.files;

      reader.readAsDataURL(image);


      reader.onload = () => {

        this.imageSrc = reader.result as string;

        this.productData.patchValue({

          fileSource: reader.result

        });

      };


    }
  }

}
