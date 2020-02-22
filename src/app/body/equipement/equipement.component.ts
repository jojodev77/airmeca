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


/** rxjs */


@Component({
  selector: 'app-equipement',
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'yellow',
      })),
      state('closed', style({
        height: '100px',
        opacity: 0.5,
        backgroundColor: 'green'
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition ('* => open', [
        animate ('1s',
          style ({ opacity: '*' }),
        ),
      ]),
      transition('* => *', [
        animate('1s')
      ]),
    ]),
  ],
  templateUrl: './equipement.component.html',
  styleUrls: ['./equipement.component.scss']
})
export class EquipementComponent implements OnInit, OnChanges {
  @ViewChild('myaccordeon')myPanels: MatAccordion;
  panelOpenState = false;
  open: string = null;
    searchText;

  //animation
  isOpen = true;

  //equipement

  typeEquipement: string[] = ['3-axes', '4-axes', '5-axes', 'Logiciel'];
  equipement3Axes: Equipement[];
  equipement4Axes: Equipement[];
  equipement5Axes: Equipement[];
  animationGo: string;
  selected: string;
  filter: any;
  listEquipement: Equipement[];
  constructor(private panelService: PannelService) { }

  ngOnInit() {
    this.equipement3Axes = Equipements3axes;
    this.equipement4Axes = Equipements4axes;
    this.listEquipement = this.equipement3Axes
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes.animationGo.currentValue);
    if(changes.animationGo.isFirstChange) {
      this.toggle();
    }
  }

  openAll() {
    this.myPanels.openAll();
  }



  toggle() {
    this.isOpen = !this.isOpen;


  
  }

  antiToggle() {
    this.isOpen = !this.isOpen;
  }

  radioChange(item) {
    switch (item) {
      case '3-axes':
        this.listEquipement = this.equipement3Axes
        break;
      case '4-axes':
        this.listEquipement = this.equipement4Axes
        break;
      case '5-axes':
        this.listEquipement = this.equipement5Axes
        break;
    
      default:
        break;
    }
    if (item !== null || !undefined ) {
      this.toggle();
    }
}

}
