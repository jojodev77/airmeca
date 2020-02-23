import { Component, OnInit, ViewChild, OnChanges, SimpleChanges, AfterViewChecked, SimpleChange } from '@angular/core';

/** models */
import { Equipement } from './model/equipement.model';
import { Equipements3axes } from './data/3axes.data';
import { Equipements4axes } from './data/4axes.data';

/** am */
import { MatAccordion } from '@angular/material/expansion';

/** services */
import { PannelService } from 'src/app/config/pannel.service';
import { trigger, state, transition, style, animate } from '@angular/animations';
import { Equipements5axes } from './data/5axes.data';


/** rxjs */


@Component({
  selector: 'app-equipement',
  templateUrl: './equipement.component.html',
  styleUrls: ['./equipement.component.scss']
})
export class EquipementComponent implements OnInit, OnChanges {
  @ViewChild('myaccordeon')myPanels: MatAccordion;
  panelOpenState = false;
  open: string = null;
  searchText;
  checked = true;
  type: string;
  visibilityCu3 = true;
  visibilityCu4 = true;
  visibilityCu5 = true;
  visibilityTn = true;
  visibilityTm = true;
  visibilityMs = true;
  
  equipement3Axes: Equipement[];
  equipement4Axes: Equipement[];
  equipement5Axes: Equipement[];
  constructor(private panelService: PannelService) { }

  ngOnInit() {
    this.equipement3Axes = Equipements3axes;
    this.equipement4Axes = Equipements4axes;
    this.equipement5Axes = Equipements5axes;

  }

  ngOnChanges(changes: SimpleChanges) {
   
  }

  openAll() {
    this.myPanels.openAll();
  }

  manageEquipementVisibility(value, type) {
     console.log(type, value.checked)
    if (value.checked === false && type === 'cu3') {
      this.visibilityCu3 = false;
  }
  if (value.checked === true && type === 'cu3') {
    this.visibilityCu3 = true;
}
  if (value.checked === false && type === 'cu4') {
    this.visibilityCu4 = false;
}
if (value.checked === true && type === 'cu4') {
  this.visibilityCu4 = true;
}
if (value.checked === false && type === 'cu5') {
  this.visibilityCu5 = false;
}
if (value.checked === true && type === 'cu5') {
this.visibilityCu5 = true;
}
if (value.checked === false && type === 'tn') {
  this.visibilityTn = false;
}
if (value.checked === true && type === 'tn') {
this.visibilityTn = true;
}
if (value.checked === false && type === 'tm') {
  this.visibilityTm = false;
}
if (value.checked === true && type === 'tm') {
this.visibilityTm = true;
}
}

}
