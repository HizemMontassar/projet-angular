import { Component, OnInit } from '@angular/core';
import {Reclamation} from '../model/reclamation';
import {ReclamationServiceService} from '../shared/reclamation-service.service';

@Component({
  selector: 'app-list-reclamations-component',
  templateUrl: './list-reclamations-component.component.html',
  styleUrls: ['./list-reclamations-component.component.css']
})
export class ListReclamationsComponentComponent implements OnInit {

  listReclamations: Reclamation[];


  constructor(private reclamationService: ReclamationServiceService) { }

  ngOnInit(): void {
    this.reclamationService.getReclamations().subscribe(
      (data) => this.listReclamations = data
    );
  }

}
