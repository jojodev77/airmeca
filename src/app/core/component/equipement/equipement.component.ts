import { Component, OnInit, SimpleChanges } from '@angular/core';

/** Data */
import { CentreUsinage } from './data/centreUsinage.data';
import { ToursCN } from './data/tourCn.data';
import { ToursTradionnel } from './data/tourTraditionnel.data';
import { MachineSpeiale } from './data/machineSpeciale.data';
import { Informatique } from './data/informatique.data';

@Component({
  selector: 'app-equipement',
  templateUrl: './equipement.component.html',
  styleUrls: ['./equipement.component.scss']
})
export class EquipementComponent implements OnInit {

  open: string = null;
  searchText: any;
  checked = true;
  type: string;
  visibilityCu = true;
  visibilityTCN = true;
  visibilityTT = true;
  visibilityMS = true;
  visibilityI = true;

  
  centreUsinage: any[];
  toursCN: any[];
  tourTraditionnel: any[];
  machineSpeciale: any[];
  informatique: any []
  constructor() { }

  ngOnInit() {
    this.centreUsinage =  CentreUsinage;
    this.toursCN = ToursCN;
    this.tourTraditionnel = ToursTradionnel;
    this.machineSpeciale = MachineSpeiale;
    this.informatique = Informatique;

  }

  ngOnChanges(changes: SimpleChanges) {
    this.searchText = changes.searchText.currentValue;
  }



  manageEquipementVisibility(value, type) {
     console.log(type, value.checked)
    if (value.checked === false && type === 'cu') {
      this.visibilityCu = false;
  }
  if (value.checked === true && type === 'cu') {
    this.visibilityCu = true;
}
  if (value.checked === false && type === 'tcn') {
    this. visibilityTCN = false;
}
if (value.checked === true && type === 'tcn') {
  this.visibilityTCN = true;
}
if (value.checked === false && type === 'tt') {
  this.visibilityTT = false;
}
if (value.checked === true && type === 'tt') {
this.visibilityTT = true;
}
if (value.checked === false && type === 'ms') {
  this.visibilityMS = false;
}
if (value.checked === true && type === 'ms') {
this.visibilityMS = true;
}
if (value.checked === false && type === 'i') {
  this.visibilityI = false;
}
if (value.checked === true && type === 'i') {
this.visibilityI = true;
}
}
setUppercaseName(searchText: string) {
  this.searchText = searchText;
}
}