import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl , FormArray } from '@angular/forms';
import {ProductServiceService} from '../shared/product-service.service';
import {Product} from '../model/product';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-modifier-produit-component',
  templateUrl: './modifier-produit-component.component.html',
  styleUrls: ['./modifier-produit-component.component.css']
})
export class ModifierProduitComponentComponent implements OnInit {

  productData: FormGroup;
  productId: number;
  product: Product;
  imageSrc: string;

  constructor(private productService: ProductServiceService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params => {
      this.productId = + params['id'];
    });

    this.productService.getProductById(this.productId).subscribe(
      (data) =>
      {
        this.product = data,
          this.productData = new FormGroup({
              name: new FormControl(this.product.name, Validators.required),
              image: new FormControl(this.product.image, Validators.required),
              prix: new FormControl(this.product.prix, Validators.required),
              description: new FormControl(this.product.description, Validators.required),
              categorie: new FormControl(this.product.categorie, Validators.required),
              quantite: new FormControl(this.product.stock, Validators.required),
              fileSource: new FormControl('', [Validators.required])
            }
          );
      },
      (error) => console.log(error)
    );




  }



  updateProduct(product){
    this.productService.updateProduct(this.productId, product).subscribe( res => {
      alert("Product Has Been Updated !");
      this.router.navigateByUrl('/'+this.productId);
    });
    // window.location.reload();
    // alert("Product Have Been Updated !");
  }

  onFileChange(event) {

    const reader = new FileReader();

    if(event.target.files && event.target.files.length) {

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
