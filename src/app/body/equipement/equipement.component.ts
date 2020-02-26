import { Component, OnInit, ViewChild, OnChanges, SimpleChanges, AfterViewChecked, SimpleChange } from '@angular/core';

/** models */
import { Equipement } from './model/equipement.model';

/** am */
import { MatAccordion } from '@angular/material/expansion';

/** services */
import { PannelService } from 'src/app/config/pannel.service';
import { trigger, state, transition, style, animate } from '@angular/animations';
import { CentreUsinage } from './data/centreUsinage.data';
import { ToursCN } from './data/tourCn.data';



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
  visibilityCu = true;
  visibilityTCN = true;
  visibilityCu5 = true;
  visibilityTn = true;
  visibilityTm = true;
  visibilityMs = true;
  
  centreUsinage: any[];
  toursCN: any[];
  constructor(private panelService: PannelService) { }

  ngOnInit() {
    this.centreUsinage =  CentreUsinage;
    this.toursCN = ToursCN;

  }

  ngOnChanges(changes: SimpleChanges) {
   
  }

  openAll() {
    this.myPanels.openAll();
  }

  manageEquipementVisibility(value, type) {
     console.log(type, value.checked)
    if (value.checked === false && type === 'cu') {
      this.visibilityCu = false;
  }
  if (value.checked === true && type === 'cu3') {
    this.visibilityCu = true;
}
  if (value.checked === false && type === 'cu4') {
    this. visibilityTCN = false;
}
if (value.checked === true && type === 'cu4') {
  this. visibilityTCN = true;
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
