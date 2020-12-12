import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Reclamation} from '../model/reclamation';
import {ReclamationServiceService} from '../shared/reclamation-service.service';
import JSPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { faCoffee, faFilePdf } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-list-reclamations-component',
  templateUrl: './list-reclamations-component.component.html',
  styleUrls: ['./list-reclamations-component.component.css']
})
export class ListReclamationsComponentComponent implements OnInit {

  faFilePdf = faFilePdf;

  listReclamations: Reclamation[];

  @ViewChild('content') content: ElementRef;

  constructor(private reclamationService: ReclamationServiceService) { }

  ngOnInit(): void {
    this.reclamationService.getReclamations().subscribe(
      (data) => this.listReclamations = data
    );
  }

  downloadPDF(){

    var data = document.getElementById('content');
    html2canvas(data).then(canvas => {

      var imgWidth = 208;
      var pageHeight = 295;
      var imgHeight = canvas.height * imgWidth / canvas.width;
      var heightLeft = imgHeight;

      const contentDataURL = canvas.toDataURL('image/png');
      let pdf = new JSPDF('p', 'mm', 'a4');
      var position = 0;
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)
      pdf.save('Reclamations.pdf');
    });

  }

}
