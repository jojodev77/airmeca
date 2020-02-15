import { Component, OnInit, ViewChild, OnChanges, SimpleChanges, AfterViewChecked } from '@angular/core';

/** models */
import { Equipement } from './model/equipement.model';
import { Equipements3axes } from './data/3axes.data';

/** am */
import { MatAccordion } from '@angular/material/expansion';

/** services */
import { PannelService } from 'src/app/config/pannel.service';

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

  typeEquipement: string[] = ['3 axes', '4 axes', '5 axes', 'Logiciel'];
  equipement3Axes: Equipement[];

  constructor(private panelService: PannelService) { }

  ngOnInit() {
    this.equipement3Axes = Equipements3axes;
    this.panelService.openMatAccordeon().subscribe(
      (data) => {this.open = data; }
    );
  }


  ngOnChanges(change: SimpleChanges) {
    this.open = change.open.currentValue;
    console.log(this.open);
    if (this.open === null) {
        this.openAll();
    }
    if (this.panelOpenState === false) {
      this.open = null;
    }
  }

  openAll() {
    this.myPanels.openAll();
  }

}
