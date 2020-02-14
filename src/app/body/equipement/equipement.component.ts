import { Component, OnInit } from '@angular/core';
import { Equipement } from './model/equipement.model';
import { Equipements3axes } from './data/3axes.data';

/** models */

@Component({
  selector: 'app-equipement',
  templateUrl: './equipement.component.html',
  styleUrls: ['./equipement.component.scss']
})
export class EquipementComponent implements OnInit {

  typeEquipement: string[] = ['3 axes', '4 axes', '5 axes', 'Logiciel'];
  equipement3Axes: Equipement[];

  constructor() { }

  ngOnInit() {
    this.equipement3Axes = Equipements3axes;
  }

}
