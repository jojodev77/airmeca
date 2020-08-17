import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
@Component({
  selector: 'app-activite',
  templateUrl: './activite.component.html',
  styleUrls: ['./activite.component.scss']
})
export class ActiviteComponent implements OnInit {

  @ViewChild('myaccordeon')myPanels: MatAccordion;
  panelOpenState = false;
  open: string;


  constructor() { }

  ngOnInit(): void {
    this.panelOpenState = true;
  }

}
