import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-relamation-component',
  templateUrl: './relamation-component.component.html',
  styleUrls: ['./relamation-component.component.css']
})
export class RelamationComponentComponent implements OnInit {

  @Input() descriptionFils: number;

  afficher: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
