import {Component, Input, OnInit} from '@angular/core';
import {Reclamation} from '../model/reclamation';
import {Router} from '@angular/router';
import {ReclamationServiceService} from '../shared/reclamation-service.service';
import {ProductServiceService} from '../shared/product-service.service';
import {Product} from '../model/product';
import {FormControl, FormGroup} from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-relamation-component',
  providers: [DatePipe],
  templateUrl: './relamation-component.component.html',
  styleUrls: ['./relamation-component.component.css']
})
export class RelamationComponentComponent implements OnInit {

  @Input() descriptionFils: Product;

  afficher: boolean = false;

  reclamationData: FormGroup = new FormGroup({
    idProduct: new FormControl(''),
    description: new FormControl('')
  });

  constructor(private datePipe: DatePipe, private reclamationService: ReclamationServiceService, private route: Router, private productService: ProductServiceService) { }

  ngOnInit(): void {
  }

  ajouterReclamation(form, idProduct){

    const date = this.datePipe.transform(Date.now(), 'yyyy-MM-dd');

    let reclamation = new Reclamation(idProduct, date, form.description, false);

    console.log(reclamation);

    this.reclamationService.addReclamation(reclamation).subscribe(res => {
      alert("Votre Reclamation a été envoyée !");
      window.location.reload();
    });
  }

}
